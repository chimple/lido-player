import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppContainer
 *
 * The `AppContainer` component acts as a container for other elements. It scales responsively
 * based on the window size, adjusts background color, and provides various configurable properties
 * such as dimensions, positioning, visibility, and custom event handlers.
 */
@Component({
  tag: 'app-container',
  styleUrl: 'app-container.css',
  shadow: false,
})
export class AppContainer {
  /**
   * Unique identifier for the container.
   */
  @Prop() id: string;

  /**
   * Objective or purpose of the container. Can be used for internal logic or tracking.
   */
  @Prop() objective: string;

  /**
   * Value assigned to the container. This can be used for logic related to this component.
   */
  @Prop() value: string;

  /**
   * The height of the container (CSS value).
   */
  @Prop() height: string;

  /**
   * The width of the container (CSS value).
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
   * X-axis (horizontal) position of the container.
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the container.
   */
  @Prop() y: string;

  /**
   * Z-index to control the stacking order of the container.
   */
  @Prop() z: string;

  /**
   * Background color of the container (CSS color value).
   */
  @Prop() bgColor: string;

  /**
   * Type of the container, which can be used for conditional logic or styling purposes.
   */
  @Prop() type: string;

  /**
   * TabIndex for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Visibility flag for the container. If `true`, the container is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier of an audio file associated with the container.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the container is touched or clicked.
   */
  @Prop() onTouch: string;

  /**
   * Event handler for a Correct touch event, where a custom function can be triggered when the column is touched.
   */

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrect: string;

  /**
   * Event handler triggered when a specific match condition is met within the container.
   */
  @Prop() onInCorrect: string;

  /**
   * Event handler triggered when the container is entered, useful for triggering animations or logic.
   */
  @Prop() onEntry: string;

  /**
   * Boolean that controls the playability of the game.
   */
  @Prop() canplay: boolean = true;

  @Prop() showCheck: string;
  @Prop() isContinueOnCorrect: string;

  /**
   * Reference to the HTML element that represents this container component.
   */
  @Element() el: HTMLElement;

  /**
   * Scales the container based on the window or screen size, maintaining the aspect ratio.
   * The container scales according to the minimum dimension of the screen.
   *
   * @param container The container element to be scaled.
   */
  scaleContainer(container: HTMLElement) {
    const widths = [window.innerWidth];
    const heights = [window.innerHeight];

    if (window.screen?.width) {
      widths.push(window.screen.width);
      heights.push(window.screen.height);
    }

    const width = Math.min(...widths);
    const height = document.documentElement.clientHeight;

    const scaleX = width / 1600; // Scale based on a reference width of 1600px
    const scaleY = height / 900; // Scale based on a reference height of 900px
    const scale = Math.min(scaleX, scaleY);

    // Center the container and apply scaling
    container.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  /**
   * Lifecycle hook that runs after the component is loaded.
   * - It scales the container.
   * - It sets the background color of the body.
   * - Adds event listeners for `resize` and `load` to rescale the container on window size changes.
   */
  componentDidLoad() {
    this.scaleContainer(this.el);
    document.body.style.backgroundColor = this.bgColor;

    // Re-scale the container on window resize or load events
    window.addEventListener('resize', () => this.scaleContainer(this.el));
    window.addEventListener('load', () => this.scaleContainer(this.el));
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Define the styles for the container element
    const style = {
      backgroundColor: this.bgColor,
      width: '1600px', // Fixed width of the container
      height: '900px', // Fixed height of the container
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Centering the container
    };
    console.log('🚀 ~ AppContainer ~ canplay:', this.canplay);

    return (
      <Host
        id="container"
        tabindex={0}
        class="container"
        objective={this.objective}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        onTouch={this.onTouch}
        onInCorrect={this.onInCorrect}
        onCorrect={this.onCorrect}
        onEntry={this.onEntry}
        showCheck={this.showCheck}
        isContinueOnCorrect={this.isContinueOnCorrect}
      >
        <slot />
      </Host>
    );
  }
}
