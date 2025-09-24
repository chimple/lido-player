import { Component, h, Host, Prop, Element, State,  Method ,Watch} from '@stencil/core';
import { initEventsForElement, convertUrlToRelative, parseProp, speakIcon, setVisibilityWithDelay, attachSpeakIcon } from '../../utils/utils';

@Component({
  tag: 'lido-balance',
  styleUrl: 'lido-balance.css',
  shadow: false,
})
export class LidoBalance {
  @Prop() pivotimage: string =
    'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Display%20stand.svg';

  @Prop() scaleimage: string =
    'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Bar.svg';

  @Prop() handlerimage: string =
    'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/Stands.svg';


  @Prop() fill: string = 'brown';
  @Prop() tilt: number = 0;
  @Prop() maxTilt: number = 8;
  @Prop() onEntry: string = '';
  @Prop() height: string = 'auto';
  @Prop() width: string = 'auto';
  @Prop() x: string = '0px';
  @Prop() y: string = '0px';
  @Prop() z: string = '0';
  @Prop() visible: boolean | string = false;
  @Prop() margin: string = '';
  @Prop() padding: string = '';
 @Prop({ mutable: true, reflect: true }) balanceSymbol: string = '=';

  @State() pivotSvg: string = '';
  @State() scaleSvg: string = '';
  @State() handlerSvg: string = '';
  @State() style: { [key: string]: string } = {};
 @State() tiltf: number = 0;
 @Prop() operation:string='count';
@State() leftVal: number = 0;
@State() rightVal: number = 0;



  private scaleEl!: HTMLElement;
  private animationFrameId: number;
  private leftHandleEl!: HTMLElement;
private rightHandleEl!: HTMLElement;
private leftParentEl!: HTMLElement;
private rightParentEl!: HTMLElement;

@Prop({ mutable: true, reflect: true }) showSymbol: boolean = false;

@Method()
async revealSymbol() {
  this.showSymbol = true;
}

@Method()
async hideSymbol() {
  this.showSymbol = false;
}


  @Element() el: HTMLElement;



  async componentWillLoad() {
    this.pivotSvg = await this.fetchAndApplyFill(this.pivotimage);
    this.scaleSvg = await this.fetchAndApplyFill(this.scaleimage);
    this.handlerSvg = await this.fetchAndApplyFill(this.handlerimage);
   
  }

  componentDidLoad() {
     setTimeout(() => {
    this.animateBalance();
  }, 4000);
  this.leftParentEl = document.getElementById("leftparent") as HTMLElement;
  this.rightParentEl = document.getElementById("rightparent") as HTMLElement;
   initEventsForElement(this.el)
  }

  disconnectedCallback() {
    if (this.animationFrameId != null)
    cancelAnimationFrame(this.animationFrameId);
  }

  private async fetchAndApplyFill(url: string): Promise<string> {
    try {
      const res = await fetch(url);
      if (!res.ok) return '';
      let svg = await res.text();
      svg = svg.replace(/fill="[^"]*"/g, '');
      svg = svg.replace(/stroke="[^"]*"/g, '');

      svg = svg.replace(
        /<svg([^>]*)>/,
        `<svg$1 fill="${this.fill}" stroke="${this.fill}">`,
      );

      return svg;
    } catch (e) {
      console.error('SVG fetch failed:', e);
      return '';
    }
  }
  private currentAngle = 0; 
 @Watch('tilt')
  tiltChanged(newValue: number) {
    this.tiltf = newValue;
  }

@Method()
async updateTilt(leftVal: number, rightVal: number) {
  const diff = rightVal - leftVal;
  const newTilt = Math.max(-5, Math.min(5, diff));
  this.tiltf = newTilt;   
}


private animateBalance() {
  const rotate = () => {
    let targetAngle = (this.tiltf / 5) * this.maxTilt;

    if (targetAngle > this.maxTilt) targetAngle = this.maxTilt;
    if (targetAngle < -this.maxTilt) targetAngle = -this.maxTilt;

    this.currentAngle += (targetAngle - this.currentAngle) * 0.1;

    if (this.currentAngle > this.maxTilt) this.currentAngle = this.maxTilt;
    if (this.currentAngle < -this.maxTilt) this.currentAngle = -this.maxTilt;

    if (this.scaleEl) {
      this.scaleEl.style.transform = `rotate(${this.currentAngle}deg)`;
      this.scaleEl.style.transformOrigin = '50% 80%';
    }
if (this.leftParentEl && this.rightParentEl) {
  const maxOffset = 60; 
  const offset = (this.currentAngle / this.maxTilt) * maxOffset;

  this.leftParentEl.style.transform = `translateY(${-offset}px)`;
  this.rightParentEl.style.transform = `translateY(${offset}px)`;
  
}

   
    if (this.leftHandleEl && this.rightHandleEl) {
      const maxOffset = 60; 
      const offset = (this.currentAngle / this.maxTilt) * maxOffset;

      
      this.leftHandleEl.style.transform = `translateY(${-offset}px)`;
      this.rightHandleEl.style.transform = `translateY(${offset}px)`;
    }
  this.animationFrameId = requestAnimationFrame(rotate);
  };

  rotate();
}


  updateStyles() {
    
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      height: parseProp(this.height, orientation),
      width: parseProp(this.width, orientation),
      top: parseProp(this.y, orientation),
      left: parseProp(this.x, orientation),
      zIndex: this.z,
      display: parseProp(`${this.visible}`, orientation) === "true" ? 'flex' : 'none', 
      margin: parseProp(this.margin, orientation),
      padding: parseProp(this.padding, orientation),
     
    };
  }
  render() {
    return (
      <Host 
      onEntry={this.onEntry}
       style={this.style}
      class="lido-balance" tilt={this.tilt.toString()} operation={this.operation.toString()}>
        <div innerHTML={this.pivotSvg} id="pivotimg" class="pivot"></div>
        <div
          innerHTML={this.scaleSvg}
          class="scale"
          ref={(el) => (this.scaleEl = el as HTMLElement)}
        >
        </div>
        <div innerHTML={this.handlerSvg} class="handler"  ref={(el) => (this.leftHandleEl = el as HTMLElement)}  ></div> 
          
         
         <div innerHTML={this.handlerSvg} class="hand" ref={(el) => (this.rightHandleEl = el as HTMLElement)} ></div> 
         <div id="balanceSymbol" class="balance-symbol" aria-hidden={!this.showSymbol}>
          {this.showSymbol ? this.balanceSymbol : ''}
        </div>

           
      </Host>
    );
  }
}
