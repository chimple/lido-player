/* -------------------------------------------------------------------
 *  LidoFlash ‑ flippable flash‑card component
 *  Accepts the full generic Lido prop set *and* an externally‑
 *  controllable `flipped` prop.
 * ------------------------------------------------------------------*/

import { Component, Host, Prop, h, Element, State, Watch } from '@stencil/core';
import { parseProp, initEventsForElement, setVisibilityWithDelay } from '../../utils/utils';

@Component({
  tag: 'lido-flash-card',
  styleUrl: 'lido-flash-card.css',
  shadow: false,
})
export class LidoFlash {
  /* ---------- Generic Lido props (mirrors lido‑row) ---------- */
  /**
   * The value associated with the column component. Typically used for internal logic.
   */
  @Prop() value: string = '';

  /**
   * The height of the column component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string = 'auto';

  /**
   * The width of the column component (CSS value, e.g., '100px', '50%').
   */
  @Prop() width: string = 'auto';

  /**
   * The ARIA label of the container. Used for accessibility to indicate the purpose of the element.
   */
  @Prop() ariaLabel: string = '';

  /**
   * The ARIA hidden attribute of the container. Used for accessibility to hide the element.
   */
  @Prop() ariaHidden: string = '';

  /**
   * X-axis (horizontal) position of the column within its container (CSS value, e.g., '10px', '5%').
   */
  @Prop() x: string = '0px';

  /**
   * Y-axis (vertical) position of the column within its container (CSS value, e.g., '10px', '5%').
   */
  @Prop() y: string = '0px';

  /**
   * Z-index for stacking order of the column relative to other elements.
   */
  @Prop() z: string = '0';

  /**
   * Background color of the column (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string = '';

  /**
   * Defines the type of the column, which can be used for styling or specific logic handling.
   */
  @Prop() type: string = '';

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * A boolean that controls whether the column is visible (`true`) or hidden (`false`).
   */
  @Prop() visible: boolean = true;

  /**
   * Audio file URL or identifier for sound that will be associated with the column.
   */
  @Prop() audio: string = '';

  /**
   * Event handler for a touch event, where a custom function can be triggered when the column is touched.
   */
  @Prop() onTouch: string = '';

  /**
   * Event handler for an Incorrect matching action, which can be used to trigger custom logic when the action is incorrect.
   */
  @Prop() onInCorrect: string = '';

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrect: string = '';

  /**
   * Event handler triggered when the column is entered, useful for triggering animations or logic.
   */
  @Prop() onEntry: string = '';

  /**
   * The number of child elements that should be displayed inside the row.
   * This value is dynamically adjusted based on `minLength` and `maxLength`.
   */
  @Prop() direction: string;

  /**
   * The Display CSS property.
   */
  @Prop() display?: string;

  /* ---------- Flash‑card‑specific props ---------- */
  /** Content (any markup) shown on the front face. */
  @Prop() front: any;
  /** Content (any markup) shown on the back face. */
  @Prop() back: any;

  /**
   * Whether the card is flipped (back side visible).
   * `mutable` lets the component toggle itself on click;
   * `reflect` keeps the `<lido-flash-card flipped>` attribute in sync.
   */
  @Prop({ mutable: true, reflect: true }) flipped: boolean = false;

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

   /**
     * When set to true, disables the speak functionality of long press for this component and its children.
     */
    @Prop() disableSpeak: boolean = false;
  
  /**
   * Event handler for removing a required condition.
   */
  @Prop() onRemove: string = '';

  /* ---------  Element & internal state --------- */
  @Element() el: HTMLElement;
  @State() style: { [key: string]: string } = {};

  /**
  * Delay in milliseconds to make the cell visible after mount.
  */
  @Prop() delayVisible: string = '';

  /* ---------- Watches ---------- */

  /** React to external changes if you need side‑effects. */
  @Watch('flipped')
  handleFlippedChange() {
    /* No side‑effects for now; re‑render happens automatically. */
  }

  /* ---------- Lifecycle ---------- */

  componentWillLoad() {
    this.updateStyles();
    window.addEventListener('resize', this.updateStyles);
    window.addEventListener('load', this.updateStyles);
  }

  componentDidLoad() {
    setVisibilityWithDelay(this.el, this.delayVisible);    

    initEventsForElement(this.el, this.type);
    // handlingChildElements(this.el, this.minLength, this.maxLength, this.childElementsLength, 'inline-block');
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles);
    window.removeEventListener('load', this.updateStyles);
  }

  /* ---------- Internal helpers ---------- */

  /** Compute responsive inline styles. */
  private updateStyles = () => {
    const o = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

    this.style = {
      height: parseProp(this.height, o) || '200px',
      width: parseProp(this.width, o) || '200px',
      backgroundColor: parseProp(this.bgColor, o),
      top: parseProp(this.y, o),
      left: parseProp(this.x, o),
      zIndex: this.z,
      display: this.visible ? (this.display ? parseProp(this.display, o) : 'inline-block') : 'none',
      flexDirection: this.direction ? parseProp(this.direction, o) : undefined,
      margin: parseProp(this.margin, o),
    };
  };

  /** Toggle the card when it is clicked. */
  private handleFlip = () => {
    this.flipped = !this.flipped;
  };

  /* ---------- Render ---------- */

  render() {
    return (
      <Host
        value={this.value}
        tab-index={this.tabIndex}
        style={this.style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
        type={this.type}
        onClick={this.handleFlip}
        disable-speak={this.disableSpeak}
        onRemove={this.onRemove}
      >
        <div class={`card ${this.flipped ? 'flipped' : ''}`}>
          {/* Front face */}
          <div class="card-face card-front">{this.front != null ? this.front : <slot name="front" />}</div>

          {/* Back face */}
          <div class="card-face card-back">{this.back != null ? this.back : <slot name="back" />}</div>
        </div>
      </Host>
    );
  }
}
