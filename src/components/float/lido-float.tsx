//lifo-float component
import { Component, Prop, h, Host, Element, Method, State } from '@stencil/core';
import { handleElementClick, handleFloatElementPosition } from '../../utils/utilsHandlers/floatHandler';
import { initEventsForElement, parseProp, setVisibilityWithDelay } from '../../utils/utils';

@Component({
  tag: 'lido-float',
  styleUrl: 'lido-float.css',
  shadow: false,
})
export class LidoFloat {
  /**
   * Unique identifier for the text element.
   */
  @Prop() id: string = '';

  /**
   * Value associated with the text element, typically used for internal logic or tracking.
   */
  @Prop() value: string = '';

  /**
   * Z-index for stacking order of the text component relative to other elements.
   */
  @Prop() z: string = '0';

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * Controls the visibility of the text component. If `true`, the text is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean = false;

  /**
   * Event handler triggered when the text component is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string = '';

  /**
   * The width of the float element (CSS value, e.g., '100px', '50%').
   */
  @Prop() width: string;

  /**
   * The height of the float element (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The background color of the float element (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the component, which can be used for conditional logic or styling purposes.
   */
  @Prop() type: string;

  /**
   * Delay in milliseconds to make the cell visible after mount.
   */
  @Prop() delayVisible: string = '';

  /**
   * Direction of the float element's movement (e.g., 'leftToRight', 'bottomToTop').
   * This can be used to control the animation or positioning of the float elements.
   */
  @Prop() floatDirection: string = 'bottomToTop';

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string };

  @Element() el: HTMLElement;

  componentDidLoad() {
    setVisibilityWithDelay(this.el, this.delayVisible);
    initEventsForElement(this.el, this.type);
    this.initializeFloatElement();
  }

  /**
   * Lifecycle method that runs before the component is rendered.
   * Initializes styles and sets up event listeners for resize and load events.
   */
  componentWillLoad() {
    this.updateStyles();
    window.addEventListener('resize', this.updateStyles.bind(this));
    window.addEventListener('load', this.updateStyles.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles.bind(this));
    window.removeEventListener('load', this.updateStyles.bind(this));
  }

  initializeFloatElement() {
    const floatElements = this.el.children as HTMLCollection;

    Array.from(floatElements).forEach((el: Element) => {
      const element = el as HTMLElement;
      handleFloatElementPosition(element);
      el.addEventListener('click', () => {
        handleElementClick(element);
      });
    });
  }

  updateStyles() {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: this.floatDirection !== 'leftToRight' ? "100%" : parseProp(this.height, orientation),
      width: this.floatDirection === 'leftToRight' ? "100%" : parseProp(this.width, orientation),
      backgroundColor: parseProp(this.bgColor, orientation),
      zIndex: this.z,
      display: this.visible ? 'flex' : 'none',
    };
  }

  render() {
    return (
      <Host class="lido-float" float-direction={this.floatDirection} id={this.id} tab-index={this.tabIndex} style={this.style} onEntry={this.onEntry}>
        <slot></slot>
      </Host>
    );
  }
}
