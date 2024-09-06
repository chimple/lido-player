import { Component, Host, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'app-random',
  styleUrl: 'app-random.css',
  shadow: false,
})
export class AppRandom {
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
    const slotElements = this.el.querySelectorAll('.random > *');
    slotElements.forEach((child: HTMLElement) => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;

      child.style.top = `${randomTop}%`;
      child.style.left = `${randomLeft}%`;
    });
  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      display: this.visible ? 'block' : 'none',
      zIndex: this.z,
      backgroundColor: this.bgColor,
    };

    return (
      <Host class="random" type={this.type} tabindex={this.tabIndex} value={this.value} style={style} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}>
        <slot />
      </Host>
    );
  }
}
