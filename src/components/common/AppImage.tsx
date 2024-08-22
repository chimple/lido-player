import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: false,
})
export class AppImage {
  @Prop() value: string;
  @Prop() height: string;
  @Prop() width: string;
  @Prop() x: string;
  @Prop() y: string;
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() visible: boolean;
  @Prop() audio: string;
  @Prop() onTouch: string;
  @Prop() onMatch: string;
  @Prop() onEntry: string;
  @Prop() src: string;

  render() {
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      position: 'absolute',
      display: this.visible ? 'block' : 'none',
      objectFit: 'cover',
      // borderRadius: '10px',
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return <img src={this.src} class="image" style={style} onClick={() => this.handleEvent(this.onTouch)} />;
  }

  private handleEvent(event: string) {
    if (event) {
      console.log(`Event Triggered: ${event}`);
    }
  }
}
