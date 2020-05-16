
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
var MARGIN = 40;
var SCENE_W = 12000;
var SCENE_H = 12000;
let ndm=200;
let nv=100;
let song;
let stars;
let vs;
let scr=0;
let w=100;
let vl=2;
let acceleration;
let score=0;
let collisionCount = 0;
let gameOver;

function preload(){
 song= loadSound('assets/coffin.mp3');
pixFont = loadFont('assets/BungeeShade-Regular.ttf'); // BungeeShade-Regular, PressStart2P-Regular, PaytoneOne-Regular, Jost.ttf
  regFont = loadFont('assets/Jost.ttf');
  vImag = loadImage("assets/v1.png");
   manImag = loadImage("assets/man.png");
  // song= loadSound('assets/coffin.mp3');
}
function mousePressed() {
  if (song.isPlaying()) { 
    song.pause(); 
  } else {
    song.play();
  }
}



function setup() {

  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);
  // song.loop();
  // rectMode(CENTER);
  scen();
    // stars = new StarSystem(createVector(width / 2, 50));
    // fullscreen(true);
  //  noStroke();
  // frameRate(20);
  // colorMode(HSB);
  // randomSeed(0);
    // scen();
  
}
function draw() {

     dw();

}

function scen(){
    
  // scrA();
  // scrB();
  scrver();
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
    levelscr();
     }
  else if(scr == 4){
          newlevel();
     }

}
function allscr(){
  mncamera();
  // generateStars();
   vdraw();
   dmdraw();
  noStroke();
  fill(0, 0, 0, 20);
  ellipse(mn.position.x, mn.position.y+90, 80, 30);
  
  drawSprite(mn);
  camera.off();

// generateStars();
    vg.overlap(dmg, collectdm);
    mn.overlap(vg, collect);
    showScores(); 
         boox();
    if (ndm-nv == w/5){
         gameOver1(); 
    
    }
  if(nv <= w/2){
     newlevel();
     }
}
 

// ------------------------------------------scrver
function strscr(){
  clear();
   background(20,150,200);
  fill(255, 171, 171);
  textFont(pixFont, 74, 30);
  text("WELLCOME", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("click to start Or Press s to start", width/2, height/2 + 50);
  
   if(keyIsPressed && key == 's'){ 
     reset();
     scr=1;}
}
function levelscr(){
  
  background(20,150,200);
  fill(255, 171, 171);
  textFont(pixFont, 74, 30);
  text("new level", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("click to start Or Press (s) to start", width/2, height/2 + 50);
  
   if( keyIsPressed && key == 'x' ){
      
        newlevel1();
         scr=1;
        }
}

  function gameOver1() {
  vg.removeSprites();
  dmg.removeSprites();
  // mn.remove();
  background(255, 33, 33);
  fill(255, 171, 171);
  textFont(pixFont, 74, 30);
  text("GAME OVER", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("Press R to restart", width/2, height/2 + 50);
  
   if(keyIsPressed && key == 'r' ){    
     scr=0;}
                                                     
}

 

function newlevel() {
  vg.removeSprites();
  dmg.removeSprites();
  // mn.remove();
  background(0, 100, 80);
  fill(255, 171, 171);
  textFont(pixFont, 74, 30);
  text("newlevel", width/2, height/2 - 50);

  fill(255, 205, 205);
  textFont(regFont, 34, 10);
  text("Press x to next level", width/2, height/2 + 50);
    
   if(keyIsPressed && key == 'x' ){scr =3;}

 
}


function scrver(){
  vg= new Group();
  for(let i=0;i<nv;i++){
    v=createSprite(random(0, SCENE_W), random(0,  SCENE_H-windowHeight/2));
    v.addAnimation('normal', 'assets/v'+i%3+'.png');
    // v.setSpeed(random(2, 3), random(0, 360));
    // v.scale = random(0.5, 0.7);
    // //mass determines the force exchange in case of bounce
    // v.mass = v.scale;
    v.scale = 0.5;
    v.mass=0.05;
    v.setCollider('circle', 0, 0, 80);
    vg.add(v); 
    v.setSpeed(0.5, random(0, 270));
  
  }
}
// -----------------------------------scrdom
function scrdm(){
 dmg = new Group();
 for (let i =0;i<ndm;i++){
  dm = createSprite(random(0, SCENE_W), random(0,  SCENE_H-windowHeight/2));
   dm.addAnimation('normal', 'assets/dom'+i%3+'.png');
   dm.mass=0.002;
  dmg.add(dm);
   }
}

// -----------------------------------scrman
function scrmn(){
mn =createSprite(400, 200, 50, 100);
  let s = mn.addAnimation('floating', 'assets/s1.png', 'assets/s2.png' , 'assets/s3.png', 'assets/s4.png');
  mn.mass=1;
  s.offY=18;
 
}

// ------------------------------------scrA
function scrA(){
pg = new Group();
 for (let i =0;i<nv*ndm/2;i++){
  p = createSprite(random(-windowWidth,-windowWidth/3), random(-windowHeight,SCENE_H+windowHeight/3));
   p.addAnimation('normal', 'assets/km.png');
   p.mass=0.002;
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
  // return s;
}

  function scoreC(s) {
  s = s + 1;
   return s;
    
}
function bou(s1,s2){
   s1.bounce(s2, callbackFunc);
   text(collisionCount, 30, 30);
}
function ov(s1,s2){
if(s1.overlap(s2)){
    s1.displace(s2);
    // dmg.shapeColor=color(0,0,0);  
  }
}

function bou2(s1){
  // s1.onMousePressed=function (){ s1.ratotion=3;}
  // s1.attractionPoint(0.5, mouseX, mouseY);
  // s1.collide(s2);
//   groupName.removeSprites(); 
// remove(spriteName);

}
function collectdm(collector, collected)
{
  // collector.changeAnimation('stretch');
  collector.animation.rewind();
  collected.remove();
      ndm -=1;

}
function collect(collector, collected)
{
  // collector.changeAnimation('stretch');
  // collected.changeImage(manImag);

  collector.animation.rewind();
  
  collected.remove();
      nv -=1;


  // if (score % 5 == 0) {
  //   collisionCount += 1;
  // }
//   collisionCount= collisionCount + 1;

//  text(collisionCount, 30, 30);
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

// function punish() {
//   lifeScore = lifeScore - 3;
//   generateBlood();

//   if (lifeScore < 0) {
//     gameOver();
//   }
// }
// function collect(shipHead, mushroom) {
//   mushroom.remove();
//   mushroomsScore += 1;
//   if (mushroomsScore % 5 == 0) {
//     bulletsScore += 1;
//   }
// }
// function kill(bullet, enemy) {
//   enemy.remove();
//   bullet.remove();
// }


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
function generateStars() {
  stars.addStar();
  stars.run();
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
function reset(){
	 nv=w;
  	 ndm=2*w;
    // allscr();
    scrdm();
    scrver();
    // scrdm();
}
function newlevel1(){
	 nv =w+20;
  	ndm =2*w+10;
    // allscr();
    scrdm();
    scrver();
    // scrdm();
}

// function newGame() {
//   pipes.removeSprites();
//   gameOver = false;
//   updateSprites(true);
//   bird.position.x = width/2;
//   bird.position.y = height/2;
//   bird.velocity.y = 0;
//   ground.position.x = 800/2;
//   ground.position.y = GROUND_Y+100;
// }
// function die() {
//   updateSprites(false);
//   gameOver = true;
// }