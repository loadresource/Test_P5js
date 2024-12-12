function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeWeight(2);
  
  if(mouseIsPressed) {
    circle(mouseX, mouseY, 40);
  } else {
    square(mouseX, mouseY, 15);
  }
}
