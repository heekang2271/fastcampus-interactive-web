import Canvas from './Canvas.js';

class App extends Canvas {
  constructor() {
    super();
  }

  init() {
    this.resize();
  }

  render() {
    const draw = () => {};

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
