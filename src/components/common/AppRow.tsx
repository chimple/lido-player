import { Component, Host, Prop, h, Element } from '@stencil/core';
import { initEventsForElement } from '../../utils/utils';

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
      display: this.visible ? 'flex' : 'none',
      zIndex: this.z,
    };

    return (
      <Host class="row" type={this.type} tabindex={this.tabIndex} value={this.value} style={style} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}>
        {/* <slot /> */}
      </Host>
    );
  }
}
