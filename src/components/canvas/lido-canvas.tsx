import { Component, h, Element, Prop, Host, State } from '@stencil/core';
import { parseProp } from '../../utils/utils';

@Component({
  tag: 'lido-canvas',
  styleUrl: 'lido-canvas.css',
  shadow: true,
})
export class LidoCanvas {
  @Element() el: HTMLElement;

  // Background image URL for the canvas
  @Prop() bgImage: string;

  //  Width of the canvas containe
  @Prop() width: string = '800px';

  // Height of the canvas container
  @Prop() height: string = '700px';

  // X-offset position for the canvas
  @Prop() x: string = '0px';
  
  // y-offset position for the canvas
  @Prop() y: string = '0px';

  // Actions to execute when component loads
  @Prop() onEntry: string = '';

  // Canvas element reference
  private canvas!: HTMLCanvasElement;

  // 2D drawing context
  private ctx!: CanvasRenderingContext2D;

  // Flag to track drawing state
  private drawing = false;

  @State() style: { [key: string]: string } = {};
  updateStyles() {
  const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

  this.style = {
    width: parseProp(this.width, orientation),
    height: parseProp(this.height, orientation),
    left: parseProp(this.x, orientation),
    top: parseProp(this.y, orientation),
    position: 'absolute',
  };

  if (this.canvas) {
    this.canvas.width = parseInt(parseProp(this.width, orientation));
    this.canvas.height = parseInt(parseProp(this.height, orientation));
    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.loadBackground();
  }
}

  componentDidLoad() {
    this.canvas = this.el.shadowRoot.querySelector('#lido-canvas');
    this.ctx = this.canvas.getContext('2d');

    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.updateStyles();

    this.loadBackground();

    this.canvas.addEventListener('pointerdown', e => this.start(e));
    this.canvas.addEventListener('pointermove', e => this.move(e));
    window.addEventListener('pointerup', () => this.stop());
    window.addEventListener('resize', () => this.updateStyles());
  }

  loadBackground() {
    if (!this.bgImage) {
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.bgImage;

    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    };
  }

  getPos(e: PointerEvent) {
    const r = this.canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * (this.canvas.width / r.width),
      y: (e.clientY - r.top) * (this.canvas.height / r.height),
    };
  }

  start(e: PointerEvent) {
    this.drawing = true;
    const pos = this.getPos(e);
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
  }

  move(e: PointerEvent) {
    if (!this.drawing) return;
    const pos = this.getPos(e);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
  }

  stop() {
    this.drawing = false;
    this.ctx.closePath();
  }

  clearCanvas() {
    this.loadBackground();
  }

  render() {
    return (
      <Host
        id="lido-canvas"
        class="lido-canvas"
        style={this.style}>
        <button id="lido-exit-button" onClick={() => this.clearCanvas()}>
          <lido-text visible="true" height="92px" width="43px"  id="lido-exit-icon" font-color="white"  onEntry="this.font-weight='900';" font-size="96px" string='X'></lido-text>
        </button>
        <canvas id="lido-canvas" style={{ width: this.style.width, height: this.style.height,}}></canvas>
      </Host>
    );
  }
}
