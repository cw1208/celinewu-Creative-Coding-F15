/* Celine Wu
Creative Coding, Fall 2015
Homework 6
Use a spritesheet to create a small animation
Fixed mouseClicked behavior, added tree obstacle that disappears on click.
CodePens link: (not connecting to p5 library?) http://codepen.io/cw1208/pen/QyNLod
*/

// original code by:
// https://github.com/Jared-Sprague
var runningCat;
var savanna;
var dest;//destination for our running cat
var isRunning = false;
var dX = 170;//our initial x pos of the cat
function setup() {
  frameRate(15);
  createCanvas(windowWidth, 800);

  savanna = loadImage('image/african-savanna.png');
  tree = loadImage('image/transpTree.png');
  runningCat = loadImage('image/running-cat.png');
}

var sX = 0, sY = 0;

function draw() {
  clear();
  image(savanna,0,0,savanna.width,savanna.height,
  0,0,width,savanna.height);
  
  // Draw tree in cat's way
  if(isRunning==false){
    image(tree,0,0,tree.width,tree.height,
  325,0,250,250);
  } 
  
  // Animate running cat
  sX += 300;
  if (sX > 300) {
    sX = 0;
    sY += 150;
    if (sY === 600) {
      sY = 0;
    }
  }
  if(isRunning){
    println("running");
    runToDest();
    if(dX >= dest.x){
      sX = 170;
      isRunning = false;      
    }

  } else{
    image(runningCat, sX, sY, 300, 150, 170, 100, 300, 150);
  }
  // Show full sprite sheet for reference
  // image(runningCat, 0, 300, 300, 300);
}
function runToDest(){
  dX +=5.0;
  image(runningCat, sX, sY, 300, 150, dX, 100, 300, 150);
}

function mouseClicked(){
  isRunning = true;
  dest= createVector(width,height);
  println(dest.x);
}