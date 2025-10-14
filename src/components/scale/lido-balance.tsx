import { Component, h, Host, Prop, Element, State,  Method ,Watch} from '@stencil/core';
import { initEventsForElement, convertUrlToRelative, parseProp } from '../../utils/utils';

@Component({
  tag: 'lido-balance',
  styleUrl: 'lido-balance.css',
  shadow: false,
})
export class LidoBalance {
   /**
   * URL of the pivot (base stand) image used in the balance visualization.
   */
  @Prop() pivotimage: string =
    'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Display%20stand.svg';

  /**
   * URL of the scale (bar) image that tilts based on the weight difference.
   */
  @Prop() scaleimage: string =
    'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Bar.svg';

  /**
   * URL of the handler (side stands / hooks) image for the balance.
   */
  @Prop() handlerimage: string =
    'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Stands.svg';

  /**
   * Fill color applied to all loaded SVGs (pivot, scale, handler).
   * Defaults to "brown".
   */
  @Prop() fill: string = 'brown';

  /**
   * Initial tilt value of the balance.
   * Negative = tilts left, Positive = tilts right.
   */
  @Prop() tilt: number = 0;

  /**
   * Maximum allowed tilt angle (in degrees) for the balance bar.
   */
  @Prop() maxTilt: number = 9.5;

  /**
   * Action(s) to execute when the component enters the DOM.
   * Example: trigger animations or audio cues.
   */
  @Prop() onEntry: string = '';

  /**
   * CSS height of the component (responsive values allowed).
   * Default: "auto".
   */
  @Prop() height: string = 'auto';

  /**
   * CSS width of the component (responsive values allowed).
   * Default: "auto".
   */
  @Prop() width: string = 'auto';

  /**
   * Horizontal (X-axis) offset for positioning the component.
   * Default: "0px".
   */
  @Prop() x: string = '0px';

  /**
   * Vertical (Y-axis) offset for positioning the component.
   * Default: "0px".
   */
  @Prop() y: string = '0px';

  /**
   * Z-index for stacking order of the component.
   * Default: "0".
   */
  @Prop() z: string = '0';

  /**
   * Controls component visibility.
   * Accepts boolean (`true`/`false`) or string ("true"/"false").
   */
  @Prop() visible: boolean | string = false;

  /**
   * CSS margin applied to the outer container.
   */
  @Prop() margin: string = '';

  /**
   * CSS padding applied to the outer container.
   */
  @Prop() padding: string = '';

  /**
   * Balance symbol shown when `showSymbol` is true.
   * Default: "=".
   */
  @Prop({ mutable: true, reflect: true }) balanceSymbol: string = '=';

  /**
   * Whether the balance symbol is currently displayed.
   * Can be toggled with `revealSymbol()` and `hideSymbol()`.
   */
  @Prop({ mutable: true, reflect: true }) showSymbol: boolean = false;

  /**
   * Operation type used to calculate balance values.
   * Supported: "count", "add", "subtract", etc.
   */
  @Prop() operation: string = 'count';

  /**
   * SVG markup of the pivot element after applying fill/stroke modifications.
   */
  @State() pivotSvg: string = '';

  /**
   * SVG markup of the scale element after applying fill/stroke modifications.
   */
  @State() scaleSvg: string = '';

  /**
   * SVG markup of the handler element after applying fill/stroke modifications.
   */
  @State() handlerSvg: string = '';

  /**
   * Computed inline styles applied to the component host.
   * Updates dynamically based on orientation and props.
   */
  @State() style: { [key: string]: string } = {};

  /**
   * Final effective tilt value (after clamping/updates).
   */
  @State() tiltf: number = 0;

  /**
   * Current computed value of the left side of the balance.
   */
  @State() leftVal: number = 0;

  /**
   * Current computed value of the right side of the balance.
   */
  @State() rightVal: number = 0;

    /**
   * Reference to the scale (bar) DOM element.  
   * Used to apply rotation transforms during balance animation.
   */
  private scaleEl!: HTMLElement;

  /**
   * ID of the current animation frame request.  
   * Stored so it can be canceled when the component disconnects.
   */
  private animationFrameId: number;

  /**
   * Reference to the left handler (hook/stand) DOM element.  
   * Translated vertically when the balance tilts.
   */
  private leftHandleEl!: HTMLElement;

  /**
   * Reference to the right handler (hook/stand) DOM element.  
   * Translated vertically when the balance tilts.
   */
  private rightHandleEl!: HTMLElement;

  /**
   * Reference to the left parent container DOM element.  
   * Used to adjust Y-translation of dropped content during tilt.
   */
  private leftParentEl!: HTMLElement;

  /**
   * Reference to the right parent container DOM element.  
   * Used to adjust Y-translation of dropped content during tilt.
   */
  private rightParentEl!: HTMLElement;

