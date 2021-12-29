import Star from './Star';

class StarField {
  constructor(numberOfStars, halfWidth, halfHeight, canvas2dContext) {
    this.stars = [];
    this.canvas2dContext = canvas2dContext;
    this.halfWidth = halfWidth;
    this.halfHeight = halfHeight;
    this.starsSpeed = 0.025;

    for (let i = 0, len = numberOfStars; i < len; i += 1) {
      this.stars.push(
        new Star(halfWidth, halfHeight, this.starsSpeed, canvas2dContext),
      );
    }
  }

  draw() {
    this.canvas2dContext.translate(this.halfWidth, this.halfHeight);

    this.stars.forEach(star => {
      star.draw();
    });
  }
}

export default StarField;
