import { Component, Host, Prop, h, Element } from '@stencil/core';

/**
 * @component AppRandom
 *
 * The `AppRandom` component randomly positions its child elements within its container.
 * This component can be used when a random layout of elements is required. It allows
 * full customization via props such as dimensions, positioning, visibility, and event handling.
 */
@Component({
  tag: 'app-random',
  styleUrl: 'app-random.css',
  shadow: false,
})
export class AppRandom {
  /**
   * Unique identifier for the random container.
   */
  @Prop() id: string;

  /**
   * Value associated with the component, often used for internal logic.
   */
  @Prop() value: string;

  /**
   * The height of the container (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the container (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the container relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color of the container (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * The type of the component, used for conditional logic or specific styling.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Controls the visibility of the container. If `true`, the container is visible; otherwise, it is hidden.
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
   * Event handler triggered when the component is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that runs after the component is rendered in the DOM.
   * It randomly positions all child elements within the container using CSS `top` and `left` percentages.
   */
  componentDidLoad() {
    // Select all direct child elements of the component
    const slotElements = this.el.querySelectorAll('.random > *');

    // Iterate over each child and apply random positions
    slotElements.forEach((child: HTMLElement) => {
      const randomTop = Math.random() * 100; // Random value between 0 and 100 for vertical position
      const randomLeft = Math.random() * 100; // Random value between 0 and 100 for horizontal position

      child.style.top = `${randomTop}%`;
      child.style.left = `${randomLeft}%`;
    });
  }

  render() {
    // Inline styles for the container, including dimensions, positioning, and visibility
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      display: this.visible ? 'block' : 'none', // Toggle visibility
      zIndex: this.z,
      backgroundColor: this.bgColor,
    };

    return (
      <Host
        class="random"
        type={this.type}
        tabindex={this.tabIndex}
        value={this.value}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
        onWrong={this.onWrong}
        onCorrectMatch={this.onCorrectMatch}
        onCorrectTouch={this.onCorrectTouch}
        onInCorrectTouch={this.onInCorrectTouch}
        onEntry={this.onEntry}
      >
        {/* Slot to render child elements that will be randomly positioned */}
        <slot />
      </Host>
    );
  }
}
