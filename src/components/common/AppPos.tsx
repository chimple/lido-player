import { Component, Host, Prop, h,Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

@Component({
  tag: 'app-pos',
  styleUrl: 'app-pos.css',
  shadow: false,
})
export class AppPos {
  @Prop() id: string;
  @Prop() value: string;
  @Prop() height: string;
  @Prop() width: string;
  @Prop() x: string;
  @Prop() y: string;
  @Prop() z: string;
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() tabIndex:number;
  @Prop() visible: boolean;
  @Prop() audio: string;
  @Prop() onTouch: string;
  @Prop() onMatch: string;
  @Prop() onEntry: string;

  @Element() el: HTMLElement;

  componentDidLoad() {
        initEventsForElement(this.el,this.type)

  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      display: this.visible ? 'block' : 'none',
    };

    return (
      <Host class="pos" type={this.type} tabindex={this.tabIndex} style={style} value={this.value} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}>
        <slot />
      </Host>
    );
  }
}
