/* Celine Wu
Creative Coding, Fall 2015
Homework 3
p5.js version of Processing geometric abstraction bear sketch
https://www.google.com/culturalinstitute/u/0/asset-viewer/light-grey-wall/kwFNJMbUtg6DjA?projectId=art-project
*/

function setup() {
  createCanvas(900,500);
}

function draw() {

  // Dark grey background within canvas
  background(70, 73, 73);
  
  // No outlines
  noStroke();
  // Main light gray face
  fill(230, 225, 221);
  rect(35, 110, 600, 310);
  // Left eye
  fill(75);
  rect(150, 230, 27, 120);
  // Right eye
  fill(75);
  rect(475, 230, 27, 120);
  // Opaic headband
  fill(20, 20, 20, 65);
  rect(0, 53, 700, 85);
  // Opaic face/chest accent
  fill(30, 35, 35, 70);
  beginShape();
  vertex(85, 180);
  vertex(210, 180);
  vertex(210, 350);
  vertex(450, 350);
  vertex(450, 180);
  vertex(600, 180);
  vertex(600, 500);
  vertex(85, 500);
  endShape();
  // Add nose, not in original painting
  ellipse(320, 385, 80, 28);

  // "Erase" background to define head
  fill(255);
  rect(700, 0, 200, 500);
  
  // Paws
  fill(180, 175, 171);
  ellipse(750, 360, 35, 50);
  ellipse(790, 348, 35, 50);
  ellipse(830, 348, 35, 50);
  ellipse(870, 360, 35, 50);
  ellipse(810, 420, 120, 80);
  
  // add paw click interaction to enter site
}
