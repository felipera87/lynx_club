import { vec3 } from 'gl-matrix';

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max * 2) + min;
};

const getColor = () => {
  return `hsla(200,100%,${randomNumberBetween(50, 100)}%,1)`;
};

class Star {
  constructor(halfWidth, halfHeight, speed, canvas2dContext) {
    this.warpZ = 12;
    this.halfWidth = halfWidth;
    this.halfHeight = halfHeight;
    this.speed = speed;
    this.canvas2dContext = canvas2dContext;

    this.vector = vec3.fromValues(
      randomNumberBetween(-halfWidth, halfWidth),
      randomNumberBetween(-halfHeight, halfHeight),
      randomNumberBetween(1, this.warpZ),
    );

    const [x, y, z] = this.vector;

    this.x = x;
    this.y = y;
    this.z = z;
    this.color = getColor();
  }

  reset() {
    this.vector = vec3.fromValues(
      randomNumberBetween(-this.halfWidth, this.halfWidth),
      randomNumberBetween(-this.halfHeight, this.halfHeight),
      randomNumberBetween(1, this.warpZ),
    );

    const [x, y] = this.vector;

    this.x = x;
    this.y = y;
    this.color = getColor();
  }

  calcVelocity() {
    return vec3.fromValues(0, 0, -this.speed);
  }

  draw() {
    const velocity = this.calcVelocity();
    this.vector = vec3.add(vec3.create(), this.vector, velocity);

    const x = this.vector[0] / this.vector[2];
    const y = this.vector[1] / this.vector[2];
    const x2 = this.vector[0] / (this.vector[2] + this.speed * 0.5);
    const y2 = this.vector[1] / (this.vector[2] + this.speed * 0.5);

    this.canvas2dContext.strokeStyle = this.color;
    this.canvas2dContext.beginPath();
    this.canvas2dContext.moveTo(x, y);
    this.canvas2dContext.lineTo(x2, y2);
    this.canvas2dContext.stroke();

    if (
      x < -this.halfWidth ||
      x > this.halfWidth ||
      y < -this.halfHeight ||
      y > this.halfHeight
    ) {
      this.reset();
    }
  }
}

export default Star;
