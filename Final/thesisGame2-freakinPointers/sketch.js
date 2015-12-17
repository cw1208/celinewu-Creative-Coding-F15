
var start = [0,0]; // add margin to these points!
var end = [800,600];
var frames = 30;  // speed
var path = [start];
var next = [];
var coinToss;
var vertX;
var vertY;
var avatar;
var bgimg;
var avaX = 300;
var avaY = 400;
var nextStep = [];


function preload(){
  avatar = loadImage("fuzzyShadowedAvatar.png");
  bgimg = loadImage("ivory-sherpa-fabric.png");
}

function setup() {
  createCanvas(900,700);
  createPath(); 
  // print(path);
  frameRate(frames);
  
}

function draw(){
  background(bgimg);
  noStroke();
  fill('#67E825'); // pastelly green
  rect(0,0,50,100);
  fill('#E82281'); // pastelly gold or red
  rect(850,600,50,100);
  translate(50,50);
  
  
  // draw path
  drawPath();
  
  // draw avatar
  imageMode(CENTER);
  image(avatar,avaX,avaY,120,120);
  
  // move avatar
  move();
  
  // if avatar hits (800,600), win screen
}

function keyPressed(){
  // start game?
}

function createPath() {
  
  while (path[path.length - 1][0] < end[0] || path[path.length - 1][1] < end[1]) {
    next = path[path.length - 1];
    
    ( function (next) {
    // print(next);
    // have we hit the right border?  
    if (next[0]==end[0]){
      // if yes, keep going down until we hit the end point
      next[1] += 100;
      path[path.length] = next;
    }
    
    // have we hit the bottom border?
    else if (next[1]==end[1]){
      // if yes, keep going right until we hit the end point
      next[0] += 100;
      path[path.length] = next;
    }
    else {
      // right or down?
      coinToss = round(random());
      // 0 = right
      if (coinToss == 0) {
        next[0] += 100;
        path[path.length] = next;
      }
      // 1 = down
      else {
        next[1] += 100;
        path[path.length] = next;
      }
    }
    
    print(path);
    // print(path[path.length - 1]);
    // print(path.length);
    
    // if (path[path.length - 1]==end){
    //   return;
    // }
    }) (next)
    
  }
}

function drawPath(){
  stroke(40);
  strokeWeight(100);
  strokeCap(SQUARE);
  noFill();
  beginShape();
    vertex(0,0);
    vertex(100,0);
    vertex(200,0);
    vertex(200,100);
    vertex(300,100);
    vertex(300,200);
    vertex(300,300);
    vertex(300,400);
    vertex(400,400);
    vertex(500,400);
    vertex(600,400);
    vertex(600,500);
    vertex(600,600);
    vertex(700,600);
    vertex(800,600);
    // for (var i = 0;i<path.length;i++){
    //   vertX = int(path[i][0]);
    //   vertY = int(path[i][1]);
    //   vertex(vertX, vertY);
      // print("i = " +i);
      // print("path[i] x = " + path[i][0]);
      // print("path[i] y = " + path[i][1]);
    // }
  endShape();
}

function move(){
  // for (var i = 0;i<path.length;i++){
  //   nextStep = path[i];
  //   while (avaX < nextStep[0]){
  //     // if yes, keep going down until we hit the end point
  //     avaX += 2;
  //   }
    
  //   // have we hit the bottom border?
  //   while (avaX < nextStep[1]){
  //     // if yes, keep going right until we hit the end point
  //     avaY += 2;
  //   }
  // }
  
}


