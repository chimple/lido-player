import { Component, Prop, Event, EventEmitter, h, Host, State, Element } from '@stencil/core';
import { DropAction, LidoContainer, SelectedValuesKey } from '../../utils/constants';
import { executeActions, parseProp, storingEachActivityScore, triggerNextContainer, validateObjectiveStatus } from '../../utils/utils';
import { index } from 'mathjs';
import { handleFloatElementPosition } from '../../utils/utilsHandlers/floatHandler';

// LidoKeyboard component with customizable props for styling and behavior
@Component({
  tag: 'lido-keyboard',
  styleUrl: 'lido-keyboard.css',
  shadow: false,
})
export class LidoKeyboard {
  /** Comma-separated list of keys, optionally with status (e.g., "A,B-disable,C") */
  @Prop() keys: string = '';

  /** Width of each key button (e.g., "40px") */
  @Prop() width?: string;

  /** Height of each key button (e.g., "40px") */
  @Prop() height?: string;

  /** Font size for key labels (e.g., "16px") */
  @Prop() fontSize?: string;

  /** Font color for key labels (e.g., "#333") */
  @Prop() fontColor?: string;

  /** Font family for key labels (e.g., "Arial, sans-serif") */
  @Prop() fontFamily?: string;

  /** Gap between key buttons (default: "10px") */
  @Prop() gap: string = '10px';

  /** Background color for each key button */
  @Prop() bgColor: string = '';

  /** Border radius for key buttons (e.g., "8px") */
  @Prop() borderRadius: string = '';

  /** Y position (top) of the keyboard */
  @Prop() y?: string;

  /** X position (left) of the keyboard */
  @Prop() x?: string;

  /** Z-index for stacking order */
  @Prop() z?: string;

  /** Margin around the keyboard container */
  @Prop() margin?: string;

  /** Padding inside the keyboard container */
  @Prop() padding?: string;

  /** Whether the keyboard is visible ("true" / "false") */
  @Prop() visible?: string;

  /** Custom callback function when a key is entered */
  @Prop() onEntry?: string;

  /** Type of key interaction (e.g., "click", "drag") */
  @Prop() type?: string;

  /**
   * Indicates whether the keyboard input is enabled.
   * When set to `true`, the component will respond to keyboard events.
   */
  @Prop() keyboardInput: boolean = false;

  /** Number of columns in the keyboard layout (default: "10") */
  @Prop() columns: string = '10';

  /** Total number of letters required for completion */
  @Prop() letterLength: number;

  /** Tracks the number of keys clicked by the user */
  @State() numberOfClick: number = 0;

  /** Current input string entered via the keyboard */
  @State() inputString: string = '';

  /** Dynamic style object that stores resolved styles based on props */
  @State() style: { [key: string]: string } = {};

  /** Reference to the host element */
  @Element() el: HTMLElement;

  async inputValidation(e) {
    if (this.type !== 'click') return;
    let selcetedValue = JSON.parse(localStorage.getItem(SelectedValuesKey)) || '';
    selcetedValue = this.inputString;
    localStorage.setItem(SelectedValuesKey, JSON.stringify(selcetedValue));

    const container = document.getElementById(LidoContainer) as HTMLElement;

    const value = (e.target as HTMLElement).getAttribute('value');
    const bubbleValues = container.querySelectorAll(`[value= '${value}']`);
    const filteredElement = Array.from(bubbleValues).find(el => !el.className.includes('key-button')) as HTMLElement;
    this.inputString = value;
    let isOverlapping: boolean;
    if (filteredElement) {
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = filteredElement.getBoundingClientRect();
      isOverlapping = elemRect.left < bodyRect.right && elemRect.right > bodyRect.left && elemRect.top < bodyRect.bottom && elemRect.bottom > bodyRect.top;
    }
    if (isOverlapping) {
      filteredElement.style.animation = 'none';
      this.numberOfClick++;
      if (this.numberOfClick === this.letterLength) {
        const onCorrrect = container.getAttribute('onCorrect');
        container.style.pointerEvents = 'none';
        await executeActions(onCorrrect, this.el);
        triggerNextContainer();
      } else {
        handleFloatElementPosition(filteredElement);
        storingEachActivityScore(true);
      }
    } else {
      const onInCorrrect = container.getAttribute('onInCorrect');
      await executeActions(onInCorrrect, this.el);
      storingEachActivityScore(false);
    }
  }

