import { Component, Prop, h, Element, Host } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppText
 *
 * The `AppText` component is used to display text with customizable styling.
 * It allows you to set the font, size, color, and background color, along with
 * positioning and visibility control. The component supports custom events like touch, match, and entry.
 */
@Component({
  tag: 'app-text',
  styleUrl: 'app-text.css',
  shadow: false,
})
export class AppText {
  /**
   * Unique identifier for the text element.
   */
  @Prop() id: string;
  @Prop() additionalClass: string;

  /**
   * Value associated with the text element, typically used for internal logic or tracking.
   */
  @Prop() value: string;

  /**
   * The string of text to be displayed in the component.
   */
  @Prop() string: string;

  /**
   * Font family for the text (CSS value, e.g., 'Arial', 'Times New Roman').
   */
  @Prop() font: string;

  /**
   * Font size for the text (CSS value, e.g., '16px', '1.5em').
   */
  @Prop() fontSize: string;

  /**
   * Font color for the text (CSS color value, e.g., '#000000', 'red').
   */
  @Prop() fontColor: string;

  /**
   * When set to `true`, the text will highlight while being spoken, typically used for accessibility.
   */
  @Prop() highlightWhileSpeaking: boolean;

  /**
   * Height of the text component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * Width of the text component (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the text component (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the text component (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the text component relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color of the text component (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the component, which can be used for conditional logic or specific styling.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Controls the visibility of the text component. If `true`, the text is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier for an audio file associated with the text component.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the text component is touched or clicked.
   */
  @Prop() onTouch: string;

  /**
   * Event handler for a Correct touch event, where a custom function can be triggered when the column is touched.
   */
  @Prop() onCorrect: string;

  @Prop() onInCorrect: string;

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrectMatch: string;

  /**
   * Event handler triggered when a matching action occurs with the text component.
   */
  @Prop() onMatch: string;

  @Prop() onWrong: string;

  /**
   * Event handler triggered when the text component is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this `app-text` component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that runs after the component is rendered in the DOM.
   * It initializes custom events based on the `type` of the text component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles to customize the appearance and positioning of the text component
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      fontSize: this.fontSize,
      fontFamily: this.font,
      color: this.fontColor,
      display: this.visible ? 'flex' : 'none', // Show or hide based on visibility prop
    };

    return (
      <Host
        class='text'
        value={this.value}
        type={this.type}
        tabindex={this.tabIndex}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
        id={this.id}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
      >
        {this.string}
      </Host>
    );
  }
}