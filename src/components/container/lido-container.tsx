import { Component, Host, Prop, h, Element } from '@stencil/core';
import { convertUrlToRelative, initEventsForElement } from '../../utils/utils';
import { string } from 'mathjs';

/**
 * @component LidoContainer
 *
 * The `LidoContainer` component acts as a container for other elements. It scales responsively
 * based on the window size, adjusts background color, and provides various configurable properties
 * such as dimensions, positioning, visibility, and custom event handlers.
 */
@Component({
  tag: 'lido-container',
  styleUrl: 'lido-container.css',
  shadow: false,
})
export class LidoContainer {
  /**
   * Enables appending the dragged element to the drop target after all correct drops are completed.
   */
  @Prop() appendToDropOnCompletion: boolean = false;

  /**
   * Unique identifier for the container.
   */
  @Prop() id: string = '';

  /**
   * Objective or purpose of the container. Can be used for internal logic or tracking.
   */
  @Prop() objective: string = '';

  /**
   * Custom CSS styles to be applied to the container.
   * Allows for dynamic styling through inline styles or class names.
   */
  @Prop() customStyle: string = '';

  /**
   * Value assigned to the container. This can be used for logic related to this component.
   */
  @Prop() value: string = '';

  /**
   * The height of the container (CSS value).
   */
  @Prop() height: string = 'auto';

  /**
   * The width of the container (CSS value).
   */
  @Prop() width: string = 'auto';

  /**
   * The ARIA label of the container. Used for accessibility to indicate the purpose of the element.
   */
  @Prop() ariaLabel: string = 'auto';

  /**
   * The ARIA hidden attribute of the container. Used for accessibility to hide the element.
   */
  @Prop() ariaHidden: string = '';

  /**
   * X-axis (horizontal) position of the container.
   */
  @Prop() x: string = '0px';

  /**
   * Y-axis (vertical) position of the container.
   */
  @Prop() y: string = '0px';

  /**
   * Z-index to control the stacking order of the container.
   */
  @Prop() z: string = '0';

  /**
   * Background color of the container (CSS color value).
   */
  @Prop() bgColor: string = '';

  /**
   * The background image URL to be applied to the entire body.
   */
  @Prop() bgImage: string = '';

  /**
   * Type of the container, which can be used for conditional logic or styling purposes.
   */
  @Prop() type: string = '';

  /**
   * TabIndex for keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * Visibility flag for the container. If `true`, the container is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean = false;

  /**
   * URL or identifier of an audio file associated with the container.
   */
  @Prop() audio: string = '';

  /**
   * Event handler triggered when the container is touched or clicked.
   */
  @Prop() onTouch: string = '';

  /**
   * Event handler for an Incorrect matching action, which can be used to trigger custom logic when the action is incorrect.
   */
  @Prop() onInCorrect: string = '';

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrect: string = '';

  /**
   * Event handler triggered when the container is entered, useful for triggering animations or logic.
   */
  @Prop() onEntry: string = '';

  /**
   * Boolean that controls the playability of the game.
   */
  @Prop() canplay: boolean = true;

  /**
   * Indicates whether the "Check" button should be visible or not. Expected values: "true" or "false".
   */
  @Prop() showCheck: boolean = false;

  /**
   * Specifies whether the activity should continue automatically upon a correct response. Expected values: "true" or "false".
   */
  @Prop() isContinueOnCorrect: boolean = false;

  /**
   * Determines if the activity should proceed automatically only after a correct response.
   * Acceptable values: "true" or "false". Defaults to "false".
   */
  @Prop() isAllowOnlyCorrect: boolean = false;

  /**
   * Base URL for the container.
   */
  @Prop() baseUrl: string = '';

  @Prop() margin: string = '';
  /**
   * Reference to the HTML element that represents this container component.
   */
  @Element() el: HTMLElement;

  /**
   * Indicates whether the previous button should be displayed. Expected values: "true" or "false".
   */
  @Prop() showPrevButton: boolean = false;
  /**
   * Indicates whether the next button should be displayed. Expected values: "true" or "false".
   */
  @Prop() showNextButton: boolean = false;


