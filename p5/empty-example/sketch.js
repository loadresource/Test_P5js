function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(0);
  stroke(255);
  strokeWeight(2);
  if(mouseIsPressed) {
    circle(mouseX, mouseY, random(25,50));
  }
  // When mouse is just hovering - create smaller, unfilled circles
  else {
    fill(0);
    stroke(color(random(0,255), 0, random(0,255))); // Purple-ish colors
    circle(mouseX, mouseY, random(10,20));
  }  
}
