
// https://editor.p5js.org/alward1994/sketches/08fpWKmhY
// Pattern with motion and sound
let angle = 0;
let angleInner = 0;
let angle2 = 0;
let song;
function preload() {
  song= loadSound('assets/Nassi.mp3');
}
function setup() {
  createCanvas(700, 700);
  song.loop();
  noFill();
  stroke(255);
  ellipse(width/2, height/2, 100, 100);
}
function draw() {
  background(0);
  translate(width/2, height/2);
  ellipse(0, 0, 100, 100);
  rotate(angle);
  drawLines(0, 360, 8, [225, 121, 111], 150, 150, 1, 50, 50, 0);
  rotate(angleInner);
  drawLines(0, 360, 8, [42, 42, 42], 290, 200, 3, 50, 50, 0);
  push();
  let f= map(mouseX, 0,width,0,255);
  let b = map(mouseY, 0,height,0,255);
  drawLines(0, 300, 8, [255, 255, 255], 250, 250, 5, f, b, 0);
  pop();
  drawLines(0, 360, 8, [225, 120, 120], 120, 120, 5, 20, 20, 0);
  drawLines(0, 360, 8, [11, 11, 11], 290, 200, 3, 68, 68, 0);
  drawLines(0, 360, 8, [217, 217, 217], 190, 190, 5, 150, 150, 0);
  rotate(angle2);
  drawLines(0, 360, 8, [12, 111, 223], 180, 180, 5, 170, 170, 0);
  angle = angle + 0.010; 
  angleInner = angleInner + 0.004;
  angle2=angle2-0.02; 
}
function drawLines(startAngle, endAngle, angleInc, strokeClr, lenCutX, lenCutY, strokeW, endX, endY, lengthInc) {
  let incr = 0;
  for (let i = 0; i < endAngle / angleInc; i++) {
    push();
    stroke(strokeClr[0], strokeClr[1], strokeClr[2]);
    strokeWeight(strokeW);
    translate(0, 0); 
    rotate(radians(startAngle));
    line(width/2 - lenCutX - incr, height/2 - lenCutY - incr, endX, endY);
    ellipse(width/2 - lenCutX - incr, height/2 - lenCutY - incr, endX, endY);
    pop();
    startAngle += angleInc;
    incr += lengthInc;
  }
}
function mousePressed() {
  if (song.isPlaying()) { 
    song.pause(); 
  } else {
    song.play();
  }
}