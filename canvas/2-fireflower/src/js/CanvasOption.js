export default class CanvasOption {
  constructor() {
    this.$canvas = document.querySelector('canvas');
    this.ctx = this.$canvas.getContext('2d');

    this.canvasWidth = innerWidth;
    this.canvasHeight = innerHeight;
    this.dpr = devicePixelRatio;

    this.fps = 60;
    this.interval = 1000 / this.fps;

    this.bgColor = '#000000';
  }
}
