import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-wrap',
  styleUrl: 'app-wrap.css',
  shadow: false,
})
export class AppWrap {
  @Prop() id: string;
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

  render() {
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      display: this.visible ? 'grid' : 'none', // Changed to 'grid'
      zIndex: this.z,
      backgroundColor: this.bgColor,
    };

    return (
      <Host class="wrap" type={this.type} style={style}>
        <slot />
      </Host>
    );
  }
}