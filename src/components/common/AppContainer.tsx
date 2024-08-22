import { Component, Prop, h } from '@stencil/core';

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
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() visible: boolean;
  @Prop() audio: string;
  @Prop() onTouch: string;
  @Prop() onMatch: string;
  @Prop() onEntry: string;

  render() {
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      position: 'absolute',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    };

    return (
      <div class="container" style={style} onClick={() => this.handleEvent(this.onTouch)}>
        <slot />
      </div>
    );
  }

  private handleEvent(event: string) {
    if (event) {
      console.log(`Event Triggered: ${event}`);
    }
  }
}
