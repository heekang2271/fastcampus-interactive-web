import CanvasOption from './CanvasOption.js';

export default class Particle extends CanvasOption {
  constructor(x, y, vx, vy, opacity) {
    super();

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.opacity = opacity;

    this.friction = 0.93;
    this.gravity = 0.12;
  }

  update() {
    this.vy += this.gravity;

    this.vy *= this.friction;
    this.vx *= this.friction;

    this.x += this.vx;
    this.y += this.vy;

    this.opacity -= 0.02;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
