let p;
let pl;
let vl=2;
let w=20;
let scr=0;
let score=0;
function setup() {
  createCanvas(400, 500);
  rectMode(CENTER);
  p=createVector(width/2,0);
  pl =createVector(width/2,height-w);
}
function draw() {
  if (scr == 0){
      background(150);
      textAlign(CENTER);
      textSize(20);
	  text('WELCOME ', width / 2, height / 2)
      text('click to start', width / 2, height / 2 + 40 );
      if(mouseIsPressed){scr = 1}}
  if (scr == 1){
      background(220);
      text(" score = " + score, 50,20)
      ellipse(p.x,p.y,w,w);
      rect(pl.x,pl.y,w+w,w);
      p.y = p.y + vl;
       
   if (keyIsDown(LEFT_ARROW)){
          pl.x=pl.x-vl;
      }
   else if (keyIsDown(RIGHT_ARROW) ){
            pl.x=pl.x+vl;
          } 
   if(p.y > height){  scr = 2;  }
     if (p.y > height-w/2 && p.x>pl.x-w && p.x<pl.x+20 ){
       p.y = w;
       vl+=0.2;
       score+=1;
     }
       if(p.y == w){  p.x= random(w,width-w);
        w+=1;  }
    }
  if(scr == 2){
     background(random(160,180));
      text(" Try again , your score = " + score,  width/2,height/2 )
      if(w > width/2){
          text("wooooooow  you win , your score = " + score,  width/2,height/2 +20 )
        }
     }
}

