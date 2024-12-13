import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppCol
 *
 * The `AppCol` component is a dynamic column-like UI element that can be
 * customized via various properties such as dimensions, position, visibility,
 * background color, and event handlers. It is designed to work within
 * containers (`app-container`) and can include child components like
 * `app-text`, `app-row`, etc.
 */
@Component({
  tag: 'app-col',
  styleUrl: 'app-col.css',
  shadow: false,
})
export class AppCol {
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
   * This lifecycle hook is called after the component is rendered in the DOM.
   * It initializes events for the column based on the provided type.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles applied to the column, mainly for positioning and background.
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      display: this.visible ? 'flex' : 'none',
      zIndex: this.z,
    };

    return (
      <Host
        id={this.id}
        class="col"
        type={this.type}
        tabindex={this.tabIndex}
        value={this.value}
        style={style}
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
