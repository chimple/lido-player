import { Component, Host, Prop, h, Element } from '@stencil/core';

/**
 * @component LidoRandom
 *
 * The `LidoRandom` component randomly positions its child elements within its container.
 * This component can be used when a random layout of elements is required. It allows
 * full customization via props such as dimensions, positioning, visibility, and event handling.
 */
@Component({
  tag: 'lido-random',
  styleUrl: 'lido-random.css',
  shadow: false,
})
export class LidoRandom {
  /**
   * Unique identifier for the random container.
   */
  @Prop() id: string = '';

  /**
   * Value associated with the component, often used for internal logic.
   */
  @Prop() value: string = '';

  /**
   * The height of the container (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string = 'auto';

  /**
   * The width of the container (CSS value, e.g., '100px', '50%').
   */
  @Prop() width: string = 'auto';

  /**
   * The ARIA label of the container. Used for accessibility to indicate the purpose of the element.
   */
  @Prop() ariaLabel: string = '';

  /**
   * The ARIA hidden attribute of the container. Used for accessibility to hide the element.
   */
  @Prop() ariaHidden: string = '';

  /**
   * X-axis (horizontal) position of the container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string = '0px';

  /**
   * Y-axis (vertical) position of the container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string = '0px';

  /**
   * Z-index for stacking order of the container relative to other elements.
   */
  @Prop() z: string = '0';

  /**
   * Background color of the container (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string = '';

  /**
   * The type of the component, used for conditional logic or specific styling.
   */
  @Prop() type: string = '';

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * Controls the visibility of the container. If `true`, the container is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean = false;

  /**
   * URL or identifier for an audio file associated with the component.
   */
  @Prop() audio: string = '';

  /**
   * Event handler triggered when the component is touched or clicked.
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
   * Event handler triggered when the component is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string = '';

  /**
   * The minimum number of drag elements that must be dropped inside the Drop element.
   */
  @Prop() minDrops: number = 1;

  /**
   * The Maximum number of drag elements that can be dropped inside the Drop element.
   */
  @Prop() maxDrops: number = 1;

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

  /**
   * Reference to the HTML element representing this component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that runs after the component is rendered in the DOM.
   * It randomly positions all child elements within the container using CSS `top` and `left` percentages.
   */
  componentDidLoad() {
    setTimeout(() => {
      // Select all direct child elements of the component
      const parentcontainer = this.el.parentElement;
      if (!parentcontainer) return;
      console.log('parent elementttt', parentcontainer);

      // Get parent size
      const rect = parentcontainer.getBoundingClientRect();
      const parentWidth = rect.width;
      const parentHeight = rect.height;
      console.log('parenet width', parentWidth);
      console.log('parenet highth', parentHeight);

      // Apply own dimensions if provided
      // if (this.width) this.el.style.width = this.width;
      // if (this.height) this.el.style.height = this.height;
      // if (this.x) this.el.style.left = this.x;
      // if (this.y) this.el.style.top = this.y;

      // Ensure parent has relative positioning
      if (getComputedStyle(parentcontainer).position === 'static') {
        parentcontainer.style.position = 'relative';
      }

      // Place child elements randomly inside parent
      const children = Array.from(this.el.children) as HTMLElement[];

      children.forEach(child => {
        const childRect = child.getBoundingClientRect();
        const childWidth = childRect.width;
        const childHeight = childRect.height;

        console.log('child width', childWidth);
        const maxLeft = Math.max(parentWidth - childWidth, 0);
        const maxTop = Math.max(parentHeight - childHeight, 0);

        const randLeft = Math.floor(Math.random() * maxLeft);
        const randTop = Math.floor(Math.random() * maxTop);

        console.log('randomleft', randLeft);
        console.log('randomtop', randTop);

        child.style.position = 'absolute';
        child.style.left = `${randLeft}px`;
        child.style.top = `${randTop}px`;
      });
    }, 50);
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
      margin: this.margin,
    };

    return (
      <Host
        class="lido-random"
        type={this.type}
        tab-index={this.tabIndex}
        value={this.value}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onCorrect={this.onCorrect}
        minDrops={this.minDrops}
        maxDrops={this.maxDrops}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
      >
        {/* Slot to render child elements that will be randomly positioned */}
        <slot />
      </Host>
    );
  }
}
