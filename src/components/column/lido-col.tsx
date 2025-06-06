import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { convertUrlToRelative, handlingChildElements, initEventsForElement, parseProp } from '../../utils/utils';

/**
 * @component LidoCol
 *
 * The `LidoCol` component is a dynamic column-like UI element that can be
 * customized via various properties such as dimensions, position, visibility,
 * background color, and event handlers. It is designed to work within
 * containers (`lido-container`) and can include child components like
 * `lido-text`, `lido-row`, etc.
 */
@Component({
  tag: 'lido-col',
  styleUrl: 'lido-col.css',
  shadow: false,
})
export class LidoCol {
  /**
   * The unique identifier for the column component.
   */
  @Prop() id: string;

  /**
   * The value associated with the column component. Typically used for internal logic.
   */
  @Prop() value: string;

  /**
   * The height of the column component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the column component (CSS value, e.g., '100px', '50%').
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
   * The x-coordinate (left position) of the column within its container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * The y-coordinate (top position) of the column within its container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * The z-index of the column to control stacking order.
   */
  @Prop() z: string;

  /**
   * The background color of the column (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the column, which can be used for styling or specific logic handling.
   */
  @Prop() type: string;

  /**
   * The tab index value, used to set the tab order of the column for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * A boolean that controls whether the column is visible (`true`) or hidden (`false`).
   */
  @Prop() visible: boolean;

  /**
   * Audio file URL or identifier for sound that will be associated with the column.
   */
  @Prop() audio: string;

  /**
   * Event handler for a touch event, where a custom function can be triggered when the column is touched.
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
   * Event handler for when the column is entered, which can be used to initiate specific behaviors on entry.
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element that represents this component.
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
   * The border image of the column (CSS border-image value, e.g., 'url(border.png)', 'linear-gradient(red, blue)').
   */
  @Prop() borderImage?: string;

  /**
   * Applies a CSS box-shadow to the component.
   * Accepts any valid CSS box-shadow value.
   * Example: "0px 4px 10px rgba(0, 0, 0, 0.1)"
   */
  @Prop() boxShadow?: string;

  /**
   * The minimum number of drag elements that must be dropped inside the Drop element.
   */
  @Prop() minDrops: number = 1;

  /**
   * The Maximum number of drag elements that can be dropped inside the Drop element.
   */
  @Prop() maxDrops: number = 1;

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string } = {};

  /**
   * This lifecycle hook is called after the component is rendered in the DOM.
   * It initializes events for the column based on the provided type.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
    handlingChildElements(this.el, this.minLength, this.maxLength, this.childElementsLength);
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
    const borderImg = this.borderImage ? convertUrlToRelative(this.borderImage) : '';
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      backgroundColor: parseProp(this.bgColor, orientation),
      top: parseProp(this.y, orientation),
      left: parseProp(this.x, orientation),
      zIndex: this.z,
      display: this.visible ? 'flex' : 'none', // Toggle visibility
      flexDirection: !this.direction ? 'column' : parseProp(this.direction, orientation),
      borderImage: `url(${borderImg})`,
      borderImageSlice: borderImg ? '0 fill' : '',
      boxShadow: this.boxShadow ? this.boxShadow : 'unset',
    };
  }

  render() {
    return (
      <Host
        id={this.id}
        class="lido-col"
        type={this.type}
        tabindex={this.tabIndex}
        value={this.value}
        style={this.style}
        minDrops={this.minDrops}
        maxDrops={this.maxDrops}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
      >
        <slot />
      </Host>
    );
  }
}
