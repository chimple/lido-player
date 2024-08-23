import { Component, Prop, h, Element, Host } from '@stencil/core';
import { initializeDraggable } from '../../utils/utils';

@Component({
  tag: 'app-text',
  styleUrl: 'app-text.css',
  shadow: false,
})
export class AppText {
  @Prop() id: string;
  @Prop() value: string;
  @Prop() string: string;
  @Prop() font: string;
  @Prop() fontSize: string;
  @Prop() highlightWhileSpeaking: boolean;
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
    if (this.type === 'drag') initializeDraggable(this.el);
  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      fontSize: this.fontSize,
      fontFamily: this.font,
      display: this.visible ? 'flex' : 'none',
    };

    return (
      <Host class="text" type={this.type} id={this.id} style={style}>
        {this.string}
      </Host>
    );
  }
}
