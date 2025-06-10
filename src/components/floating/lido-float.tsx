import { Component, Host, Prop, h, Element, State } from '@stencil/core';
import { parseProp } from '../../utils/utils';

@Component({
  tag: 'lido-float',
  styleUrl: 'lido-float.css',
  shadow: false,
})
export class LidoFloat {
  @Element() el: HTMLElement;

  /** Width of the floating element (CSS value like '200px') */
  @Prop() width: string = '200px';

  /** Height of the floating element (CSS value like '200px') */
  @Prop() height: string = '200px';

  /** Initial horizontal position (e.g., '50px') */
  @Prop() x: string = '0px';

  /** Initial vertical position (e.g., '0px') */
  @Prop() y: string = '0px';

  /** Duration of the float animation in seconds */
  @Prop() duration: number = 10;

  /** Delay before the animation starts (in seconds) */
  @Prop() delay: number = 0;

  /** Whether the float should be visible */
  @Prop() visible: boolean = true;

  /** Z-index of the floating element */
  @Prop() z: string = '0';

  /** Optional callback when animation ends */
  @Prop() onFloatEnd?: () => void;

   /** Float direction: 'bottom-top', 'top-bottom', 'right-left', 'left-right' */
   @Prop() direction: 'bottom-top' | 'top-bottom' | 'right-left' | 'left-right' = 'bottom-top';

   @State() style: { [key: string]: string } = {};

  componentWillLoad() {
    this.updateStyles();
  }

  private updateStyles() {
    const o = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    const animationName = this.getAnimationName();
    this.style = {
      position: 'absolute',
      top: parseProp(this.y, o),
      left: parseProp(this.x, o),
      width: parseProp(this.width, o),
      height: parseProp(this.height, o),
      animation: `${animationName} ${this.duration}s linear ${this.delay}s forwards`,
      zIndex: this.z,
      display: 'flex',
    };
  }

  private getAnimationName(): string {
    switch (this.direction) {
      case 'top-bottom': return 'float-down';
      case 'right-left': return 'float-left';
      case 'left-right': return 'float-right';
      case 'bottom-top':
      default: return 'float-up';
    }
  }

  private handleAnimationEnd = () => {
    if (typeof this.onFloatEnd === 'function') {
      this.onFloatEnd();
    }
    // this.el.remove();
  };


  render() {
    return (
      <Host style={this.style} onAnimationEnd={this.handleAnimationEnd}>
        <slot />
      </Host>
    );
  }
}
