import { Component, Host, Prop, h, Element, Watch, State } from '@stencil/core';
import { convertUrlToRelative, initEventsForElement, calculateScale } from '../../utils/utils';
import { string } from 'mathjs';
import i18next from '../../utils/i18n';
import { highlightElement } from '../../utils/utilsHandlers/highlightHandler';
import { templateAudio, TemplateID } from '../../utils/constants';
import { Timer } from '../../utils/utilsHandlers/timer';
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
  /** Language to apply to all texts */
  @Prop() Lang: string = '';
  /**
   * Controls whether the drop zone displays a border; true shows the border, false hides it.
   */
  @Prop() showDropBorder: boolean = true;
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

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

  /**
   * Custom URL for the Exit button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() exitButtonUrl: string;

  /**
   * Custom URL for the Previous button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() prevButtonUrl: string;

  /**
   * Custom URL for the Next button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() nextButtonUrl: string;

  /**
   * Custom URL for the Speaker button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() speakerButtonUrl: string;

  /**
   * Reference to the HTML element that represents this container component.
   */
  @Element() el: HTMLElement;

  /**
   * Indicates whether the previous button should be displayed. Expected values: "true" or "false".
   */
  @Prop() showPrevButton: string = 'false';

  /**
   * Indicates whether the next button should be displayed. Expected values: "true" or "false".
   */
  @Prop() showNextButton: string = 'false';

  /**
   * Delay in milliseconds to make the cell visible after mount.
   */
  @Prop() delayVisible: string = '';

  /**
   * When set to true, disables the speak functionality of long press for this component and all its child components.
   */
  @Prop() disableSpeak: boolean = false;

  /**
   * Identifies the template type used by this component (e.g., mcq, flashcard, tracing, dragAndDrop).
   */
  @Prop() templateId = '';

  /**
   * Stores the instruction audio/text key based on the current template.
   */
  @State() instructName: string = '';

  /**
   * Indicates whether the speak action is currently active or in progress.
   */
  @State() speakFlag: boolean = false;


  @Watch('Lang')
  languageChanged(newLang: string) {
    const langToApply = newLang || this.resolveLanguage();
    this.updateChildTextLanguage(langToApply);
  }

  componentWillLoad() {
    const langToApply = this.resolveLanguage();
    this.updateChildTextLanguage(langToApply);
    this.resolveInstructionAudio();
  }

 private resolveInstructionAudio() {
  this.instructName =
    (
      {
          flashcard: templateAudio.flashcards,
          mcq: templateAudio.mcq,
          tracing: templateAudio.tracing,
          dragAndDrop: templateAudio.dragAndDrop,
          substractionWithImage: templateAudio.substractionWithImage,
          "substractionWithoutImage": templateAudio.substractionWithoutImage,
          "numberIdentificationWithImage": templateAudio.numberIdentificationWithImage,
          "numberIdentificationWithoutImage": templateAudio.numberIdentificationWithoutImage,
          "wordBuildingWithImage": templateAudio.wordBuildingWithImage,
          "wordBuildingWithoutImage": templateAudio.wordBuildingWithoutImage,
          "pictureClues": templateAudio.pictureClues,
          "pictureWordMatchMultipleImages": templateAudio.pictureWordMatchMultipleImages,
          "pictureWordMatchSingleImage": templateAudio.pictureWordMatchSingleImage,
          "sentenceMatch": templateAudio.sentenceMatch,
          "imageMatch": templateAudio.imageMatch,
          "palStoryTale": templateAudio.palStoryTale,
          "palEgmaPatternMatching": templateAudio.palEgmaPatternMatching,
          "palEgmaWordProblemDragnDrop": templateAudio.palEgmaWordProblemDragnDrop,
          "palEgmaWordProblemClick": templateAudio.palEgmaWordProblemClick,
          "palEgraOddOneOut": templateAudio.palEgraOddOneOut,
          "palEgraArrangePictures": templateAudio.palEgraArrangePictures,
          "palEgraBuildWord": templateAudio.palEgraBuildWord,
          "palEgraWordFormation": templateAudio.palEgraWordFormation,
          "palInventedSpelling": templateAudio.palInventedSpelling,
          "palLetterIdentification": templateAudio.palLetterIdentification,
          "palStoryMaking": templateAudio.palStoryMaking,
          "palegmasumtogether": templateAudio.palegmasumtogether,
          "palegmamultioption": templateAudio.palegmamultioption,
          "palegraoptionaudio": templateAudio.palegraoptionaudio,
          "palegrawordmatch": templateAudio.palegrawordmatch,
          "palegramcqimages": templateAudio.palegramcqimages,

       } as any
    )[this.templateId!] ?? '';

    const home = document.querySelector('lido-home') as HTMLElement;
    if (!home) return;

    const existing = home.getAttribute(TemplateID) || '';

    this.speakFlag = existing.includes(this.templateId);

    if (!this.speakFlag) {
      home.setAttribute(TemplateID, [existing, this.templateId].filter(Boolean).join(','));
    }
  }

  private resolveLanguage(): string {
    const rootEl = this.el.closest('lido-root') as any;
    const rootLang = rootEl?.Lang || '';
    if (rootLang?.trim()) return rootLang;
    const homeEl = this.el.closest('lido-home') as any;
    const homeLang = homeEl?.Lang || '';
    if (homeLang?.trim()) return homeLang;
    if (this.Lang?.trim()) return this.Lang;
    const xmlLang = this.el.getAttribute('Lang');
    if (xmlLang?.trim()) return xmlLang;
    return this.el.textContent?.trim();
  }

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
    // Calculate the scale factor based on the closest parent element's width and height (1600x900 reference)
    const parentElement = this.getClosestParentWithWidth();
    let scaleFactor = 0;
    if (parentElement) {
      const parentWidth = parentElement.clientWidth;
      const parentHeight = parentElement.clientHeight;
      const scaleX = parentWidth / 1600;
      const scaleY = parentHeight / 900;
      scaleFactor = Math.min(scaleX, scaleY);
    }

    // Center the container and apply scaling
    container.style.transform = `translate(-50%, -50%) scale(${scaleFactor != 0 ? scaleFactor : calculateScale()})`;
    container.style.left = '50%';
    container.style.top = '50%';
    container.style.position = 'absolute'; // Ensure proper positioning
    this.screenOrientation();
  }

  // Find and return the nearest parent element that has a measurable (non-zero) width
  getClosestParentWithWidth() {
    let parent = this.el.parentElement;

    while (parent) {
      if (parent.offsetWidth > 0) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
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

  private updateChildTextLanguage(lang?: string) {
    const appliedLang = lang || i18next.language || 'en';
    i18next.changeLanguage(appliedLang);

    const texts = this.el.querySelectorAll('lido-text');
    texts.forEach((textEl: any) => {
      textEl.Lang = appliedLang;
      textEl.dispatchEvent(new CustomEvent('languageChanged', { bubbles: true }));
    });
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
    document.body.style.pointerEvents = 'auto';
    document.body.style.backgroundColor = this.bgColor;
    document.body.style.backgroundImage = backGroundImage ? `url(${backGroundImage})` : 'none';
    document.body.style.backgroundPosition = backGroundImage ? `bottom` : 'none';

    // Re-scale the container on window resize or load events
    window.addEventListener('resize', () => this.scaleContainer(this.el));
    window.addEventListener('load', () => this.scaleContainer(this.el));

    if(this.templateId){
      setTimeout(() => {
        this.el.setAttribute("onEntry",`${this.templateId}.speak='${!this.speakFlag}'; `+this.el.getAttribute("onEntry"))
        initEventsForElement(this.el, this.type);
      },100)
    } else {
      initEventsForElement(this.el, this.type)
    }
    if (this.customStyle) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = this.customStyle;
      document.head.appendChild(styleElement);
    }
    const langToApply = this.resolveLanguage();
    this.updateChildTextLanguage(langToApply);
    setTimeout(() => {
      highlightElement();
    },100)

    Timer.getI().start();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', () => this.scaleContainer(this.el));
    window.removeEventListener('load', () => this.scaleContainer(this.el));
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = '';
    Timer.getI().stop();
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
      userSelect: 'none', // Prevent any field selection
    };
    console.log('🚀 ~ LidoContainer ~ canplay:', this.canplay);

    return (
      <Host
        id="lido-container"
        Lang={this.Lang}
        tab-index={0}
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
        show-check={`${this.showCheck}`}
        is-continue-on-correct={`${this.isContinueOnCorrect}`}
        is-allow-only-correct={`${this.isAllowOnlyCorrect}`}
        canplay={`${this.canplay}`}
        appendToDropOnCompletion={`${this.appendToDropOnCompletion}`}
        show-prev-button={`${this.showPrevButton}`}
        show-next-button={`${this.showNextButton}`}
        show-drop-border={`${this.showDropBorder}`}
        bg-image={this.bgImage}
        exit-button-url={this.exitButtonUrl}
        prev-button-url={this.prevButtonUrl}
        next-button-url={this.nextButtonUrl}
        speaker-button-url={this.speakerButtonUrl}
        disable-speak={this.disableSpeak}
        template-id={this.templateId}
        audio={this.audio}
      >
        <lido-text visible="false" id={this.templateId} audio="" string={this.instructName} ></lido-text>
        <slot />
      </Host>
    );
  }
}
