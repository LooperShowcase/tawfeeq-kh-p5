function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let CNV = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  let mll = millis();
  let mll2 = mll;
  let hours = hour();
  let minuts = minute();
  let seconds = second();
  stroke("white");
  noFill();
  strokeWeight(4);

  let secondsAngle = map(seconds, 0, 60, 0, 359);
  let minutsAngle = map(minuts, 0, 60, 0, 359) + secondsAngle / 60;
  let hoursAngle = map(hours % 12, 0, 12, 0, 360 + minutsAngle / 60);
  let bll = color(0, 0, 255);
  let bll2 = brightness(bll);

  stroke(bll);
  arc(0, 0, 300, 300, 0, secondsAngle);
  push();
  rotate(secondsAngle);
  line(0, 0, 150, 0);
  pop();

  stroke(153, 0, 255);
  arc(0, 0, 260, 260, 0, minutsAngle);
  push();
  rotate(minutsAngle);
  line(0, 0, 130, 0);
  pop();

  stroke(255, 51, 153);
  arc(0, 0, 220, 220, 0, hoursAngle);
  push();
  rotate(hoursAngle);
  line(0, 0, 110, 0);
  stroke(0);
  pop();
  stroke(0);

  if (seconds < 10) {
    ss = seconds.toString();
    seconds1 = "0" + ss;
  } else {
    seconds1 = seconds;
  }
  if (minuts < 10) {
    mm = minuts.toString();
    minuts1 = "0" + mm;
  } else {
    minuts1 = minuts;
  }

  if (hours < 10) {
    stroke(0);
    push();
    fill("white");
    rotate(90);
    textFont("Arial", 22);
    text(` ${hours % 12} : ${minuts1} : ${seconds1}  am `, -80, 10);
    pop();
  } else {
    stroke(0);
    push();
    fill("white");
    rotate(90);
    textFont("Arial", 25);
    text(` ${hours % 12} : ${minuts1} : ${seconds1}  pm `, -80, 10);
    pop();

    r = random(255);
    g = random(153);
    b = random(255);
    a = random(200, 255);
    fill(r, g, b, a);

    push();
    rotate(90);
    textFont("Arial", 20);
    text("12", -10, -165);
    text("6", -10, 175);
    text("9", -175, 0);
    text("3", 175, 0);

    pop();
  }
}
