
var start = [0,0]; // add margin to these points!
var end = [800,600];
var frames = 30;  // speed
var path = "RRDXXRDDDXXRRRXXDDRR"; //[start, [100,0], [200,0], [300,100]];
var next;
var coinToss;
var vertX;
var vertY;
var avatar;
var bgimg;
var avaX=0;
var avaY=0;
var nextStep = [];
var frameStart = 1000000000000;
var begin = false;
var beginAlert = true;
var opp1X = 300;
var opp2Y = 100;
var enemies;


function preload(){
  avatar = loadImage("fuzzyShadowedAvatar.png");
  bgimg = loadImage("fleece-sherpa-fabric-cream-softer.jpg");
}

function setup() {
  createCanvas(900,700);
  // createPath(); 
  // print(path);
  frameRate(frames);
}

function draw(){
  // display background sherpa image
  background(bgimg);
  
  // path beginning indicator
  noStroke();
  fill('#67E825'); // green
  
  // path end indicator
  rect(0,0,50,100);
  fill('#E82281'); // strawberry pink
  rect(850,600,50,100);
  translate(50,50);

  // draw path
  drawPath();
  
  // draw avatar
  imageMode(CENTER);
  image(avatar,avaX,avaY,120,120);

  
  drawEnemies();

  // draw Start screen pop-up rectangle.  "f" to close alert
  if (beginAlert == true) {
    // Start screen pop-up.  "Squeeze Pluff to start!"
    // alert("Squeeze Pluff to start!");
    fill('#FFECF4');  // pink-tinged white
    stroke('#FF1E7B');  // strawberry pink outline
    strokeWeight(2);
    rectMode(CENTER);
    rect(width/2-50, height/2-50, 250, 150, 30);
    textAlign(CENTER);
    fill(0);
    stroke('#4A0924') // dark, dark pink text outline
    strokeWeight(1);
    textSize(24);
    textFont("Trebuchet MS.ttf");
    text("Plug in and squeeze Pluff to test your bond!", width/2-50, height/2-45, 200, 100);
  }
  
  // Start in start screen.  Don't start moving avatar until keyPressed
  if (begin){
    // move avatar
    move(path[floor((frameCount-frameStart)/30)]);
  }
  
  // if avatar hits (800,600), win screen
}

function keyPressed(){
  // start game
  if (keyCode == 78 && frameStart == 1000000000000 && beginAlert == false){  
  // "n" key, passed by soft button when state changes from off to on
    frameStart = frameCount;
    print (frameStart);
    begin = true;
  }
  else if (keyCode == 70 && begin == false){
    beginAlert = false;
    redraw();
    print("f");
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
    vertex(300,100); //
    vertex(300,200);
    vertex(300,300);
    vertex(300,400);
    vertex(400,400); //
    vertex(500,400);
    vertex(600,400);
    vertex(600,500); //
    vertex(600,600);
    vertex(700,600);
    vertex(800,600);
  
    // for (var i = 0;i<path.length;i++){
    //   vertX = int(path[i][0]);
    //   vertY = int(path[i][1]);
    //   vertex(vertX, vertY);
    //   print("i = " +i);
    //   print("path[i] x = " + path[i][0]);
    //   print("path[i] y = " + path[i][1]);
    // }
  endShape();
}

function move(direction){
  // print(path[floor(frameCount/30)]);
  
  // if "R" (or "D"), set avatar's x or y position respectively to increment by pixel distance divided by frameRate
  if (direction == "R"){
    avaX+=(100/30);
  }
  else if (direction == "D"){
    avaY+=(100/30);
  }
}

function drawEnemies(){
  enemies = (subset(path,floor((frameCount-frameStart)/30)).match(/XX/g)||[]).length;
  if (enemies == 3){
    fill('rgba(178,26,104,0.3)');  // dark strawberry pink, 30% opacity
    noStroke();
    rectMode(CENTER);
    rect(300, 100, 70, 70, 5);
    fill('rgba(178,26,104,1)');  // dark strawberry pink
    rect(300, 100, 60, 60, 5);
  }
  if (enemies >= 2){
    fill('rgba(232,34,129,0.3)');  // dark strawberry pink, 30% opacity
    noStroke();
    rectMode(CENTER);
    rect(400, 400, 70, 70, 5);
    fill('rgba(232,34,129,1)');  // dark strawberry pink
    rect(400, 400, 60, 60, 5);
  }
  if (enemies >= 1) {
    fill('rgba(255,163,195,0.3)');  // dark strawberry pink, 30% opacity
    noStroke();
    rectMode(CENTER);
    rect(600, 500, 70, 70, 5);
    fill('rgba(255,163,195,1)');  // dark strawberry pink
    rect(600, 500, 60, 60, 5);
  }
}


/* ------- Following functions not used -------


function createPath() {
  // function not used
  
  // appending new values based on existing index values creates a pointer so that ALL of the indices take the new value. => path = [[800,600],[800,600],[800,600]]
  
  next = path[path.length-1];
  while (path[path.length - 1][0] < end[0] || path[path.length - 1][1] < end[1]) {
    
    // have we hit the right border?  
    if (next[0]==end[0]){
      // if yes, keep going down until we hit the end point
      next[1] += 100;
      path.concat(next);
      print("hit right, "+next);
    }
    
    // have we hit the bottom border?
    else if (next[1]==end[1]){
      // if yes, keep going right until we hit the end point
      next[0] += 100;
      path[path.length] = next;
      print("hit bottom, "+next);
    }
    else {
      // right or down?
      coinToss = round(random());
      // 0 = right
      if (coinToss == 0) {
        next[0] += 100;
        path[path.length] = next;
        print("went right, "+next);
      }
      // 1 = down
      else {
        next[1] += 100;
        path[path.length] = next;
        print("hit down, "+next);
      }
    }
    
    print(path);
    // print(path[path.length - 1]);
    // print(path.length);
    
    // if (path[path.length - 1]==end){
    //   return;
    // }
    
  }
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

*/
