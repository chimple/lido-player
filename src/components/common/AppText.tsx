import { Component, Prop, h, Element, Host } from '@stencil/core';
import Draggable from 'plain-draggable';

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
  @Prop() bgColor: string;
  @Prop() type: string;
  @Prop() visible: boolean;
  @Prop() audio: string;
  @Prop() onTouch: string;
  @Prop() onMatch: string;
  @Prop() onEntry: string;

  @Element() el: HTMLElement;

  draggable: Draggable;

  componentDidLoad() {
    this.initializeDraggable();
  }

  initializeDraggable() {
    this.draggable = new Draggable(this.el, {
      onDrag: () => {
        const rect = this.draggable.element.getBoundingClientRect();
        console.log(`🚀 ~ AppText ~ Dragging: left: ${rect.left}, top: ${rect.top}`);
      },
      containment: { left: 0, top: 0, width: 10000, height: 10000 },
      snap: {
        targets: document.querySelectorAll('.text'),
      },
    });

    console.log('🚀 ~ AppText ~ initializeDraggable ~ draggable:', this.draggable);
  }

  disconnectedCallback() {
    if (this.draggable) {
      this.draggable.destroy();
    }
  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      backgroundColor: this.bgColor,
      top: this.y,
      left: this.x,
      position: 'absolute',
      fontSize: this.fontSize,
      fontFamily: this.font,
      display: this.visible ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '8px',
      color: '#333',
      cursor: 'pointer',
    };

    return (
      <Host class="text" id={this.id} style={style} onClick={() => this.handleEvent(this.onTouch)}>
        {this.string}
      </Host>
    );
  }

  private handleEvent(event: string) {
    if (event) {
      console.log(`Event Triggered: ${event}`);
    }
  }
}
