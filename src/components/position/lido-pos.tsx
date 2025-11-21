import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { initEventsForElement, parseProp } from '../../utils/utils';

/**
 * @component LidoPos
 *
 * The `LidoPos` component is used to position a block-level element with dynamic styling and event handling.
 * It supports positioning with `x` and `y` coordinates, sizing with `height` and `width`, and custom
 * events for interaction such as touch, match, and entry events.
 */
@Component({
  tag: 'lido-pos',
  styleUrl: 'lido-pos.css',
  shadow: false,
})
export class LidoPos {
  /**
   * Unique identifier for the positional element.
   */
  @Prop() id: string = '';

  /**
   * Value assigned to the component, often used for internal logic or data tracking.
   */
  @Prop() value: string = '';

  /**
   * The height of the component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string = 'auto';

  /**
   * The width of the component (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the component (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string = '0px';

  /**
   * Y-axis (vertical) position of the component (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string = '0px';

  /**
   * Z-index for stacking order of the element relative to others.
   */
  @Prop() z: string = '0';

  /**
   * Background color of the component (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string = '';

  /**
   * The type of the component, used for conditional logic or specific styles.
   */
  @Prop() type: string = '';

  /**
   * Tab index to support keyboard navigation within the component.
   */
  @Prop() tabIndex: number = 0;

  /**
   * Visibility flag to control whether the element is displayed (`true`) or hidden (`false`).
   */
  @Prop() visible: boolean | string = false;

  /**
   * URL or identifier for an audio file associated with the component.
   */
  @Prop() audio: string = '';

  /**
   * Event handler triggered when the component is touched or clicked.
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
   * Event handler triggered when the component is entered, often used to trigger animations or custom logic.
   */
  @Prop() onEntry: string = '';

  /**
   * The minimum number of drag elements that must be dropped inside the Drop element.
   */
  @Prop() minDrops: number = 1;

  /**
   * The Maximum number of drag elements that can be dropped inside the Drop element.
   */
  @Prop() maxDrops: number = 1;

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

  /**
   * Reference to the HTML element that represents this `lido-pos` component.
   */
  @Element() el: HTMLElement;

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string };

  /**
   * Lifecycle hook that is called after the component has been rendered in the DOM.
   * It initializes custom events based on the `type` of the component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  /**
   * Lifecycle method that runs before the component is rendered.
   * Initializes styles and sets up event listeners for resize and load events.
   */
  componentWillLoad() {
    this.updateStyles();
    window.addEventListener('resize', this.updateStyles.bind(this)); // Update on screen rotation
    window.addEventListener('load', this.updateStyles.bind(this)); // Update on screen rotation
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles.bind(this));
    window.removeEventListener('load', this.updateStyles.bind(this));
  }

  updateStyles() {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      backgroundColor: parseProp(this.bgColor, orientation),
      top: parseProp(this.y, orientation),
      left: parseProp(this.x, orientation),
      zIndex: this.z,
      display: JSON.parse(parseProp(`${this.visible}`, orientation)) ? 'block' : 'none', // Toggle visibility
      margin: parseProp(this.margin, orientation),
    };
  }

  render() {
    return (
      <Host
        id={this.id}
        class="lido-pos"
        type={this.type}
        tab-index={this.tabIndex}
        style={this.style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        minDrops={this.minDrops}
        maxDrops={this.maxDrops}
        value={this.value}
        audio={this.audio}
        onTouch={this.onTouch}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
      >
        {/* Slot for child elements */}
        <slot />
      </Host>
    );
  }
}
