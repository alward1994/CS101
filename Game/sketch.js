let button0;
let button1;
let button2;
let button3;
let v;
let vg;
let dm;
let dmg;
let mn;
let mng;
let SCENE_W = 12000;
let SCENE_H = 12000;
let ndm=200;
let nv=100;
let song;
let scr=0;
let w=100;
let vl=2;
let acceleration;
let score=0;
let collisionCount = 0;
let rangfont;
let pixFont;
let regFont;
let vImag;
let manImag;

function preload(){
  song= loadSound('assets/coffin.mp3');
  pixFont = loadFont('assets/BungeeShade-Regular.ttf'); 
  rangfont = loadFont('assets/Ranga-Bold.ttf');
  regFont = loadFont('assets/Jost.ttf');
  vImag = loadImage("assets/v1.png");
  manImag = loadImage("assets/man.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);

  scen();
  button0 = createButton(' click to start play ');
  button1 = createButton('Music');
  button2 = createButton(' click to restart ');
  button3 = createButton(' click to start newlevel ');

}
function draw() {
     dw();
}

function scen(){
  scrdm();
  scrmn();
  scrver();
}

function dw(){
  if(scr == 0){strscr();  }
  else if(scr == 1){
    clear();
   button0.remove();
   allscr();
  }
  else if(scr==2){
    gameOver(); 
  }	
  else if(scr == 3){
       newlevel();
     }
}

function allscr(){
  mncamera();
  vdraw();
  dmdraw();
  noStroke();
  fill(0, 0, 0, 20);
  ellipse(mn.position.x, mn.position.y+90, 80, 30);
  drawSprite(mn);
          farm(-100,-100,SCENE_W, SCENE_H,20,'red');
  camera.off();

    vg.overlap(dmg, collectdm);
    mn.overlap(vg, collect);
    showScores(); 
    btn(button1, 400,40 , "30px", 'red', pixFont, changeBG );
         boox();
         farm(0,0,windowWidth, windowHeight,8,'rgb(0,255,0)');
    if (ndm-nv <= 0 || ndm <= nv || ndm == 0 || ndm <=w-w/4){
         gameOver(); 
    
    }
  if(nv <= 0 || ndm-nv > nv){
     newlevel();
     }
}
 
// random(0,255),random(0,255),random(0,255)
// ------------------------------------------scrver
function strscr(){
  background(random(40,55),random(0,50),random(0,255));
  fill(255, 0,255);
  textFont(pixFont,width/20);
  text("Clean the city of viruses", width/2, height/6);
  fill(255, 255, 0);
  textFont(pixFont,width/9);
  text("WELLCOME", width/2, height/3);
  fill(255, 205, 205);
  textFont(regFont, width/20);
  text("click to start and Press S", width/2, height/2 );
  fill(50, 100, 205);
  textFont(rangfont,width/22);
  text("Win: when you kill all viruses or when heart more than viruses ", width/2, height-height/3);
  textFont(rangfont,width/25);
  text("Game over: when viruses kill more than half of homes or when heart = 0", width/2, height-height/6);
  if(keyIsPressed && key == 's'){ 
     scr=1;} 
  push();
    btn(button0, 0 ,0 ,"40px" , 'red', rangfont,changeScr);
  pop();  
}

  function gameOver() {
  vg.removeSprites();
  dmg.removeSprites();
  mn.remove();
  button1.remove();
  background(255, 33, 33);
  fill(0, 50, 50);
  textFont(pixFont, width/15);
  text("GAME OVER", width/2, height/2 - 50);

  fill(50, 100, 205);
  textFont(rangfont, width/20);
  text("Press R to restart", width/2, height/2 + 50);  
   if(keyIsPressed && key == 'r' ){
      song.play();
      reset();
      button2.remove();
     scr=1;}  
    push();
    btn(button2, 0 ,0 ,"40px" , 'red', rangfont,reset);
    pop(); 
    if (song.isPlaying()) { 
    song.pause(); 
    } 
}

function newlevel() {
  vg.removeSprites();
  dmg.removeSprites();
  mn.remove();
  button1.remove();
  background(0, 100, 80);
  fill(255, 171, 171);
  textFont(pixFont, width/20);
  text("newlevel", width/2, height/2 - 50);

  fill(50, 0, 205);
  textFont(rangfont,width/20);
  text("Press x to continues", width/2, height/2 + 50);
    
   if(keyIsPressed && key == 'x' ){
     song.play();
     newlevel1();
     button3.remove();
         scr=1;
     }
    push();
    btn(button3, 0 ,0 ,"40px" , 'red', rangfont,newlevel1);
    pop();
  if (song.isPlaying()) { 
    song.pause(); 
    } 
}


function scrver(){
  vg= new Group();
  for(let i=0;i<nv;i++){
    v=createSprite(random(0, SCENE_W), random(0,  SCENE_H-windowHeight/2));
    v.addAnimation('normal', 'assets/v'+floor(random(0, 7))+'.png');
    // v.scale = random(0.5, 0.7);
    // v.mass = v.scale;
    v.scale = 0.5;
    v.mass=0.05;
    v.setCollider('circle', 0, 0, 80);
    vg.add(v); 
    v.setSpeed(random(2, 3), random(0, 360));
    // v.setSpeed(0.5, random(0, 270));
  
  }
}
// -----------------------------------scrdom
function scrdm(){
 dmg = new Group();
 for (let i =0;i<ndm;i++){
  dm = createSprite(random(0, SCENE_W), random(0,  SCENE_H-windowHeight/2));
   dm.addAnimation('normal', 'assets/dom'+floor(random(0, 3))+'.png');
   dm.mass=0.002;
  dmg.add(dm);
   }
}

// -----------------------------------scrman
function scrmn(){
mn =createSprite(400, 200, 50, 100);
  let s = mn.addAnimation('floating', 'assets/s1.png', 'assets/s2.png' , 'assets/s3.png', 'assets/s4.png');
  // mn.mass=0.2;
  mn.setSpeed(5);

  s.offY=18;
 
}

// ------------------------------------draw
function mncamera(){
  background(220);
  mn.velocity.x = (camera.mouseX-mn.position.x)/5;
  mn.velocity.y = (camera.mouseY-mn.position.y)/5;

  if(mouseIsPressed)
    camera.zoom = 0.5;
  else
    camera.zoom = 1;

  camera.position.x = mn.position.x;
  camera.position.y = mn.position.y;

  if(mn.position.x < 0)
    mn.position.x = 0;
  if(mn.position.y < 0)
    mn.position.y = 0;
  if(mn.position.x > SCENE_W)
    mn.position.x = SCENE_W;
  if(mn.position.y > SCENE_H)
    mn.position.y = SCENE_H;   
}
  
// -----------------------------dmdraw
function dmdraw(){
 drawSprites(dmg);
}
// ----------------------------verdraw
function vdraw(){ 
          drawSprites(vg);
   // boox();
}

//   -------------------------------------
function callbackFunc() {
collisionCount= collisionCount + 1;
}
function collectdm(collector, collected)
{

  collector.animation.rewind();
  collected.remove();
      ndm -=1;

}
function collect(collector, collected)
{

  collector.animation.rewind();
  
  collected.remove();
      nv -=1;
}

// ----------------------------------------
function boox(){
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-windowWidth) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x> windowWidth+SCENE_W) {
      s.position.x = windowWidth+SCENE_W-1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if(s.position.y<-windowHeight) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y> windowHeight+SCENE_H) {
      s.position.y = windowHeight+SCENE_H-1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
}


