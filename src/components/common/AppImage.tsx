import { Component, Prop, h, Element, Host } from '@stencil/core';
import { initializeDraggable } from '../../utils/utils';

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
  @Prop() z: string;
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() visible: boolean;
  @Prop() audio: string;
  @Prop() onTouch: string;
  @Prop() onMatch: string;
  @Prop() onEntry: string;
  @Prop() src: string;

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
      display: this.visible ? 'block' : 'none',
    };

    return (
      <Host class="image" type={this.type} style={style}>
        <img style={{ height: this.height, width: this.width }} src={this.src} />
      </Host>
    );
  }
}
