function random(min, max) {
  // return Math.floor(Math.random() * end + start);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}