import Canvas from './Canvas.js';
import Particle from './Particle.js';
import { randomNumBetween } from './utils.js';

class App extends Canvas {
  constructor() {
    super();

    this.totalParticles = 400;
  }

  init() {
    this.resize();

    this.particles = [];
    // const x = randomNumBetween(0, this.canvasWidth);
    // const y = randomNumBetween(0, this.canvasHeight);
    const x = this.canvasWidth / 2;
    const y = this.canvasHeight / 2;
    for (let i = 0; i < this.totalParticles; i++) {
      const r = randomNumBetween(1, 5);
      const angle = (Math.PI / 180) * randomNumBetween(0, 360);
      const vx = r * Math.cos(angle);
      const vy = r * Math.sin(angle);
      this.particles.push(new Particle(x, y, vx, vy));
    }
  }

  render() {
    const draw = () => {
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      this.particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    };

    this.animate(draw);
  }
}

const app = new App();

window.addEventListener('load', () => {
  app.init();
  app.render();
});

window.addEventListener('resize', () => {
  app.init();
});
