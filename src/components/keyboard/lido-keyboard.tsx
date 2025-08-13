import { Component, Prop, Event, EventEmitter, h, Host, State, Element } from '@stencil/core';
import { DropAction, LidoContainer, SelectedValuesKey } from '../../utils/constants';
import { validateObjectiveStatus } from '../../utils/utils';
import { index } from 'mathjs';

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

  @Prop() gap: string = '10px';

  /** Callback function when a key is entered */
  @Prop() onEntry?: string;

  /** Type of the key (can be used for custom logic or styling) */
  @Prop() type?: string;

  /**
   * Indicates whether the keyboard input is enabled.
   * When set to `true`, the component will respond to keyboard events.
   */
  @Prop() keyboardInput: boolean = false;

  /** Number of columns in the keyboard layout */
  @Prop() columns: number = 10;

  /** Current input string entered via the keyboard */
  @State() inputString: string = '';

  /** Reference to the host element */
  @Element() el: HTMLElement;

  inputValidation = () => {
    let selcetedValue = JSON.parse(localStorage.getItem(SelectedValuesKey)) || '';
    selcetedValue = this.inputString;
    localStorage.setItem(SelectedValuesKey, JSON.stringify(selcetedValue));
  };

  componentDidLoad() {
    const container = document.getElementById(LidoContainer) as HTMLElement;
    if(this.keyboardInput){
      container.setAttribute('show-check', 'true');
    }
    if (container.getAttribute('drop-action') === DropAction.InfiniteDrop) {
      const buttons = this.el.querySelectorAll('.key-button');
      const firstButton = buttons[0] as HTMLButtonElement;
      buttons.forEach((button: HTMLButtonElement) => {
        button.style.width = firstButton.offsetWidth + 'px';
        button.style.height = firstButton.offsetHeight + 'px';
      });
    }
  }

  render() {
    const keysArray = this.keys.split(',').map(k => k.trim());

    return (
      <Host class="lido-keyboard" style={{ width: this.width, height: this.height }}>
        {this.keyboardInput && (
          <div class="input-area">
            <input type="text" value={this.inputString} class="input-area" placeholder="Enter something..." readonly onInput={(e: any) => (this.inputString = e.target.value)} />
            <lido-text
              string="<<"
              bg-color="black"
              font-color="white"
              border-radius="20px"
              font-size="30px"
              width="100px"
              height="70px"
              type='click'
              onClick={() => {(this.inputString = this.inputString.slice(0, -1)); this.inputValidation();}}
            />
            <lido-text
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
                tabIndex={index}
                id={'key-button-' + index}
                style={{
                  flex: `0 0 calc(${100 / this.columns}% - ${this.gap})`,
                }}
                width="auto"
                height="auto"
                fontSize={this.fontSize}
                fontColor={this.fontColor}
                fontFamily={this.fontFamily}
                string={label}
                onEntry={this.onEntry}
                value={label}
                type={this.type}
                class={`key-button${isDisabled ? ' disabled' : ''}`}
                onClick={() => {(this.inputString += string); this.inputValidation();}}
              />
            );
          })}
        </div>
      </Host>
    );
  }
}
