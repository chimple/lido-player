import { Component, Host, Prop, State, h, Element } from '@stencil/core';
import { convertUrlToRelative, parseProp } from '../../utils/utils';

@Component({
  tag: 'lido-math-matrix',
  styleUrl: 'lido-math-matrix.css',
  shadow: false,
})
export class LidoMathMatrix {
  /** Number of rows in the matrix */
  @Prop() rows = 7;

  /** Number of columns in the matrix */
  @Prop() cols = 5;

  /** Number of slots to pre-fill as active by default */
  @Prop() defualtFill = 0;

  /** Show row index numbers on the left side */
  @Prop() leftIndex = false;

  /** Show column index numbers on the top side */
  @Prop() topIndex = false;

  /** Show row index numbers on the bottom side */
  @Prop() bottomIndex = false;

  /** Enable/disable click interactions on the slots */
  @Prop() clickable = true;

  /** If true, only active slots are visible; inactive ones are hidden */
  @Prop() activeOnlyVisible = false;

  /** Image source used inside the slots */
  @Prop() matrixImage: string;

  /** Background color for active slots */
  @Prop() activeBgColor: string = 'red';

  /** Background color for inactive slots */
  @Prop() inactiveBgColor: string = 'transparent';

  /** Border style applied to each slot */
  @Prop() border: string = '2px solid green';

  /** Height of the slot container */
  @Prop() height: string = '100%';

  /** Width of the slot container */
  @Prop() width: string = '100%';

  /** Border radius for each slot */
  @Prop() borderRadius: string = '5px';

  /** Z-index value for the matrix container */
  @Prop() z: string;

  /** Margin around the matrix container */
  @Prop() margin: string;

  /** Padding inside the matrix container */
  @Prop() padding: string;

  /** Controls visibility of the matrix (string "true" or "false") */
  @Prop() visible: string = 'false';

  /** Holds dynamically generated inline styles for the container */
  @State() style: { [key: string]: string | undefined } = {};

  /** Reference to the host element of this component */
  @Element() el: HTMLElement;

  componentDidLoad() {
    const slotElements = this.el.querySelectorAll('.slot');

    slotElements.forEach((el, i) => {
      const slot = el as HTMLElement;
      slot.style.setProperty('--active-bg-color', this.activeBgColor);
      slot.style.setProperty('--inactive-bg-color', this.inactiveBgColor);

      this.clickable ? (slot.style.pointerEvents = '') : (slot.style.pointerEvents = 'none');
      slot.style.border = this.border;

      if (slot.className.includes('slot-active')) {
        slot.style.visibility = 'visible';
        if (this.matrixImage) {
          slot.style.setProperty('--bg-image', `url(${convertUrlToRelative(this.matrixImage)})`);
        }
      } else if (this.activeOnlyVisible) {
        slot.style.visibility = 'hidden';
      }
    });

    this.updateSlots();
    this.updateStyles();
  }


  /**
   * Lifecycle method that runs before the component is rendered.
   * Initializes styles and sets up event listeners for resize and load events.
   */
  componentWillLoad() {
    this.updateStyles();
    this.updateSlots();
    window.addEventListener('resize', this.updateStyles.bind(this));
    window.addEventListener('load', this.updateStyles.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles.bind(this));
    window.removeEventListener('load', this.updateStyles.bind(this));
  }

  updateSlots() {
    const slotElement = this.el.querySelectorAll('.slot');
    const fristElement = this.el.querySelector('.slot') as HTMLElement;
    if (!slotElement.length || !fristElement) return;
    const slotMaxValues = fristElement.offsetWidth < fristElement.offsetHeight ? fristElement.offsetWidth : fristElement.offsetHeight;
    const slotParent = this.el.querySelectorAll('.slot-parent');
    slotParent.forEach(parent => {
      (parent as HTMLElement).style.width = `${slotMaxValues}px`
      Array.from(parent.children).forEach(el => {
        const item = el as HTMLElement;
        item.style.width = `${slotMaxValues}px`;
        item.style.height = `${slotMaxValues}px`;

        if (
          (!this.topIndex && item.classList.contains('topIndex')) ||
          (!this.leftIndex && item.classList.contains('leftIndex')) ||
          (!this.bottomIndex && item.classList.contains('bottomIndex'))
        ) {
          if(item.classList.contains('leftIndex'))item.parentElement.remove();
          item.remove();
        }
      });
    });
  }

  updateStyles() {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      zIndex: this.z,
      display: parseProp(`${this.visible}`, orientation) === 'true' ? 'flex' : 'none',
      borderRadius: parseProp(this.borderRadius, orientation),
    };
  }

  handleClickSlot(element: HTMLElement) {
    const index = parseInt(element.className.split(' ')[1].split('-')[1]);
    const slotElements = document.querySelectorAll('.slot');
    slotElements.forEach((el, i) => {
      const slotEl = el as HTMLElement;
      if (i < index) {
        slotEl.classList.add('slot-active');
        slotEl.classList.remove('slot-inactive');
        if (this.matrixImage) {
          slotEl.style.setProperty('--bg-image', `url(${convertUrlToRelative(this.matrixImage)})`);
        }
      } else {
        slotEl.classList.remove('slot-active');
        slotEl.classList.add('slot-inactive');
      }
    });
  }

  render() {
    let slotNumber = 1;
    return (
      <Host class="math-matrix" style={{ height: this.style.height, width: this.style.width, z: this.style.z, display: this.style.display }}>
        {Array.from({ length: this.rows + 1 }, (_, rowIndex) => (
          <div class="slot-parent" key={`row-${rowIndex}`}>
            <div style={rowIndex === 0 && { visibility: 'hidden' }} class="topIndex">
              {rowIndex}
            </div>
            {Array.from({ length: this.cols }, (_, colIndex) =>
              rowIndex === 0 ? (
                <div class="leftIndex">{++colIndex}</div>
              ) : (
                <div
                  class={`slot slot-${slotNumber++} ${this.defualtFill + 1 >= slotNumber ? 'slot-active' : 'slot-inactive'}`}
                  onClick={() => this.handleClickSlot(event.target as HTMLElement)}
                  key={`slot-${rowIndex}-${colIndex}`}
                  style={{ borderRadius: this.style.borderRadius }}
                ></div>
              ),
            )}
            <div style={rowIndex === 0 && { visibility: 'hidden' }} class="bottomIndex">
              {this.cols * rowIndex}
            </div>
          </div>
        ))}
      </Host>
    );
  }
}
