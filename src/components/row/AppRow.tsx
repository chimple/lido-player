import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppRow
 *
 * The `AppRow` component is used to create a flexible row element that can contain other elements.
 * It supports dynamic positioning, sizing, visibility control, and custom events for interaction.
 */
@Component({
  tag: 'app-row',
  styleUrl: 'app-row.css',
  shadow: false,
})
export class AppRow {
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
   * Event handler triggered when a matching action occurs within the row.
   */
  @Prop() onMatch: string;

  /**
   * Event handler triggered when the row is entered, often used for triggering animations or custom logic.
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this `app-row` component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that runs after the component is loaded into the DOM.
   * It initializes custom events based on the `type` of the row component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles to position and size the row component
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      display: this.visible ? 'flex' : 'none', // Flexbox for row layout
      zIndex: this.z,
      backgroundColor: this.bgColor, // Apply background color if provided
    };

    return (
      <Host
        class="row"
        type={this.type}
        tabindex={this.tabIndex}
        value={this.value}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
        onEntry={this.onEntry}
      >
        {/* Slot for child elements */}
        <slot />
      </Host>
    );
  }
}
