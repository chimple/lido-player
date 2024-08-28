import { Component, Host, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'app-container',
  styleUrl: 'app-container.css',
  shadow: false,
})
export class AppContainer {
  @Prop() value: string;
  @Prop() height: string;
  @Prop() width: string;
  @Prop() x: string;
  @Prop() y: string;
  @Prop() z: string;
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() visible: boolean;
  @Prop() audio: string;
  @Prop() onTouch: string;
  @Prop() onMatch: string;
  @Prop() onEntry: string;

  @Element() el: HTMLElement;

  scaleContainer(container: HTMLElement) {
    const widths = [window.innerWidth];
    const heights = [window.innerHeight];

    if (window.screen?.width) {
      widths.push(window.screen?.width);
      heights.push(window.screen?.height);
    }

    const width = Math.min(...widths);
    const height = document.documentElement.clientHeight;

    const scaleX = width / 1600;
    const scaleY = height / 900;
    const scale = Math.min(scaleX, scaleY);

    container.style.transform = `translate(-50%, -50%) scale(${scale})`; // Combine centering and scaling
  }

  componentDidLoad() {
    this.scaleContainer(this.el);
    window.addEventListener('resize', () => this.scaleContainer(this.el));
    window.addEventListener('load', () => this.scaleContainer(this.el));
  }

  render() {
    const style = {
      // height: this.height,
      // width: '100%',
      // backgroundColor: this.bgColor,
      // top: this.y,
      // left: this.x,
      width: '1600px',
      height: '900px',
      position: 'absolute',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    };

    return <Host id="container" class="container" style={style}></Host>;
  }
}
