import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-col',
  styleUrl: 'app-col.css',
  shadow: false,
})
export class AppCol {
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
      position: 'relative',
      display: this.visible ? 'block' : 'none',
      padding: '15px',
      borderRadius: '10px',
    };

    return (
      <div class="col" style={style} onClick={() => this.handleEvent(this.onTouch)}>
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
