import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { handlingChildElements, initEventsForElement, parseProp ,speakIcon} from '../../utils/utils';

/**
 * @component LidoWrap
 *
 * The `LidoWrap` component acts as a flexible container that supports dynamic positioning, sizing, and layout.
 * The component can display its content as a grid and supports custom events like touch, match, and entry.
 * It allows for full customization via props like dimensions, background color, visibility, and z-index.
 */
@Component({
  tag: 'lido-wrap',
  styleUrl: 'lido-wrap.css',
  shadow: false,
})
export class LidoWrap {
  /**
   * Controls whether the speak icon should appear directly on the top right corner of targeted element.
  */
  @Prop() showSpeakIcon: boolean = false;
  /**
   * Unique identifier for the wrap element.
   */
  @Prop() id: string;

  /**
   * Value associated with the wrap element, typically used for internal logic or tracking.
   */
  @Prop() value: string;

  /**
   * The height of the wrap container (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the wrap container (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the wrap container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the wrap container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the wrap container relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color of the wrap container (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the wrap container, which can be used for conditional logic or specific styling.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Controls the visibility of the wrap container. If `true`, the container is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier of an audio file associated with the wrap container.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the wrap container is touched or clicked.
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
   * Event handler triggered when the wrap container is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this `lido-wrap` component.
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
   * Enables flex layout mode for the container.
   * If set to `"true"`, the component will use a flex layout (`display: flex`) instead of the default grid layout (`display: grid`).
   * Additionally, the `lido-wrap` class will be replaced with `lido-flex` to allow custom flex-specific styling.
   */
  @Prop() flex: string;

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
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string };

  /**
   * Lifecycle hook that runs after the component is rendered in the DOM.
   * It initializes custom events based on the `type` of the wrap container.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
    handlingChildElements(this.el, this.minLength, this.maxLength, this.childElementsLength);
    if (this.flex === 'true') {
      this.el.classList.remove('lido-wrap');
      this.el.classList.add('lido-flex');
    }
    if(this.showSpeakIcon) {
        speakIcon(this.el);
         this.el.append(speakIcon(this.el));
          }
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
      display: JSON.parse(parseProp(`${this.visible}`, orientation)) ? (this.flex === 'true' ? 'flex' : 'grid') : 'none', // Toggle visibility
      margin: parseProp(this.margin, orientation),
    };
  }

  render() {
    return (
      <Host
        class="lido-wrap"
        value={this.value}
        type={this.type}
        tab-index={this.tabIndex}
        style={this.style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        minDrops={this.minDrops}
        maxDrops={this.maxDrops}
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