  @Method()
  async revealSymbol() {
   this.showSymbol = true;
  }

  @Method()
  async hideSymbol() {
   this.showSymbol = false;
  }
  @Element() el: HTMLElement;
  async componentWillLoad() {
    this.updateStyles();
    this.pivotSvg = await this.fetchAndApplyFill(this.pivotimage);
    this.scaleSvg = await this.fetchAndApplyFill(this.scaleimage);
    this.handlerSvg = await this.fetchAndApplyFill(this.handlerimage);
   }

  componentDidLoad() {
     setTimeout(() => {
    this.animateBalance();
  }, 4000);
  this.leftParentEl = document.getElementById("leftparent") as HTMLElement;
  this.rightParentEl = document.getElementById("rightparent") as HTMLElement;
   initEventsForElement(this.el)
  }

  disconnectedCallback() {
    if (this.animationFrameId != null)
    cancelAnimationFrame(this.animationFrameId);
  }

  private async fetchAndApplyFill(url: string): Promise<string> {
    try {
      const res = await fetch(url);
      if (!res.ok) return '';
      let svg = await res.text();
      svg = svg.replace(/fill="[^"]*"/g, '');
      svg = svg.replace(/stroke="[^"]*"/g, '');

      svg = svg.replace(
        /<svg([^>]*)>/,
        `<svg$1 fill="${this.fill}" stroke="${this.fill}">`,
      );

      return svg;
    } catch (e) {
      console.error('SVG fetch failed:', e);
      return '';
    }
  }
  private currentAngle = 0; 
  @Watch('tilt')
  tiltChanged(newValue: number) {
    this.tiltf = newValue;
  }

  @Method()
  async updateTilt(leftVal: number, rightVal: number) {
  const diff = rightVal - leftVal;
  const newTilt = Math.max(-5, Math.min(5, diff));
  this.tiltf = newTilt;   
  }


  private animateBalance() {
  const rotate = () => {
    let targetAngle = (this.tiltf / 5) * this.maxTilt;

    if (targetAngle > this.maxTilt) targetAngle = this.maxTilt;
    if (targetAngle < -this.maxTilt) targetAngle = -this.maxTilt;

    this.currentAngle += (targetAngle - this.currentAngle) * 0.1;

    if (this.currentAngle > this.maxTilt) this.currentAngle = this.maxTilt;
    if (this.currentAngle < -this.maxTilt) this.currentAngle = -this.maxTilt;

    if (this.scaleEl) {
      this.scaleEl.style.transform = `rotate(${this.currentAngle}deg)`;
      this.scaleEl.style.transformOrigin = '50% 80%';
    }
    if (this.leftParentEl && this.rightParentEl) {
      const maxOffset = 60; 
      const offset = (this.currentAngle / this.maxTilt) * maxOffset;

      this.leftParentEl.style.transform = `translateY(${-offset}px)`;
      this.rightParentEl.style.transform = `translateY(${offset}px)`;
  
    }
    if (this.leftHandleEl && this.rightHandleEl) {
      const isPortrait = window.innerHeight > window.innerWidth;
      const maxOffset = isPortrait ? 40 : 60; 
      const offset = (this.currentAngle / this.maxTilt) * maxOffset;
      this.leftHandleEl.style.transform = `translateY(${-offset}px)`;
      this.rightHandleEl.style.transform = `translateY(${offset}px)`;
    }
  this.animationFrameId = requestAnimationFrame(rotate);
  };
  rotate();
 }
  updateStyles() {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      top: parseProp(this.y, orientation),
      left: parseProp(this.x, orientation),
      zIndex: this.z,
      display: parseProp(`${this.visible}`, orientation) === "true" ? 'flex' : 'none', 
      margin: parseProp(this.margin, orientation),
      padding: parseProp(this.padding, orientation),
     
    };
  }
  render() {
    return (
      <Host 
        onEntry={this.onEntry}
        class="lido-balance"
        tilt={this.tilt.toString()} 
        operation={this.operation.toString()}>
        <div id="lidobalancewrapper"  class="balance-wrapper" style={this.style}>
          <div innerHTML={this.pivotSvg} id="pivotimg" class="pivot"></div>
          <div innerHTML={this.scaleSvg} id="scaleimg" class="scale" ref={(el) => (this.scaleEl = el as HTMLElement)}></div>
          <div innerHTML={this.handlerSvg} id="handlerimg" class="handler" ref={(el) => (this.leftHandleEl = el as HTMLElement)}></div> 
          <div innerHTML={this.handlerSvg} id="handimg" class="hand" ref={(el) => (this.rightHandleEl = el as HTMLElement)}></div> 
          <div id="balanceSymbol" class="lido-balance-symbol" aria-hidden={!this.showSymbol}>{this.showSymbol ? this.balanceSymbol : ''}</div>
        </div>
      </Host>
    );
  }
}