  componentDidLoad() {
    const container = document.getElementById(LidoContainer) as HTMLElement;

    if (container.getAttribute('drop-action') === DropAction.InfiniteDrop) {
      const buttons = this.el.querySelectorAll('.key-button');
      const firstButton = buttons[0] as HTMLButtonElement;

      buttons.forEach((button: HTMLButtonElement) => {
        button.style.width = firstButton.offsetWidth + 'px';
        button.style.height = firstButton.offsetHeight + 'px';
      });
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
      display: parseProp(`${this.visible}`, orientation) === 'true' ? 'flex' : 'none',
      margin: parseProp(this.margin, orientation),
      padding: parseProp(this.padding, orientation),
      borderRadius: parseProp(this.borderRadius, orientation),
      columns: parseProp(`${this.columns}`, orientation),
      gap: parseProp(this.gap, orientation),
    };
  }

  render() {
    const keysArray = this.keys.split(',').map(k => k.trim());
    const container = document.getElementById(LidoContainer) as HTMLElement;
    const showCheck = container.getAttribute('show-check') === 'true';

    return (
      <Host class="lido-keyboard" style={{ width: this.style.width, height: this.style.height, position: 'relative', margin: this.style.margin, zIndex: this.z }}>
        {this.keyboardInput && (
          <div class="input-area">
            <input type="text" value={this.inputString} class="input-area" readonly onInput={(e: any) => (this.inputString = e.target.value)} />
            <lido-text
              visible={showCheck ? 'true' : 'false'}
              string="<<"
              bg-color="black"
              font-color="white"
              border-radius="20px"
              font-size="30px"
              width="100px"
              height="70px"
              type="click"
              onClick={() => {
                this.inputString = this.inputString.slice(0, -1);
                this.inputValidation(event);
              }}
            />
            <lido-text
              visible={showCheck ? 'true' : 'false'}
              id="lido-checkButton"
              string="Enter"
              bg-color="green"
              font-color="white"
              border-radius="20px"
              font-size="30px"
              width="150px"
              height="70px"
              type="click"
            />
          </div>
        )}

        {this.letterLength && (
          <lido-text
            visible="true"
            string={`${this.numberOfClick}/${this.letterLength}`}
            font-size="60px"
            font-color="white"
            onEntry="this.position='absolute'; this.right='0'; this.fontWeight='800';"
            x="unset"
          ></lido-text>
        )}

        <div
          class="keyboard-wrapper"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'stretch',
            gap: this.gap,
            width: '100%',
            height: '100%',
          }}
        >
          {keysArray.map((key, index) => {
            const [label, status] = key.split('-');
            const isDisabled = status === 'disable';
            let string = label === 'Space' ? ' ' : label;
            return (
              <lido-text
                id={'key-button-' + index}
                style={{
                  flex: `0 0 calc(${100 / parseInt(this.style.columns)}% - ${this.style.gap})`,
                }}
                visible="true"
                font-size={this.style.fontSize}
                font-color={this.fontColor}
                font-family={this.fontFamily}
                bg-color={this.bgColor}
                string={label}
                onEntry={this.onEntry}
                border-radius={this.style.borderRadius}
                value={label.toLowerCase()}
                type={this.type}
                class={`key-button${isDisabled ? ' disabled' : ''}`}
                onClick={() => {
                  this.inputString += string;
                  this.inputValidation(event);
                }}
              />
            );
          })}
        </div>
      </Host>
    );
  }
}
