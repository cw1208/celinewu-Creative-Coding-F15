/*
Celine Wu
Creative Coding, Fall 2015
Homework 4 -- drawing trees using an array, beginShape()/endShape(), and noise() onClick

50,700,300,480
165,373,584,192
*/

var noiseScaleSize;
var noiseScaleColor;
var rgbColoring;
var offset = 0.0;
// var pathX = [50,500,147,480];
// var pathY = [165,373,584,192];
var path = [];
var color1, color2, color3;

function setup() {
  
  // Canvas
  createCanvas(windowWidth, windowHeight);
  background(30);
  //text("Click to see noise()");   // WHAT IS THE SYNTAX???  CENTER
  instructions();
}

function rgbColor(){
  rgbColoring = createVector(colored(), colored(), colored());
}

function instructions(){
  s = "Click to see noise()";
  fill(color1, color2, color3);
  noStroke();
  textStyle(NORMAL);
  textSize(22);
  textAlign(CENTER);
  text(s, (windowWidth/2-90), 50, 200, 50);
}

function newTree(){   // Use newSingleTree() instead
  // Clear previous trees
  pathX = [];
  pathY = [];
  // begin/endShape() don't use vectors (distance). Vertices!
  // Define length of each branch. 6 branches
  for (i=0;i<6;i++){
    offset += 0.5;  // some drastic variation, pls
    noiseScale = noise(offset);
    var x = noiseScale*windowWidth;
    var y = noiseScale*windowHeight;
    append(pathX, floor(x));
    append(pathY, floor(y));
  } 
  
  // sort(pathX);
  // sort(pathY);
  // print("PathX: "+ pathX);
  // print("PathY: "+ pathY);
  // print("PathX[4]: "+ pathX[4] + "," + pathY[4]);

}

function newSingleTree(){
  // Clear previous trees
  path = [];
  // begin/endShape() don't use vectors (distance). Vertices!
  // Define length of each branch. 6 branches
  for (i=0;i<12;i++){
    offset += 1.05;  // some drastic variation, pls
    noiseScale = noise(offset);
    var n = noiseScale*(windowHeight);
    append(path, floor(n));
  } 
  
  //sort(path);
  print("PathXY: "+ path);

}

function tree() {
  
  color1 = colored();   // Was hoping to do in an array, but...can't
  color2 = colored();
  color3 = colored();
  
  stroke(color1, color2, color3);
  strokeWeight(4);
  strokeCap(SQUARE);
  noFill();
  
  beginShape();
  // vertex(windowWidth/2,windowHeight);
  // vertex(500,800);
  // vertex(20,400);
  // vertex(250,600);
  // vertex(700,30);
  // vertex(pathX[0],pathY[0]);
  // vertex(pathX[1],pathY[1]);
  // vertex(pathX[2],pathY[2]);
  // vertex(pathX[3],pathY[3]);
  // vertex(pathX[4],pathY[4]);
  // vertex(pathX[5],pathY[5]);
  vertex(path[0]+250,path[1]);
  vertex(path[2]+250,path[3]);
  vertex(path[4]+250,path[5]);
  vertex(path[6]+250,path[7]);
  vertex(path[8]+250,path[9]);
  vertex(path[10]+250,path[11]);
  endShape();
}

function colored(){
  // noise() to choose a color for the shape on each mouse press
  offset += 0.5;
  noiseScale = noise(offset);
  var coloring = floor(noiseScale*255);
  print(coloring);
  return coloring;
}

function mouseClicked() {
  // beginShape() won't take x and y of a vertex from two different arrays!  Use newSingleTree() to take values from a single array (path)
  //newTree();
  clear();
  instructions();
  newSingleTree();
  tree();
}
