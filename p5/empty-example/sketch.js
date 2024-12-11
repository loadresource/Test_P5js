function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(0);
  stroke(255);
  strokeWeight(2);
  if(mouseIsPressed == true){
    circle(mouseX,mouseY,random(10,50))
  }
}
