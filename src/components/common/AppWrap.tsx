import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

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
      top: this.y,
      left: this.x,
      display: this.visible ? 'grid' : 'none', // Changed to 'grid'
      zIndex: this.z,
      backgroundColor: this.bgColor,
    };

    return (
      <Host class="wrap" value={this.value} type={this.type} tabindex={this.tabIndex} style={style} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}>
        <slot />
      </Host>
    );
  }
}