function farm(a0,b0,a,b,strW,stCr) {
  push();
  strokeWeight(strW);
  stroke(stCr);
  noFill();
  rect(a0,b0,a, b);
  pop();
}


function reset(){
	 nv=w;
  	 ndm=2*w;
     button2.remove();
     button2 = createButton(' click to restart ');
     button1 = createButton('Music');
     btn(button1, 400,40 , "30px", 'red', pixFont, changeBG );
        song.play();

      scen();
  

}
function newlevel1(){
    nv =w+20;
  	ndm =2*w+40;
    button3.remove();
    button3 = createButton(' click to start newlevel ');
    button1 = createButton('Music');
    btn(button1, 400,40 , "30px", 'red', pixFont, changeBG );
    song.play();
        scen();
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function showScores() {
  textFont(regFont, 36);
  fill(255, 255, 200);
  image(vImag, 25, 43, 30, 30);
  text(nv, 95, 50);

  noStroke();
  fill(255, 110, 80);
  heart(160, 50, 20);
  text(ndm-nv, 210, 50);

  fill(255, 255, 200);
  image(manImag, 270, 43, 30, 30)
  text(ndm, 340, 50);
  
}
function changeBG() {
  if (song.isPlaying()) { 
    song.pause(); 
    } else  {
      song.play();
  }
}

function changeScr() {
  
  if(scr == 0){
    song.play();
	scr=1;
	}
}

function btn(buttond, PX ,PY, SF, Cr,Ff, f){

  buttond.position(PX, PY);
  buttond.style("font-family", Ff);
  buttond.style("color", Cr);
  buttond.style("font-size", SF);
  buttond.mousePressed(f);
  
}
