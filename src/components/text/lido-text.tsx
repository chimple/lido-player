import { Component, Prop, h, Element, Host, State } from '@stencil/core';
import { initEventsForElement, convertUrlToRelative, parseProp } from '../../utils/utils';

/**
 * @component LidoText
 *
 * The `LidoText` component is used to display text with customizable styling.
 * It allows you to set the font, size, color, and background color, along with
 * positioning and visibility control. The component supports custom events like touch, match, and entry.
 */
@Component({
  tag: 'lido-text',
  styleUrl: 'lido-text.css',
  shadow: false,
})
export class LidoText {
  /**
   * Unique identifier for the text element.
   */
  @Prop() id: string = '';

  /**
   * Value associated with the text element, typically used for internal logic or tracking.
   */
  @Prop() value: string = '';

  /**
   * The string of text to be displayed in the component.
   */
  @Prop() string: string = '';

  /**
   * Font family for the text (CSS value, e.g., 'Arial', 'Times New Roman').
   */
  @Prop() fontFamily: string = '';

  /**
   * Font size for the text (CSS value, e.g., '16px', '1.5em').
   */
  @Prop() fontSize: string = '20px';

  /**
   * Font color for the text (CSS color value, e.g., '#000000', 'red').
   */
  @Prop() fontColor: string = '';

  /**
   * When set to `true`, the text will highlight while being spoken, typically used for accessibility.
   */
  @Prop() highlightWhileSpeaking: boolean = false;

  /**
   * Height of the text component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string = 'auto';

  /**
   * Width of the text component (CSS value, e.g., '100px', '50%').
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
   * X-axis (horizontal) position of the text component (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string = '0px';

  /**
   * Y-axis (vertical) position of the text component (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string = '0px';

  /**
   * Z-index for stacking order of the text component relative to other elements.
   */
  @Prop() z: string = '0';

  /**
   * Background color of the text component (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string = '';

  /**
   * The border image of the column (CSS border-image value, e.g., 'url(border.png)', 'linear-gradient(red, blue)').
   */
  @Prop() borderImage?: string = '';

  /**
   * Defines the type of the component, which can be used for conditional logic or specific styling.
   */
  @Prop() type: string = '';

  /**
   * Tab index for keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * Controls the visibility of the text component. If `true`, the text is visible; otherwise, it is hidden.
   */
  @Prop() visible: boolean | string = false;

  /**
   * URL or identifier for an audio file associated with the text component.
   */
  @Prop() audio: string = '';

  /**
   * Event handler triggered when the text component is touched or clicked.
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
   * The minimum number of drag elements that must be dropped inside the Drop element.
   */
  @Prop() minDrops: number = 1;

  /**
   * The Maximum number of drag elements that can be dropped inside the Drop element.
   */
  @Prop() maxDrops: number = 1;

  /**
   * Event handler triggered when the text component is entered (useful for animations or logic on entry).
   */
  @Prop() onEntry: string = '';

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

  /**
   * CSS filter to apply border radius to the image.
   * Example: '10px' for  images.
   */
  @Prop() borderRadius: string = '0px';

  /**
   * Indicates whether to wrap each letter or each word of the text in a span element.
   * This can be useful for animations or styling individual letters.
   */
  @Prop() spanType: 'letters' | 'words' | '' = '';

  /**
   * Reference to the HTML element representing this `lido-text` component.
   */
  @Element() el: HTMLElement;

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string } = {};

  /**
   * Lifecycle hook that runs after the component is rendered in the DOM.
   * It initializes custom events based on the `type` of the text component.
   */
  componentDidLoad() {
    initEventsForElement(this.el, this.type);
    // only create span element if requested
    if(this.spanType === 'words' || this.spanType === 'letters') {
      this.addSpanToText();   
    }
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

  updateStyles() {
    const borderImg = this.borderImage ? convertUrlToRelative(this.borderImage) : '';
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      backgroundColor: parseProp(this.bgColor, orientation),
      top: parseProp(this.y, orientation),
      left: parseProp(this.x, orientation),
      zIndex: this.z,
      fontSize: parseProp(this.fontSize, orientation),
      fontFamily: this.fontFamily,
      color: parseProp(this.fontColor, orientation),
      display: parseProp(`${this.visible}`, orientation) ? 'flex' : 'none', // Toggle visibility
      borderImage: `url(${borderImg})`,
      borderImageSlice: borderImg ? '0 fill' : '',
      margin: parseProp(this.margin, orientation),
      borderRadius: parseProp(this.borderRadius, orientation),
    };
  }

  private async addSpanToText() {
    const content = this.el.querySelector('.lido-text-content');
    if (!content) return;

    const text = content.textContent || '';
    content.innerHTML = '';

    // Wrap each letters in a span inside .lido-text-content
    if(this.spanType === 'letters') {
      text.split('').forEach((letter, idx) => {
          // Skip spaces
          if (letter.trim() === '') return;
          // Create a span for each letter
          const letterSpan = document.createElement('span');
          letterSpan.textContent = letter;
          letterSpan.className = 'text-letters';
          content.appendChild(letterSpan);
        }); 
    }   

    // Wrap each words in a span inside .lido-text-content
    if(this.spanType === 'words') {
      text.split(' ').forEach((word, idx) => {
          const wordSpan = document.createElement('span');
          wordSpan.textContent = word;
          wordSpan.className = 'text-words';
          content.appendChild(wordSpan);
      });
    }
  }

  render() {
    return (
      <Host
        class="lido-text"
        value={this.value}
        type={this.type}
        tab-index={this.tabIndex}
        audio={this.audio}
        onTouch={this.onTouch}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
        minDrops={this.minDrops}
        maxDrops={this.maxDrops}
        id={this.id}
        style={this.style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        span-type={this.spanType}
      >
        {
          (this.spanType !== '') ? (
            <div class="lido-text-content">{this.string}</div>
          ) : (
            this.string
          )
        }
      </Host>
    );
  }
}
