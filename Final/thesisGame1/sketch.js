/* 
p5.js version of Unity game for Thesis
One-track visualization. Avatar walks the dungeon and encounters enemies along the path. Losing to an enemy ends the game; clearing the dungeon shows a win screen and takes the user to the next level.

Badges at hour milestones? (Pokemon beauty contests) Sparkle and heart particle systems!

Color scheme:
White -- F1EDC9
Light tan -- D7BC80
Taupe -- BE975F
Brown -- 694931
Strawberry -- DE0747
Dark strawberry -- 9E0533

Pluff: plush controller and visualization
"Bond greatly." Crately? lol
Rounded box inspiration in visuals!!!
  Rounded boxes drop down in line with background as camera scrolls/char approaches point in path.  Top boxes drop to pathY-20, bottom boxes rise  to pathY+20

Create path array of vertices
BeginShape()-30 using vertices for top of path
BeginShape()+30 using vertices for bottom of path
Display avatar
Move avatar position(x,y) using vertices -- (next vertex-current position/framerate)
When avatar position == vertex position, find next vertex

*/



// Global variables
//var bgimg;
var avatar;   // static avatar, no walk cycle for now
var noiseScaleSize;
var offset = 5;
var path = [100, 100];
var charX = 100;
var charY = 100;
var frames = 30;

function preload(){
  avatar = loadImage("fuzzyShadowedAvatar.png");
  newPath();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  frameRate(frames);
}

function newPath(){
  for (i=0;i<14;i++){
    offset += 1.2;
    noiseScale = noise(offset);
    if (i%2==0){    // x values of vertices are stored in even numbered indices
      var n = noiseScale*(windowWidth);
      append(path, floor(n+200));
    }
    else if (i%2!=0){
      var n = noiseScale*(windowHeight);
      append(path, floor(n-50));
    }
    
  } 
  print("Path: "+ path);
}

  function draw(){
  background(100);
  drawPath();

  // character avatar
  image(avatar, charX, charY);
  //move();
  
  // create vector from an array (always the same path)?
  
  // path


}

function drawPath(){
  stroke(220);
  strokeWeight(4);
  strokeCap(SQUARE);
  noFill();
  
  beginShape();
  vertex(path[0],path[1]);
  vertex(path[2],path[3]);
  vertex(path[4],path[5]);
  vertex(path[6],path[7]);
  vertex(path[8],path[9]);
  vertex(path[10],path[11]);
  vertex(path[12],path[13]);
  endShape();
}

// for(var i = 0; i < 14; i + 2) {
//   vertex(path[i],path[i + 1]);
// }

function moveToward(){  // not called anywhere yet
  // move avatar at constant speed along path
  // for (var c=0; c<14; c++) {  // NOT A FOR LOOP...
  //   if (c%2==0){    // x values of vertices are stored in even numbered indices
  //     charX = path[c];
  //   }
  //   else if (c%2!=0){
  //     charY = path[c];
  //   }
  //   print (charX+" and "+charY);
  // }
  
  // charX = path[2];
  // charY = path[3];
  
  // check current avatar x,y
  
  // move toward next vertex
  
}

function keyPressed(){
  // Move avatar to each of the paired array points

  // charX = pathX[i];
  // print(charX);
  // i++;
  
  if (keyCode == 70){
    print("Off");
  }
  else if (keyCode == 78){
    print("On");
    
  }
  else{
    print("Nope");
  }
}


