import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

/**
 * @component AppShape
 *
 * The `AppShape` component is used to display various types of shapes like rectangles, circles, or polygons.
 * The shape's appearance is dynamically controlled by props such as dimensions, position, visibility, and the type of shape.
 * Additionally, it supports custom events for interaction like touch, match, and entry.
 */
@Component({
  tag: 'app-shape',
  styleUrl: 'app-shape.css',
  shadow: false,
})
export class AppShape {
  /**
   * Unique identifier for the shape element.
   */
  @Prop() id: string;

  /**
   * Value associated with the shape, typically used for internal logic or tracking.
   */
  @Prop() value: string;

  /**
   * The height of the shape (CSS value, e.g., '100px', '50%').
   * This is ignored for polygons.
   */
  @Prop() height: string;

  /**
   * The width of the shape (CSS value, e.g., '100px', '50%').
   * This is ignored for polygons.
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
   * X-axis (horizontal) position of the shape (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the shape (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the shape relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color of the shape (CSS color value, e.g., '#FFFFFF', 'blue').
   * This is ignored for polygons.
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the shape, which can be used for conditional logic or specific styling.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Type of shape to render (e.g., 'circle', 'rectangle', 'polygon').
   */
  @Prop() shapeType: string;

  /**
   * Controls the visibility of the shape. If `true`, the shape is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean;

  /**
   * URL or identifier for an audio file associated with the shape.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the shape is touched or clicked.
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
   * Event handler triggered when a matching action occurs with the shape.
   */
  @Prop() onMatch: string;

  /**
   * Event handler triggered when the shape is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * Reference to the HTML element representing this `app-shape` component.
   */
  @Element() el: HTMLElement;

  /**
   * Lifecycle hook that runs after the component is loaded into the DOM.
   * It initializes custom events based on the `type` of the shape component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
  }

  render() {
    // Inline styles to position and size the shape component
    const style = {
      height: this.shapeType !== 'polygon' ? this.height : undefined, // Set height unless it's a polygon
      width: this.shapeType !== 'polygon' ? this.width : undefined, // Set width unless it's a polygon
      top: this.y,
      left: this.x,
      display: this.visible ? 'block' : 'none', // Toggle visibility
      zIndex: this.z,
      backgroundColor: this.shapeType !== 'polygon' ? this.bgColor : 'transparent', // Apply background only if not a polygon
    };

    return (
      <Host
        class={`shape ${this.shapeType}`} // Apply shape-specific class
        value={this.value}
        type={this.type}
        tabindex={this.tabIndex}
        style={style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onMatch={this.onMatch}
        onCorrectMatch={this.onCorrectMatch}
        onCorrectTouch={this.onCorrectTouch}
        onEntry={this.onEntry}
      >
        {/* Slot for any child elements */}
      </Host>
    );
  }
}