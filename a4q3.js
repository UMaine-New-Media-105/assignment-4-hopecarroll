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
    startAngle: 30,
    fill: "orchid",
  };
  // green star
  star3 = {
    startX: 50,
    startY: 180,
    scale: 0.65,
    points: 30,
    startAngle: 10,
    fill: "lightgreen",
  };
  // ellipses
  ellipseFills = ["yellow", "orange", "magenta"];
  ellipsesPerTile = 3;
  //lines 
  lineStroke = "orange";
  linesPerTile = 4;
  endPointsX = [0, tileWidth / 4, tileWidth * (2/3), tileWidth];
  endPointsY = [0, tileHeight / 4, tileHeight * (2/3), tileHeight]
}

function draw() {
  background("lightskyblue");
  // columns of stars
  for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
    // rows of stars
    for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++) {
      let offsetRight = columnsDrawn * tileWidth;
      let offsetDown = rowsDrawn * tileHeight;
      // add lines
      for (let linesDrawn = 0; linesDrawn < linesPerTile; linesDrawn++){
       let x1 = offsetRight + random(endPointsX);
       let y1 = offsetDown + random (endPointsY);
        let x2 = offsetRight + random (endPointsX);
        let y2 = offsetDown + random (endPointsY);
        addLines (x1, y1, x2, y2);
      }
      // add ellipses
      for (
        let ellipsesDrawn = 0;
        ellipsesDrawn < ellipsesPerTile;
        ellipsesDrawn++
      ){   ellipseFill = random(ellipseFills);

        let ellipseX = offsetRight + random(tileWidth);
        let ellipseY = offsetDown + random(tileHeight);
        addEllipse(ellipseX, ellipseY, ellipseFill);
      }
      star1.x = star1.startX + offsetRight;
      star2.x = star2.startX + offsetRight;
      star3.x = star3.startX + offsetRight;
      star1.y = star1.startY + offsetDown;
      star2.y = star2.startY + offsetDown;
      star3.y = star3.startY + offsetDown;
      // Random number of points for each star
      star1.points = random(20, 50);
      star2.points = random(20, 50);
      star3.points = random(20, 50);
      //purple star
      addStar(star1);
      //pink star
      addStar(star2);
      //green star
      addStar(star3);
    }
  }
}
function addEllipse(x, y, ellipseFill) {
  push();
  translate(x, y);
  fill(ellipseFill);
  noStroke();
  ellipse(0, 0, 8);
  pop();
}
function addLines (startX, startY, endX, endY){
  push();
  noFill();
  stroke(lineStroke);
  line(startX, startY, endX, endY);
  pop();
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
