/* Celine Wu
Creative Coding - Fall 2015
Week 1 Homework - Sol Dewitt Drawing */

// Six white geometric figures (outlines)
// superimposed on a black wall

void setup() {
  // Canvas size 800x500 px
  size(800,500);
}

void draw() {
  // Like Python's Turtle...but faster...
  
  // Set background color to black
  background(0);
  
  // Make white outlines without fill
  // ...Applies to all shapes... Weird...
  noFill();
  stroke(255);
  
  triangle(340, 0, 120, 520, 800, 380);
  rect(70, 50, 200, 370);
  ellipse(800, 40, 700, 450);
  rect(200, 150, 500, 300);
  triangle(140, 80, 270, 400, 600, 380);
  ellipse(800, 40, 700, 450);
}