function setup() {
  createCanvas(800, 500);
  noStroke();
  angleMode(DEGREES);
  sunsetScale = 1;
  sunset = [
    "sun",
    "lighest",
    "lighter",
    "light",
    "middle",
    "dark",
    "darker",
    "darkest",
  ];
  tilesPerRow = sunset.length;
  tileWidth = width / tilesPerRow;
  tilesPerColumn = 5;
  tileHeight = height / tilesPerColumn;
}
function draw() {
  background("skyblue");
  for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++){
     for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++){
    let thisSun = sunset[(columnsDrawn + rowsDrawn) % sunset.length];
    let thisX = columnsDrawn * tileWidth;
    let thisY = rowsDrawn * tileHeight;
  addSunset(thisSun, thisX, thisY);
  }
  }
}
  function addSunset(sunset,x, y) {
    push();
    translate(x, y);
    scale(sunsetScale);
    noStroke();
    //the sun
  // fill(255, 204, 0);
  //ellipse(100, 100, 60, 60);
    if (sunset == "sun") {
      color("255, 204, 0");
    } else if (sunset == "lighest") {
     color(255, 187, 119);
    } else if (sunset == "lighter") {
      color(255, 153, 85);
    } else if (sunset == "light") {
      color(255, 119, 51);
    } else if (sunset == "middle") {
      color(255, 85, 17);
    } else if (sunset == "dark") {
      color(221, 68, 0);
    } else if (sunset == "darker") {
      color(170, 34, 0);
    } else if (sunset == "darkest") {
      color(102, 0, 0);
    }

    //colors for the sunset gradient
    let colors = [
      color(255, 221, 153),
      color(255, 187, 119),
      color(255, 153, 85),
      color(255, 119, 51),
      color(255, 85, 17),
      color(221, 68, 0),
      color(170, 34, 0),
      color(102, 0, 0),
    ];

    //sunset gradient
   for (let sunsetDrawn = 0; sunsetDrawn < 8; sunsetDrawn++) {
    fill(colors[sunsetDrawn]);
     ellipse(50 + sunsetDrawn * 15, 100, 60, 60);
   }
    pop();
}
