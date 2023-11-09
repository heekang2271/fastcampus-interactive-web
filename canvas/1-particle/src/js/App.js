import Canvas from './Canvas.js';
import Particle from './Particle.js';
import { randomNumBetween } from './utils.js';

class App extends Canvas {
  constructor() {
    super();
  }

  init() {
    this.resize();

    const totalParticles = 20;

    this.minRadius = Math.max(this.canvasWidth / 80, 15);
    this.maxRadius = this.minRadius * 3;
    this.particles = [];

    for (let i = 0; i < totalParticles; i++) {
      const x = randomNumBetween(0, this.canvasWidth);
      const y = randomNumBetween(0, this.canvasHeight);
      const radius = randomNumBetween(this.minRadius, this.maxRadius);
      const vy = randomNumBetween(1, 3);

      this.particles.push(new Particle(x, y, radius, vy));
    }
  }

  render() {
    const draw = () => {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      this.particles.forEach((particle) => {
        particle.update();
        particle.draw();

        if (particle.y - particle.radius > this.canvasHeight) {
          particle.radius = randomNumBetween(this.minRadius, this.maxRadius);
          particle.y = -particle.radius;
          particle.x = randomNumBetween(0, this.canvasWidth);
          particle.vy = randomNumBetween(1, 5);
        }
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
