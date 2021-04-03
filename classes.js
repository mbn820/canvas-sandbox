class BaseElement {
  constructor(props) {
    this.x = props.x;
    this.y = props.y;
    this.color = props.color;
  }

  distanceTo(otherElement) {
    const dx = this.x - otherElement.x;
    const dy = this.y - otherElement.y;
    return (dx * dx) + (dy * dy);
  }
}

class MovingElement extends BaseElement {
  constructor(props) {
    super(props);
    this.dx = props.dx || 0;
    this.dy = props.dy || 0;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

class Particle extends MovingElement {
  constructor(props) {
    super(props);
    this.radius = props.radius;
    this.hue = props.hue;
  }

  update() {
    this.reduceSize();
    this.move();
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  reduceSize() {
    if (this.radius <= 1) {
      this.radius = 0;
    } else {
      this.radius -= .30;
    }
  }
}