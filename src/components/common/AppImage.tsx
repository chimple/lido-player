import { Component, Prop, h, Element, Host } from '@stencil/core';
import { enableDraggingWithScaling } from '../../utils/utils';

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
    if (this.type === 'drag') enableDraggingWithScaling(this.el);
  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      display: this.visible ? 'flex' : 'none',
      alignItems: 'center', // Vertically center
      justifyContent: 'center', // Horizontally center
    };

    return (
      <Host type={this.type} style={style} value={this.value} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}>
        <img class="image" src={this.src} />
      </Host>
    );
  }
}
