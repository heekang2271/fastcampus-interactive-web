import CanvasOption from './CanvasOption.js';

export default class Tail extends CanvasOption {
  constructor(x) {
    super();

    this.x = x;
    this.y = this.canvasHeight;
  }

  update() {
    this.y -= 1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#ffffff';
    this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
