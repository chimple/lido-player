import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-row',
  styleUrl: 'app-row.css',
  shadow: false,
})
export class AppRow {
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
      // backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      position: 'absolute',
      display: this.visible ? 'flex' : 'none',
      // alignItems: 'center',
      // justifyContent: 'space-between',
      // padding: '10px',
      // borderRadius: '8px',
    };

    return (
      <div class="row" style={style} onClick={() => this.handleEvent(this.onTouch)}>
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
