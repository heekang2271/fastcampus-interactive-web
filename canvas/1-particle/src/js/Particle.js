import CanvasOption from './CanvasOption.js';

export default class Particle extends CanvasOption {
  constructor(x, y, radius, vy) {
    super();

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = 'orange';

    this.vy = vy;
    this.gravity = 1.03;
  }

  update() {
    this.vy *= this.gravity;
    this.y += this.vy;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
