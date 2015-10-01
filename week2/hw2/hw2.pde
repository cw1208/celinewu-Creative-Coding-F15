/* Celine Wu
Creative Coding - Fall 2015
Week 2 Homework - Copying Geometric Abstraction Paintings */

// "Light Gray Wall" (1958) by Josef Albers
// https://www.google.com/culturalinstitute/u/0/asset-viewer/light-grey-wall/kwFNJMbUtg6DjA?projectId=art-project

void setup() {
  size(700, 500);
}

void draw () {
  background(60);
  noStroke();
  // Main light gray face
  fill(231, 225, 221);
  rect(35, 110, 600, 310);
  // Left eye
  fill(75);
  rect(150, 230, 27, 120);
  // Right eye
  fill(75);
  rect(475, 230, 27, 120);
  // Opaic headband
  fill(0, 0, 0, 60);
  rect(0, 53, 700, 85);
  // Opaic face/chest accent
  fill(0, 0, 0, 60);
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
}