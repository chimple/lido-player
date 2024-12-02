import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppWrap
 *
 * The `AppWrap` component acts as a flexible container that supports dynamic positioning, sizing, and layout.
 * The component can display its content as a grid and supports custom events like touch, match, and entry.
 * It allows for full customization via props like dimensions, background color, visibility, and z-index.
 */
@Component({
  tag: 'app-wrap',
  styleUrl: 'app-wrap.css',
  shadow: false,
})
export class AppWrap {
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
   * Event handler triggered when a matching action occurs with the wrap container.
   */
  @Prop() onMatch: string;


  /**
   * Event handler triggered when the wrap container is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this `app-wrap` component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that runs after the component is rendered in the DOM.
   * It initializes custom events based on the `type` of the wrap container.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles to position and size the wrap container, with grid layout applied
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      display: this.visible ? 'grid' : 'none', // Use grid layout
      zIndex: this.z,
      backgroundColor: this.bgColor,
    };

    return (
      <Host
        class="wrap"
        value={this.value}
        type={this.type}
        tabindex={this.tabIndex}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
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
