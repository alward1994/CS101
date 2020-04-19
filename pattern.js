function setup() {
    createCanvas(700, 700);
    noFill();
    stroke(255);
    let x=random(0,255);
    let r=random(0,255);
    let y=random(0,255);
    // background(x,r,y);
    background(0);
    ellipse(width/2, height/2, 100, 100);
    drawLines(0, 360, 8, [225, 120, 120], 120, 120, 5, 20, 20, 0);
    drawLines(0, 360, 8, [225, 121, 111], 150, 150, 1, 50, 50, 0);
    drawLines(0, 360, 8, [225, 121, 111], 150, 150, 1, 50, 50, 0);
    drawLines(0, 360, 8, [42, 42, 42], 290, 200, 3, 50, 50, 0);
    drawLines(0, 360, 8, [255, 255, 255], 180, 180, 5, 50, 50, 3);
    drawLines(0, 360, 8, [11, 11, 11], 290, 200, 3, 68, 68, 0);
    drawLines(0, 360, 8, [217, 217, 217], 190, 190, 5, 150, 150, 0);
    drawLines(0, 360, 8, [12, 111, 223], 180, 180, 5, 170, 170, 0);
    stroke(x,y,r);
    strokeWeight(6);
    ellipse(350, 350, width-15, height-15);
  }
  
  function drawLines(startAngle, endAngle, angleInc, strokeClr, lenCutX, lenCutY, strokeW, endX, endY, lengthInc) {
    let incr = 0;
    for (let i = 0; i < endAngle / angleInc; i++) {
      push();
      stroke(strokeClr[0], strokeClr[1], strokeClr[2]);
      strokeWeight(strokeW);
      translate(width/2, height/2);
      rotate(radians(startAngle));
      line(width/2 - lenCutX - incr, height/2 - lenCutY - incr, endX, endY);
      // rect(width/2 - lenCutX - incr, height/2 - lenCutY - incr, endX, endY);
      ellipse(width/2 - lenCutX - incr, height/2 - lenCutY - incr, endX, endY);
      pop();
      startAngle += angleInc;
      incr += lengthInc;
    }
  }
  