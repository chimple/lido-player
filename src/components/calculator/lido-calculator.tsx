import { Component, h, Host, State, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { parseProp,executeActions,equationCheck,storingEachActivityScore } from '../../utils/utils';
import { NextContainerKey,LidoContainer } from '../../utils/constants';

@Component({
  tag: 'lido-calculator',
  styleUrl: 'lido-calculator.css',
  shadow: false,
})
export class LidoCalculator {
  
  /** Width of the calculator component (default: '479px') */
  @Prop() width: string = '479px';

  /**
    * Controls component visibility.
    * Accepts boolean (`true`/`false`) or string ("true"/"false").
  */
  @Prop() visible: boolean | string = false;

  /** Height of the calculator component (default: '711px') */
  @Prop() height: string = '711px';

  /** Objective or identifier for activity-based logic or validation */
  @Prop() objective: string = ''; 

  /** Code or actions to execute when the component is first rendered */
  @Prop() onEntry: string = '';

  /** X-position of the calculator (can be px, %, etc.) */
  @Prop() x: string = '0px';

  /** Y-position of the calculator (can be px, %, etc.) */
  @Prop() y: string = '0px';

  /** Background color for the calculator container */
  @Prop() bgColor: string = '#60DADA';

  /** Icon URL for the pen image shown on the calculator UI */
  @Prop() penIcon: string = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/calculator/Pen--Streamline-Solar%201.svg";


  /** Current display value shown in the calculator screen */
  @State() displayValue: string = '';

  /** Inline style object for dynamic positioning and layout control */
  @State() style: { [key: string]: string } = {};

  // --- Events ---

  /** Event emitted when user confirms or completes an action (e.g., pressing OK) */
  @Event() onOk: EventEmitter<boolean>;

  /** Reference to the host HTML element of this component */
  @Element() el: HTMLElement;
  
  private updateValueAttr() {
    this.el.setAttribute('value', this.displayValue);
  }

  componentWillLoad() {
    if (!this.objective) {
      const container = this.el.closest('lido-container');
      if (container) {
        this.objective = (container.getAttribute('objective') || '').replace('=', '').trim();
      }
    }
    console.log('Calculator objective:', this.objective);
     this.updateValueAttr();
  }
  private handleClick(value: string) {
    
    const MAX_LENGTH = 10;

    if (value === 'OK') {
      this.verifyAnswer();
    } else if (value === '←') {
      this.displayValue = this.displayValue.slice(0, -1);
    } else {
      if (this.displayValue.length < MAX_LENGTH) {
        this.displayValue += value;
      }
    }
    this.updateValueAttr();
  }

  private async verifyAnswer() { 
    const userInput = this.displayValue.trim();
    if (!userInput) return;

    let isCorrect = false;

    const container = this.el.closest('lido-container') as HTMLElement;
    if (!container) return;

    if (this.objective && this.objective !== '') {
      isCorrect = userInput === this.objective;
    } 
    else if (this.objective === '') {
      const equationAttr = container.getAttribute('equationCheck') || '';
      if (!equationAttr) return;
      try {
        const calculatedValue = equationCheck(equationAttr);
        isCorrect = Number(calculatedValue) === Number(userInput.trim());
        console.log('Equation check:', calculatedValue, userInput, isCorrect);
      } 
      catch (err) {
        console.error('Error evaluating equation:', err);
        isCorrect = false;
      }
    }
     const formattedValue = Number(userInput).toLocaleString('en-IN'); // or 'en-US' if you prefer
  this.displayValue = formattedValue;
  this.updateValueAttr();
    this.onOk.emit(isCorrect);

    if (isCorrect) {
      storingEachActivityScore(isCorrect);
      const onCorrect = container?.getAttribute('onCorrect') || '';
      await executeActions(onCorrect, container);
      window.dispatchEvent(new CustomEvent(NextContainerKey));
    }
    else{
      storingEachActivityScore(isCorrect);
      const onInCorrect = container?.getAttribute('onInCorrect') || '';
      await executeActions(onInCorrect, container);
    }
  }

  render() {
    const numbers = ['1','2','3','4','5','6','7','8','9','←','0','OK'];

    return (
      <Host onEntry={this.onEntry} id="lidoCalculator" style={{ width: this.width, height: this.height, backgroundColor: this.bgColor,left:this.x, top:this.y }}>
          <lido-cell visible="true" height="94px" width="60px">
            <lido-text visible="true" id="lido-calculator-penIcon" type="click" height="80px" x="176%" width="96px" onEntry="this.position='relative';" class="top-icon">
              <img src={this.penIcon} alt="pen" style={{ width: '100%', height: '100%' }} />
            </lido-text>
          </lido-cell>

          <div class="lido-calculator-displayParent">
            <div class="lido-calculator-display">{this.displayValue}</div>
          </div>

          <div class="lido-calculator-buttons">{numbers.map(num => (
           <lido-text string={num} visible="true" type="click" class={{
        'lido-calculator-btn-special': num === '←' || num === 'OK',
        'lido-calculator-btn-default': num !== '←' && num !== 'OK'
      }} onClick={() => this.handleClick(num)}></lido-text>
            ))}
        </div>
      </Host>
    );
  }
}
