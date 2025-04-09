import { Component, Prop, h, Element, Host, getAssetPath, State } from '@stencil/core';
import { convertUrlToRelative, initEventsForElement, parseProp } from '../../utils/utils';

/**
 * @component LidoImage
 *
 * The `LidoImage` component displays an image element within a container. It is a versatile
 * component that allows dynamic sizing, positioning, visibility control, and event handling.
 * The component is designed to work in different types of environments, supporting custom
 * events such as touch, match, and entry events.
 */
@Component({
  tag: 'lido-image',
  styleUrl: 'lido-image.css',
  shadow: false,
})
export class LidoImage {
  /**
   * Unique identifier for the text element.
   */
  @Prop() id: string;

  /**
   * The value associated with the image. Typically used for internal logic or identification.
   */
  @Prop() value: string;

  /**
   * The height of the image component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the image component (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the image within its container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the image within its container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the image relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color for the container of the image (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the image component, which can be used for conditional logic or styling purposes.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Controls the visibility of the image component. If `true`, the image is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier of an audio file associated with the image.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the image is touched or clicked.
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
   * Event handler triggered when the image is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * The source URL of the image to be displayed.
   */
  @Prop() src: string;

  /**
   * Enables border-image slice support when true; otherwise, behaves as a regular image component
   */
  @Prop() isSlice: string;
  
  /**
   * Specifies the width for border-image slice (e.g., "30px", "2em").
   * Only used when `isSlice` is enabled.
   */
  @Prop() sliceWidth: string = '30px';

  /**
   * Reference to the HTML element that represents this image component.
   */
  @Element() el: HTMLElement;

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string };

  /**
   * Lifecycle method that runs after the component has been loaded into the DOM.
   * It initializes custom events based on the `type` of the image component.
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
      display: JSON.parse(parseProp(`${this.visible}`, orientation)) ? 'flex' : 'none', // Toggle visibility
      alignItems: 'center', // Vertically center the image
      justifyContent: 'center', // Horizontally center the image

      // Slice Style
      borderImageSource: this.isSlice === 'true' ? `url(${convertUrlToRelative(this.src)})` : 'none',
      borderImageSlice: this.isSlice === 'true' ? `${parseInt(this.sliceWidth)} fill` : 'unset',
      borderImageRepeat: this.isSlice === 'true' ? 'round' : 'unset',
      borderImageWidth: this.isSlice === 'true' ? `${this.sliceWidth}` : 'unset',
      backgroundImage: this.isSlice === 'true' ? `url(${convertUrlToRelative(this.src)})` : 'none',
    };
  }

  render() {
    if (this.isSlice === 'true') {
      return <Host class="slice" id={this.id} type={this.type} tabIndex={this.tabIndex} onEntry={this.onEntry} style={this.style}></Host>;
    } else {
      return (
        <Host
          type={this.type}
          tabindex={this.tabIndex}
          style={this.style}
          aria-label={this.ariaLabel}
          aria-hidden={this.ariaHidden}
          value={this.value}
          audio={this.audio}
          onTouch={this.onTouch}
          onCorrect={this.onCorrect}
          onInCorrect={this.onInCorrect}
          onEntry={this.onEntry}
        >
          <img class="lido-image" src={convertUrlToRelative(this.src)} alt="" style={this.style} />
        </Host>
      );
    }
  }
}