  convertToPixels(height: string, parentElement = document.body) {
    if (!height) return 0; // Handle empty or invalid input

    // Directly return numbers if already in pixels
    if (height.endsWith('px')) {
      return parseFloat(height);
    }

    // Convert relative units
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.visibility = 'hidden';
    tempElement.style.height = height;
    parentElement.appendChild(tempElement);

    const computedHeight = tempElement.offsetHeight;
    parentElement.removeChild(tempElement);

    return computedHeight;
  }

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
    const height = Math.min(...heights); // Get the smallest height

    const isPortrait = height > width; // Check if the device is in portrait mode

    let scaleX: number;
    let scaleY: number;

    if (isPortrait) {
      // Portrait Mode: Scale based on portrait reference size (e.g., 900x1600)
      scaleX = width / 900;
      scaleY = height / 1600;
    } else {
      // Landscape Mode: Scale based on landscape reference size (e.g., 1600x900)
      scaleX = width / 1600;
      scaleY = height / 900;
    }
    const scale = Math.min(scaleX, scaleY); // Ensure uniform scaling    
  
    setTimeout(() => {
      const navBar = document.querySelector('.navbar') as HTMLElement;  
      console.log('navBar', navBar);

      if (navBar) {
        navBar.style.transform = `translate(-50%, -50%) scale(${scale})`;
        navBar.style.visibility = 'visible';
      }
    }, 100);

    // Center the container and apply scaling
    container.style.transform = `translate(-50%, -50%) scale(${scale})`;
    container.style.left = '50%';
    container.style.top = '50%';
    container.style.position = 'absolute'; // Ensure proper positioning
    this.screenOrientation();
  }

  screenOrientation() {
    if (window.innerHeight > window.innerWidth) {
      this.el.style.height = '1600px';
      this.el.style.width = '900px';
    } else {
      this.el.style.height = '900px';
      this.el.style.width = '1600px';
    }
  }

  /**
   * Lifecycle hook that runs after the component is loaded.
   * - It scales the container.
   * - It sets the background color of the body.
   * - Adds event listeners for `resize` and `load` to rescale the container on window size changes.
   */
  componentDidLoad() {
    this.scaleContainer(this.el);
    const backGroundImage = this.bgImage ? convertUrlToRelative(this.bgImage) : '';
    document.body.style.backgroundColor = this.bgColor;
    document.body.style.backgroundImage = backGroundImage ? `url(${backGroundImage})` : 'none';
    document.body.style.backgroundPosition = backGroundImage ? `bottom` : 'none';

    // Re-scale the container on window resize or load events
    window.addEventListener('resize', () => this.scaleContainer(this.el));
    window.addEventListener('load', () => this.scaleContainer(this.el));
    initEventsForElement(this.el, this.type);

    if (this.customStyle) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = this.customStyle;
      document.head.appendChild(styleElement);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', () => this.scaleContainer(this.el));
    window.removeEventListener('load', () => this.scaleContainer(this.el));
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = '';
  }

  render() {
    // Define the styles for the container element
    const style = {
      backgroundColor: this.bgColor,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Centering the container
      margin: this.margin,
    };
    console.log('🚀 ~ LidoContainer ~ canplay:', this.canplay);

    return (
      <Host
        id="lido-container"
        tabindex={0}
        class="lido-container"
        objective={this.objective}
        baseUrl={this.baseUrl}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        onTouch={this.onTouch}
        onInCorrect={this.onInCorrect}
        onCorrect={this.onCorrect}
        onEntry={this.onEntry}
        showCheck={`${this.showCheck}`}
        isContinueOnCorrect={`${this.isContinueOnCorrect}`}
        isAllowOnlyCorrect={`${this.isAllowOnlyCorrect}`}
        canplay={`${this.canplay}`}
        appendToDropOnCompletion={`${this.appendToDropOnCompletion}`}
        showPrevButton={`${this.showPrevButton}`}
        showNextButton={`${this.showNextButton}`}
      >
        <slot />
      </Host>
    );
  }
}
