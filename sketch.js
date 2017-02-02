function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(24);
  background(0)
}

function draw() {
  translate(width/2,height/2);
  rotate(100)
  stroke("red");
  line(200,0,200*cos(frameCount*2),200*sin(frameCount*2));
 

}