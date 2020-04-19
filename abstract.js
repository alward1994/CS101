function setup() {
  createCanvas(700, 700);
    for(let i=0;i<100;i++){
  let x=random(0,255);
  let r=random(0,255);
  let y=random(0,255);
  background(x,y,r);
  rect(40,40,40,200);
  rect(40,40,150,40);
  rect(40,120,150,40);
  rect(500,40,40,200);
  rect(500,200,150,40);
  rect(260,380,120,40);
      fill(x,y,r); 
push();
  fill(x-100,y,r);
  translate(300, 300);
  rotate(radians(30));
  rect(0,0,40,200);
  rotate(radians(300));
  rect(0,0,40,220);
  pop();
    push();
       fill(x,y-100,r);
  ellipse(330,550 ,150 ,100 );
  ellipse(330,650 ,150 ,100 );
  rect(250,500,40,200);
      pop();
  push();
       fill(0,y,r);
  translate(480, 220);
  rotate(radians(60));
  rect(0,0,20,100);
 pop();
  push();
       fill(0,y,r);
  translate(180, 220);
  rotate(radians(-60));
  rect(0,0,20,100);
  pop();  
    } 
  line(0,height/2,width,height/2);
  for(let i=0;i<100;i++){ 
  noStroke();
  let cx=random(0,width);
  let cy=random(0,width);
  let cr=random(0,width);
    if(cx>width/2 ){
    fill(cx,cy,cr);
    ellipse(cx,cy,10,10);
    }
    else{
       fill(cx,cy,cr);
    ellipse(cx,cy,10,10);
    }
  } 
  
}

