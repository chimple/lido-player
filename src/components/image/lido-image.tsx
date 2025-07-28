import { Component, Prop, h, Element, Host, getAssetPath, State } from '@stencil/core';
import { convertUrlToRelative, initEventsForElement, parseProp, speakIcon } from '../../utils/utils';
import CssFilter from 'css-filter-converter';
import tinyColor from 'tinycolor2';
/**
 * @component LidoImage
 *
 * The `LidoImage` component displays an image element within a container. It is a versatile
 * component that allows dynamic sizing, positioning, visibility control, and event handling.
 * The component is designed to work in different types of environments, supporting custom
 * events such as touch, match, and entry events.
 */
@Component({
  tag: 'lido-image',
  styleUrl: 'lido-image.css',
  shadow: false,
})
export class LidoImage {
  /**
   * Controls whether the speak icon should appear directly on the top right corner of targeted element if it is true.
   */
  @Prop() showSpeakIcon: boolean = false;
  /**
   * Unique identifier for the text element.
   */
  @Prop() id: string;

  /**
   * The value associated with the image. Typically used for internal logic or identification.
   */
  @Prop() value: string;

  /**
   * The height of the image component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string;

  /**
   * The width of the image component (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the image within its container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string;

  /**
   * Y-axis (vertical) position of the image within its container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string;

  /**
   * Z-index for stacking order of the image relative to other elements.
   */
  @Prop() z: string;

  /**
   * Background color for the container of the image (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string;

  /**
   * Defines the type of the image component, which can be used for conditional logic or styling purposes.
   */
  @Prop() type: string;

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Controls the visibility of the image component. If `true`, the image is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean | string;

  /**
   * URL or identifier of an audio file associated with the image.
   */
  @Prop() audio: string;

  /**
   * Event handler triggered when the image is touched or clicked.
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
   * Event handler triggered when the image is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string;

  /**
   * The source URL of the image to be displayed.
   */
  @Prop() src: string;

  /**
   * Enables border-image slice support when true; otherwise, behaves as a regular image component
   */
  @Prop() isSlice: string;

  /**
   * Specifies the width for border-image slice (e.g., "30px", "2em").
   * Only used when `isSlice` is enabled.
   */
  @Prop() sliceWidth: string = '30px';

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
   * CSS padding value applied to each child element inside the container.
   * Accepts standard CSS padding formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() padding: string = '';

  /**
   * CSS filter to apply visual effects (e.g., blur, brightness) to the image.
   * Example: 'blur(5px)', 'brightness(0.8)', 'grayscale(100%)'
   */
  @Prop() filter: string = '';

  /**
   * CSS filter to apply border radius to the image.
   * Example: '10px' for  images.
   */
  @Prop() borderRadius: string = '0px';

  /**
   * CSS transform property to apply transformations like rotate, scale, translate, etc.
   * Example: 'rotate(45deg)' or 'scale(1.2)'.
   */
  @Prop() transform: string = '';

  /**
   * Reference to the HTML element that represents this image component.
   */
  @Element() el: HTMLElement;

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string };

  /**
   * Lifecycle method that runs after the component has been loaded into the DOM.
   * It initializes custom events based on the `type` of the image component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);

    if (this.filter !== '') {
      const img = this.el.getElementsByTagName('img')[0] as HTMLImageElement;
      if (img) {
        img.style.filter = `${CssFilter.hexToFilter(tinyColor(this.filter).toHexString()).color}`;
      }
    }
    if (this.showSpeakIcon) {
      const speakIconElement = speakIcon(this.el);
      if (this.type === 'option') {
        const icon = speakIconElement.firstChild as HTMLElement;
        icon.style.marginLeft = this.x;
        icon.style.marginTop = this.y;
      }
      this.el.prepend(speakIconElement);
    }
  }

  /**
   * Lifecycle method that runs before the component is rendered.
   * Initializes styles and sets up event listeners for resize and load events.
   */
  componentWillLoad() {
    this.updateStyles();

    window.addEventListener('resize', this.updateStyles.bind(this)); // Update on screen rotation
    window.addEventListener('load', this.updateStyles.bind(this)); // Update on screen rotation
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles.bind(this));
    window.removeEventListener('load', this.updateStyles.bind(this));
  }

  updateStyles() {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      backgroundColor: parseProp(this.bgColor, orientation),
      top: parseProp(this.y, orientation),
      left: parseProp(this.x, orientation),
      zIndex: this.z,
      display: parseProp(`${this.visible}`, orientation) ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      margin: parseProp(this.margin, orientation),
      padding: parseProp(this.padding, orientation),
      transform: parseProp(this.transform, orientation),
      borderRadius: this.borderRadius,

      // Slice Style
      borderImageSource: this.isSlice === 'true' ? `url(${convertUrlToRelative(this.src)})` : 'none',
      borderImageSlice: this.isSlice === 'true' ? `${parseInt(this.sliceWidth)} fill` : 'unset',
      borderImageRepeat: this.isSlice === 'true' ? 'round' : 'unset',
      borderImageWidth: this.isSlice === 'true' ? `${this.sliceWidth}` : 'unset',
      backgroundImage: this.isSlice === 'true' ? `url(${convertUrlToRelative(this.src)})` : 'none',
    };
  }

  render() {
    if (this.isSlice === 'true') {
      return (
        <Host
          class="slice"
          id={this.id}
          type={this.type}
          tab-index={this.tabIndex}
          style={this.style}
          aria-label={this.ariaLabel}
          aria-hidden={this.ariaHidden}
          value={this.value}
          minDrops={this.minDrops}
          maxDrops={this.maxDrops}
          audio={this.audio}
          onTouch={this.onTouch}
          onCorrect={this.onCorrect}
          onInCorrect={this.onInCorrect}
          onEntry={this.onEntry}
        ></Host>
      );
    } else {
      return (
        <Host
          id={this.id}
          type={this.type}
          tab-index={this.tabIndex}
          style={this.style}
          aria-label={this.ariaLabel}
          aria-hidden={this.ariaHidden}
          value={this.value}
          minDrops={this.minDrops}
          maxDrops={this.maxDrops}
          audio={this.audio}
          onTouch={this.onTouch}
          onCorrect={this.onCorrect}
          onInCorrect={this.onInCorrect}
          onEntry={this.onEntry}
        >
          <img class="lido-image" src={convertUrlToRelative(this.src)} alt="" style={this.style} />
        </Host>
      );
    }
  }
}
