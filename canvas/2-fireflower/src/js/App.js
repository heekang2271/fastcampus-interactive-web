import Canvas from './Canvas.js';
import Particle from './Particle.js';
import Tail from './Tail.js';
import { randomNumBetween, hypotenuse } from './utils.js';

class App extends Canvas {
  constructor() {
    super();

    this.particles = [];
    this.tails = [];
  }

  init() {
    this.resize();
    this.createTails();
  }

  createTails() {
    const x = randomNumBetween(300, 500);
    this.tails.push(new Tail(x));
  }

  createParticles() {
    const PARTICLE_NUM = 400;
    const x = this.canvasWidth / 2;
    const y = this.canvasHeight / 2;
    for (let i = 0; i < PARTICLE_NUM; i++) {
      const r = randomNumBetween(2, 100) * hypotenuse(this.canvasWidth, this.canvasHeight) * 0.0001;
      const angle = (Math.PI / 180) * randomNumBetween(0, 360);

      const vx = r * Math.cos(angle);
      const vy = r * Math.sin(angle);

      const opacity = randomNumBetween(0.6, 0.9);
      this.particles.push(new Particle(x, y, vx, vy, opacity));
    }
  }

  render() {
    const draw = () => {
      this.ctx.fillStyle = '#000000' + 40;
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      this.tails.forEach((tail) => {
        tail.update();
        tail.draw();
      });

      // this.particles.forEach((particle, i) => {
      //   particle.draw();
      //   particle.update();

      //   if (particle.opacity < 0) {
      //     this.particles.splice(i, 1);
      //   }
      // });
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
