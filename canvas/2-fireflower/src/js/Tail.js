import CanvasOption from './CanvasOption.js';
import { randomNumBetween } from './utils.js';

export default class Tail extends CanvasOption {
  constructor(x, vy) {
    super();

    this.x = x;
    this.y = this.canvasHeight;
    this.vy = vy;
    this.friction = 0.985;
    this.opacity = 1;
  }

  update() {
    this.vy *= this.friction;
    this.y += this.vy;
    this.opacity = -this.vy * 0.1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
