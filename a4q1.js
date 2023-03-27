function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  // purple star
  star1 = {
    x: 125,
    y: 70,
    scale: 0.50,
    points: 10,
    startAngle: 20,
    fill: "rebeccapurple",
  }
  // pink star
  star2 = {
    x: 300,
    y: 200,
    scale: 0.35,
    points: 6,
    fill: "orchid",
  }
  // green star
  star3 = {
    x: 50,
    y: 300,
    scale: 0.65,
    points: 30,
    fill: "lightgreen",
  }
}

function draw() {
  background("lightskyblue");
  //purple star
  addStar(star1);
  //pink star
  addStar(star2);
  //green star
  addStar(star3);
}
function addStar(star) {
  push();
  noStroke();
  let addAngle = 360 / star.points;
  translate(star.x, star.y);
  scale(star.scale);
  rotate(star.startAngle);
  fill(star.fill);
  //loop
  for (let pointsDrawn = 0; pointsDrawn < star.points; pointsDrawn++) {
    rotate(addAngle);
    triangle(5, 35, -5, -25, 60, 60);
  }
  pop();
}
