import { Component, Host, Prop, h,Element } from '@stencil/core';
import { enableDraggingWithScaling } from '../../utils/utils';

@Component({
  tag: 'app-col',
  styleUrl: 'app-col.css',
  shadow: false,
})
export class AppCol {
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

  @Element() el: HTMLElement;

  componentDidLoad() {
    if (this.type === 'drag') enableDraggingWithScaling(this.el);
  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      display: this.visible ? 'flex' : 'none',
      zIndex: this.z,
    };

    return (
      <Host class="col" type={this.type} value={this.value} style={style} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}>
        <slot />
      </Host>
    );
  }
}