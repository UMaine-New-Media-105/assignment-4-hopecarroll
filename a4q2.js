function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  noLoop();
  tilesPerRow = 8;
  tilesPerColumn = 3;
  tileWidth = width / tilesPerRow;
  tileHeight = height / tilesPerColumn;
  // purple star
  star1 = {
    startX: 80,
    startY: 50,
    scale: 0.5,
    points: 10,
    startAngle: 20,
    fill: "rebeccapurple",
  };
  // pink star
  star2 = {
    startX: 150,
    startY: 100,
    scale: 0.35,
    points: 6,
    fill: "orchid",
  };
  // green star
  star3 = {
    startX: 50,
    startY: 180,
    scale: 0.65,
    points: 30,
    fill: "lightgreen",
  };
}

function draw() {
  background("lightskyblue");
  // Row of stars
  for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
    let offsetRight = columnsDrawn * tileWidth;
    // Column of stars
    for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++) {
      let offsetDown = rowsDrawn * tileHeight;
      star1.x = star1.startX + offsetRight;
      star2.x = star2.startX + offsetRight;
      star3.x = star3.startX + offsetRight;
      star1.y = star1.startY + offsetDown;
      star2.y = star2.startY + offsetDown;
      star3.y = star3.startY + offsetDown;
      //purple star
      addStar(star1);
      //pink star
      addStar(star2);
      //green star
      addStar(star3);
    }
  }
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
