import { Component, h, Host, Prop, State, Element, Watch } from '@stencil/core';
import { convertUrlToRelative } from '../../utils/utils';
import * as math from 'mathjs';
import { on } from 'events';

@Component({
  tag: 'lido-slider',
  styleUrl: 'lido-slider.css',
  shadow: false,
})
export class SlideMeasurementGame {
  /**
   * Unique identifier for the component instance
   */
  @Prop() id: string = 'lido-slider';

  /**
   * CSS width of the component (e.g., "300px", "100%")
   */
  @Prop() width: string;

  /**
   * Fill amount to display inside the SVG rect.
   * Accepts values like "30%" or "30" (treated as percentage of fill)
   */
  @Prop() fill: string;

  /**
   * Type of number to be displayed on the ruler.
   * Can be 'integer', 'decimal', or 'fraction'.
   */
  @Prop() numberType: string = 'integer';

  /**
   * Minimum value shown on the ruler (used for number generation)
   */
  @Prop() min: number = 0;

  /**
   * Number of divisions or segments to split the ruler path into
   */
  @Prop() division: number = 5;

  /**
   * Maximum value shown on the ruler (used for number generation)
   */
  @Prop() max: number = 10;

  /**
   * Enables slider interaction (currently unused in logic, can be used to toggle slider UI)
   */
  @Prop() slider: boolean;

  /**
   * URL or relative path to the external SVG file to be fetched and rendered
   */
  @Prop() src: string;

  /**
   * Determines the direction in which the rect fill should grow:
   * - 'vertical': from bottom to top
   * - 'horizontal': from left to right
   */
  @Prop() fillDirection: string;

  /**
   * Internal state to hold the SVG content after fetching and processing
   */
  @State() svgContent: string = '';

  @Element() el: HTMLElement;

  private originalHeight: number = null;
  private originalY: number = null;

  async componentWillLoad() {
    await this.renderSVG();
  }

  @Watch('src')
  async onSrcChange() {
    await this.renderSVG();
    this.onPropChange();
  }

  async renderSVG() {
    const response = await fetch(convertUrlToRelative(this.src));
    if (response.ok) {
      let svgText = await response.text();

      let pathIndex = 0;
      svgText = svgText.replace(/<path([^>]*)>/g, (match, attrs) => {
        pathIndex++;
        const id = pathIndex === 1 ? 'glassPath' : pathIndex === 2 ? 'rulerPath' : `path${pathIndex}`;
        return `<path id="${id}"${attrs}>`;
      });

      const clipPathDef = `
        <clipPath id="clipGlass">
          <use xlink:href="#glassPath" />
        </clipPath>
      `;

      svgText = svgText.replace(
        /<svg([^>]*)>/,
        `<svg$1>
          ${clipPathDef}
        `,
      );

      svgText = svgText.replace(/<rect([^>]*)\/?>/, `<rect id="fillArea" $1 clip-path="url(#clipGlass)" />`);

      this.svgContent = svgText;
    }
  }

  componentDidLoad() {
    this.updateFill();
    this.addRulerNumbers();
  }

  @Watch('fill')
  @Watch('division')
  @Watch('fillDirection')
  @Watch('numberType')
  @Watch('min')
  @Watch('max')
  onPropChange() {
    this.updateFill();
    this.addRulerNumbers();
  }

  updateFill() {
    const svgEl = this.el.querySelector('.svg-el')?.querySelector('svg');
    if (!svgEl) return;

    const rect = svgEl.querySelector('#fillArea') as SVGRectElement;
    if (!rect) return;

    const fillDirection = this.fillDirection;
    console.log(`Fill direction: ${fillDirection}`);

    let originalSize: number;
    let originalOffset: number;

    if (this.fillDirection === 'vertical') {
      if (this.originalHeight === null || this.originalY === null) {
        this.originalHeight = +rect.getAttribute('height') || 100;
        this.originalY = +rect.getAttribute('y') || 0;
      }
      originalSize = this.originalHeight;
      originalOffset = this.originalY;
    } else {
      if (this.originalHeight === null || this.originalY === null) {
        this.originalHeight = +rect.getAttribute('width') || 100;
        this.originalY = +rect.getAttribute('x') || 0;
      }
      originalSize = this.originalHeight;
      originalOffset = this.originalY;
    }

    const fullSize = originalSize;
    const start = originalOffset;

    // Parse fill ("30%" or "30")
    let fillPercent = 0;
    if (typeof this.fill === 'string') {
      const percentMatch = this.fill.match(/^(\d+(?:\.\d+)?)%$/);
      if (percentMatch) {
        fillPercent = Math.min(Math.max(parseFloat(percentMatch[1]) / 100, 0), 1);
      } else {
        const numericMatch = this.fill.match(/^(\d+(?:\.\d+)?)$/);
        if (numericMatch) {
          fillPercent = Math.min(Math.max(parseFloat(numericMatch[1]) / 100, 0), 1);
        }
      }
    }

    const newSize = fullSize * fillPercent;
    const newOffset = fillDirection === 'vertical' ? start + (fullSize - newSize) : start;

    if (fillDirection === 'vertical') {
      rect.setAttribute('height', newSize.toString());
      rect.setAttribute('y', newOffset.toString());
    } else {
      rect.setAttribute('width', newSize.toString());
      rect.setAttribute('x', '0');
    }
  }

  addRulerNumbers() {
    const svgEl = this.el.querySelector('.svg-el')?.querySelector('svg') as SVGSVGElement;
    if (!svgEl) return;

    const rulerPath = svgEl.querySelector('#rulerPath') as SVGPathElement;
    if (!rulerPath) return;

    // Clear old numbers
    const oldNumbers = svgEl.querySelectorAll('.ruler-number');
    oldNumbers.forEach(node => node.remove());

    const divisions = this.division;
    const pointsCount = divisions + 1;
    const pathLength = rulerPath.getTotalLength();

    const stepValue = (this.max - this.min) / divisions;

    for (let i = 0; i < pointsCount; i++) {
      let value: number | string = 0;
      if (this.fillDirection === 'vertical') {
        value = this.max - i * stepValue;
      } else if (this.fillDirection === 'horizontal') {
        value = this.min + i * stepValue;
      }
      const pointAtLength = rulerPath.getPointAtLength((pathLength / divisions) * i);
      const textElem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      const fraction = math.fraction(value / this.max);

      value = this.numberType === 'integer' ? Math.round(value) : this.numberType === 'decimal' ? parseFloat(value.toFixed(1)) : fraction.toFraction(true);

      textElem.classList.add('ruler-number');
      textElem.setAttribute('x', pointAtLength.x.toString());
      textElem.setAttribute('y', (pointAtLength.y + 15).toString());
      textElem.setAttribute('text-anchor', 'end');
      textElem.setAttribute('font-size', '40');
      textElem.setAttribute('fill', '#333');
      textElem.textContent = value.toString();
      svgEl.appendChild(textElem);
    }
  }

  render() {
    return (
      <Host
        id={this.id}
        class="lido-slide"
        src={this.src}
        fill={this.fill}
        fillDirection={this.fillDirection}
        slider={this.slider}
        style={{ width: this.width }}
        min={this.min}
        max={this.max}
        division={this.division}
        numberType={this.numberType}
      >
        <div innerHTML={this.svgContent} class="svg-el"></div>
      </Host>
    );
  }
}
