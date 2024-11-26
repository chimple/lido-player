import { Component, Prop, h, Element, Host, getAssetPath } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppImage
 *
 * The `AppImage` component displays an image element within a container. It is a versatile
 * component that allows dynamic sizing, positioning, visibility control, and event handling.
 * The component is designed to work in different types of environments, supporting custom
 * events such as touch, match, and entry events.
 */
@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: false,
})
export class AppImage {
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
   * Event handler for a Correct touch event, where a custom function can be triggered when the column is touched.
   */
  @Prop() onCorrectTouch: string;

  @Prop() onInCorrectTouch: string;

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrectMatch: string;

  /**
   * Event handler triggered when a matching action occurs.
   */
  @Prop() onMatch: string;

  @Prop() onWrong: string;

  /**
   * Event handler triggered when the image is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * The source URL of the image to be displayed.
   */
  @Prop() src: string;

  /**
   * Reference to the HTML element that represents this image component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle method that runs after the component has been loaded into the DOM.
   * It initializes custom events based on the `type` of the image component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles for the image, including dimensions, positioning, and visibility
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      display: this.visible ? 'flex' : 'none',
      alignItems: 'center', // Vertically center the image
      justifyContent: 'center', // Horizontally center the image
    };

    return (
      <Host
        type={this.type}
        tabindex={this.tabIndex}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        value={this.value}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
        onWrong={this.onWrong}
        onCorrectMatch={this.onCorrectMatch}
        onCorrectTouch={this.onCorrectTouch}
        onInCorrectTouch={this.onInCorrectTouch}
        onEntry={this.onEntry}
      >
        <img class="image" src={this.src} alt="" style={style} />
      </Host>
    );
  }
}
