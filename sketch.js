var hr =hour();
var mn = minutw();
var sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  angleMode(DEGREE);
  scAngle = map(sc,0,60,0,360);
  
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
push();
 rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0, 0, 100, 0);
 pop();
  drawSprites();
}