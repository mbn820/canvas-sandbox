const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);
console.log(random(50, 100));

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

// start

let hue = 0;
const particles = [];

function createParticles(numOfParticles) {
  for (let i = 1; i <= numOfParticles; i++) {
    particles.push(new Particle({
      x: mouse.x,
      y: mouse.y,
      dx: random(-3, 3),
      dy: random(-3, 3),
      color: `hsl(${hue},100%,50%)`,
      hue: hue,
      radius: random(3, 12)
    }));
  }
}

function drawParticles() {
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.radius === 0) {
      particles.splice(index, 1);
    }
  });
}

function animate() {
  ctx.fillStyle = `rgba(0,0,0,0.2)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawParticles();
  hue+=10;

  requestAnimationFrame(animate);
}

animate();

// Event Listeners
canvas.addEventListener('pointermove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  createParticles(10);
});