import { Component, Host, Prop, h, Element } from '@stencil/core';
import { enableDraggingWithScaling } from '../../utils/utils';

@Component({
  tag: 'app-shape',
  styleUrl: 'app-shape.css',
  shadow: false,
})
export class AppShape {
  @Prop() id: string;
  @Prop() value: string;
  @Prop() height: string;
  @Prop() width: string;
  @Prop() x: string;
  @Prop() y: string;
  @Prop() z: string;
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() shapeType: string;
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
      height: this.shapeType !== 'polygon' ? this.height : undefined,
      width: this.shapeType !== 'polygon' ? this.width : undefined,
      top: this.y,
      left: this.x,
      display: this.visible ? 'block' : 'none',
      zIndex: this.z,
      backgroundColor: this.shapeType !== 'polygon' ? this.bgColor : 'transparent',
    };

    return <Host class={`shape ${this.shapeType}`} value={this.value} type={this.type} style={style} audio={this.audio} onTouch={this.onTouch} onMatch={this.onMatch} onEntry={this.onEntry}></Host>;
  }
}
