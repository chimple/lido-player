import { Component, h, Element, Prop, Host } from '@stencil/core';

@Component({
  tag: 'lido-canvas',
  styleUrl: 'lido-canvas.css',
  shadow: true,
})
export class WritingPad {
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

  componentDidLoad() {
    this.canvas = this.el.shadowRoot.querySelector('#lido-canvas');

    /** Set the REAL drawing resolution */
    this.canvas.width = parseInt(this.width);
    this.canvas.height = parseInt(this.height);

    this.ctx = this.canvas.getContext('2d');

    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.loadBackground();

    this.canvas.addEventListener('pointerdown', e => this.start(e));
    this.canvas.addEventListener('pointermove', e => this.move(e));
    window.addEventListener('pointerup', () => this.stop());
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
        class="lido-pad"
        style={{
          width: this.width,
          height: this.height,
          left: this.x,
          top: this.y,
          position: 'absolute',
        }}
      >
        <button onClick={() => this.clearCanvas()}>
          <img id="lido-img1" src="https://cdn-icons-png.flaticon.com/256/458/458595.png" alt="Clear"/>
        </button>
        <canvas id="lido-canvas"  width={this.width}
  height={this.height}
  style={{ width: this.width, height: this.height }}></canvas>
      </Host>
    );
  }
}
