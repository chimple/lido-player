import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { handlingChildElements, initEventsForElement, parseProp } from '../../utils/utils';
import { uptime } from 'process';

/**
 * @component LidoRow
 *
 * The `LidoRow` component is used to create a flexible row element that can contain other elements.
 * It supports dynamic positioning, sizing, visibility control, and custom events for interaction.
 */
@Component({
  tag: 'lido-row',
  styleUrl: 'lido-row.css',
  shadow: false,
})
export class LidoRow {
  /**
   * Value associated with the row, typically used for internal logic or data.
   */
  @Prop() value: string;

  /**
   * The height of the row (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the row (CSS value, e.g., '100px', '50%').
   */
  @Prop() width: string;

  /**
   * The ARIA label of the container. Used for accessibility to indicate the purpose of the element.
   */
  @Prop() ariaLabel: string;

  /**
   * The ARIA hidden attribute of the container. Used for accessibility to hide the element.
   */
  @Prop() ariaHidden: string;

  /**
   * X-axis (horizontal) position of the row (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the row (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the row relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color of the row (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the row, used for conditional logic or specific styling.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Controls the visibility of the row. If `true`, the row is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier of an audio file associated with the row.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the row is touched or clicked.
   */
  @Prop() onTouch: string;

  /**
   * Event handler for an Incorrect matching action, which can be used to trigger custom logic when the action is incorrect.
   */
  @Prop() onInCorrect: string;

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrect: string;

  /**
   * Event handler triggered when the row is entered, often used for triggering animations or custom logic.
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this `lido-row` component.
   */
  @Element() el: HTMLElement;

  /**
   * The number of child elements that should be displayed inside the row.
   * This value is dynamically adjusted based on `minLength` and `maxLength`.
   */
  @Prop() childElementsLength: number;

  /**
   * The minimum number of child elements that must be displayed inside the row.
   * If `childElementsLength` is less than this value, additional elements may be shown to meet this minimum.
   */
  @Prop() minLength: number;

  /**
   * The maximum number of child elements that can be displayed inside the row.
   * If `childElementsLength` exceeds this value, excess elements will be hidden.
   */
  @Prop() maxLength: number;

  /**
   * Specifies the direction of the component, which determines the layout or flow of elements.
   */
  @Prop() direction: string;

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string } = {};

  /**
   * Sets the CSS display property for the component.
   * Accepts any valid CSS display value (e.g., 'block', 'flex', 'grid', 'none').
   */
  @Prop() display?: string;

  /**
   * Lifecycle hook that runs after the component is loaded into the DOM.
   * It initializes custom events based on the `type` of the row component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
    handlingChildElements(this.el, this.minLength, this.maxLength, this.childElementsLength, 'flex');
  }

  /**
   * Lifecycle method that runs before the component is rendered.
   * Initializes styles and sets up event listeners for resize and load events.
   */
  componentWillLoad() {
    this.updateStyles();
    window.addEventListener('resize', this.updateStyles.bind(this));
    window.addEventListener('load', this.updateStyles.bind(this));
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
      display: this.visible ? (this.display ? parseProp(this.display, orientation) : 'flex') : 'none', // Toggle visibility
      flexDirection: !this.direction ? 'row' : parseProp(this.direction, orientation),
      gridTemplateColumns: this.display && parseProp(this.display, orientation) === 'grid' ? 'repeat(auto-fill, minmax(186px, auto))' : undefined,
      gap: this.display && parseProp(this.display, orientation) === 'grid' ? '20px' : undefined,
    };
  }

  render() {
    return (
      <Host
        class="lido-row"
        type={this.type}
        tabindex={this.tabIndex}
        value={this.value}
        style={this.style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
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
