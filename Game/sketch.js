let button;
let v;
let vg;
let dm;
let dmg;
let mn;
let mng;
let p;
let pg;
let km;
let kmg;
// let MARGIN = 40;
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
function preload(){
  song= loadSound('assets/coffin.mp3');
  pixFont = loadFont('assets/BungeeShade-Regular.ttf'); 
  rangfont = loadFont('assets/Ranga-Bold.ttf');
  regFont = loadFont('assets/Jost.ttf');
  vImag = loadImage("assets/v1.png");
   manImag = loadImage("assets/man.png");
}
// function mousePressed() {
//   if (song.isPlaying()) { 
//     song.pause(); 
//   } else {
//     song.play();
//   }
// }



function setup() {

  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);
  // song.loop();
  // rectMode(CENTER);
  scen();
   
  
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

  if(scr == 0){strscr();}
  else if(scr == 1){
    clear();
   allscr();
  }
  else if(scr==2){
    gameOver1(); 
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
  camera.off();

    vg.overlap(dmg, collectdm);
    mn.overlap(vg, collect);
    showScores(); 
         boox();
    if (ndm-nv <= 0 || ndm <= nv || ndm == 0 || ndm <=w-w/4){
         gameOver1(); 
    
    }
  if(nv <= 0 || ndm-nv > nv){
     newlevel();
     }
}
 

// ------------------------------------------scrver
function strscr(){
  background(20,0,200);
  fill(0, 255, 0);
  textFont(pixFont, 45, 30);
  text("Clean the city from viruses", width/2, height/2-200);
  text("WELLCOME", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("click to start and Press S", width/2, height/2 + 50);
  fill(50, 100, 205);
  textFont(rangfont, 40, 15);
  text("Win when you kill all viruses or when heart more than viruses ", width/2, height/2 + 120);

  text("Game over when viruses kill more than halh of homes or when heart = 0", width/2, height/2 + 200);


  if(keyIsPressed && key == 's'){ 
     scr=1;}
//   push();
//   button = createButton('"click to start and Press S  ');
//   button.position(width/2-200, height/2 + 50);
//   button.style("font-family", pixFont);
//   button.style("color", 'red');
//   button.style("font-size", "40px");   
//   button.mousePressed(changeScr );
//   pop();
  
}

  function gameOver1() {
  vg.removeSprites();
  dmg.removeSprites();
  mn.remove();
  background(255, 33, 33);
  fill(255, 171, 171);
  textFont(pixFont, 74, 30);
  text("GAME OVER", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("Press R to restart", width/2, height/2 + 50);
  
   if(keyIsPressed && key == 'r' ){ 
      reset();
     scr=1;}
                                                     
}

 

function newlevel() {
  vg.removeSprites();
  dmg.removeSprites();
  mn.remove();
  background(0, 100, 80);
  fill(255, 171, 171);
  textFont(pixFont, 74, 30);
  text("newlevel", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("Press x to continues", width/2, height/2 + 50);
    
   if(keyIsPressed && key == 'x' ){
     newlevel1();
         scr=1;
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

// ------------------------------------scrA
function scrA(){
pg = new Group();
 for (let i =0;i<nv*ndm/2;i++){
  p = createSprite(random(-windowWidth,-windowWidth/3), random(-windowHeight,SCENE_H+windowHeight/3));
   p.addAnimation('normal', 'assets/km.png');
    // v.setSpeed(random(2, 3), random(0, 360));
  
   // p.mass=0.002;
  pg.add(p);
   }
}
// ------------------------------------scrB
function scrB(){
kmg = new Group();
 for (let i =0;i<nv/2;i++){
  km = createSprite(random(-windowWidth, SCENE_W+windowWidth), random(windowHeight+SCENE_H,SCENE_H));
   km.addAnimation('normal', 'assets/g2.png');
   km.mass=0.002;
  kmg.add(km);
   }
}
// ------------------------------------------------------!!!!!!end setup

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
// ------------------------------adraw
function adraw(){
 drawSprites(pg);
  
}
// ------------------------------bdraw
function bdraw(){
drawSprites(kmg);
}

//   -------------------------------------
function callbackFunc() {
collisionCount= collisionCount + 1;
}

function bou(s1,s2){
   s1.bounce(s2, callbackFunc);
   text(collisionCount, 30, 30);
}
function ov(s1,s2){
if(s1.overlap(s2)){
    s1.displace(s2);
  }
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


function flashLight() {
  push();
  fill(255, 255, 255);
  rect(0, 0, windowWidth, windowHeight);
  pop();
}


function reset(){
	 nv=w;
  	 ndm=2*w;
   
     scen();

}
function newlevel1(){
	 nv =w+20;
  	ndm =2*w+10;
  
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
  push();
 
   button = createButton('Music');
// button.size(120,80);
   // button.addImage(vImag);
  button.position(400, 40);
  button.style("font-family", pixFont);
  button.style("color", 'red');
  button.style("font-size", "30px");   button.mousePressed(changeBG);

  pop();
}
function changeBG() {
  if (song.isPlaying()) { 
    song.pause(); 
    } else {
      song.play();
  }

}
function changeScr() {
  if(scr == 0){
	scr=1;
	}else if(scr == 2){
	scr=1;
	}else if(scr == 3){
	scr=1;
	}
}
// function mousePressed(){
//    if (song.isPlaying()) { 
//     song.pause(); 
//   } else {
//     song.play();
// 	}
// 	// if(scr == 0){
// 	// scr=1
// 	// }else if(scr == 2){
// 	// scr=0
// 	// }
// 	// else if(scr == 4){
// 	// scr=3
// 	// }
// 	// else if(scr == 3){
// 	// scr=1
// 	// }
// }
