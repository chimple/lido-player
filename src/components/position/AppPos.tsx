import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppPos
 *
 * The `AppPos` component is used to position a block-level element with dynamic styling and event handling.
 * It supports positioning with `x` and `y` coordinates, sizing with `height` and `width`, and custom
 * events for interaction such as touch, match, and entry events.
 */
@Component({
  tag: 'app-pos',
  styleUrl: 'app-pos.css',
  shadow: false,
})
export class AppPos {
  /**
   * Unique identifier for the positional element.
   */
  @Prop() id: string;

  /**
   * Value assigned to the component, often used for internal logic or data tracking.
   */
  @Prop() value: string;

  /**
   * The height of the component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the component (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the component (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the component (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the element relative to others.
   */
  @Prop() z: string;

  /**
   * Background color of the component (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * The type of the component, used for conditional logic or specific styles.
   */
  @Prop() type: string;

  /**
   * Tab index to support keyboard navigation within the component.
   */
  @Prop() tabIndex: number;

  /**
   * Visibility flag to control whether the element is displayed (`true`) or hidden (`false`).
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier for an audio file associated with the component.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the component is touched or clicked.
   */
    @Prop() onTouch: string;

  /**
   * Event handler for a Correct touch event, where a custom function can be triggered when the column is touched.
   */
  @Prop() onCorrectTouch: string;

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrectMatch: string;

  /**
   * Event handler triggered when a matching action occurs (e.g., custom logic for interactions).
   */
  @Prop() onMatch: string;

  /**
   * Event handler triggered when the component is entered, often used to trigger animations or custom logic.
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element that represents this `app-pos` component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that is called after the component has been rendered in the DOM.
   * It initializes custom events based on the `type` of the component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles to position and size the component
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      display: this.visible ? 'block' : 'none', // Toggle visibility
    };

    return (
      <Host
        class="pos"
        type={this.type}
        tabindex={this.tabIndex}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        value={this.value}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
        onCorrectMatch={this.onCorrectMatch}
        onCorrectTouch={this.onCorrectTouch}
        onEntry={this.onEntry}
      >
        {/* Slot for child elements */}
        <slot />
      </Host>
    );
  }
}
