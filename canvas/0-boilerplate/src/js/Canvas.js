import CanvasOption from './CanvasOption.js';

export default class Canvas extends CanvasOption {
  constructor() {
    super();
  }

  resize() {
    this.canvasWidth = innerWidth;
    this.canvasHeight = innerHeight;

    this.$canvas.width = this.canvasWidth * this.dpr;
    this.$canvas.height = this.canvasHeight * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.$canvas.style = `${this.canvasWidth}px`;
    this.$canvas.style = `${this.canvasHeight}px`;
  }

  animate(draw) {
    let now, delta;
    let then = Date.now();

    const frame = () => {
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;
      if (delta < this.interval) return;

      draw();

      then = now - (delta % this.interval);
    };
    requestAnimationFrame(frame);
  }
}
