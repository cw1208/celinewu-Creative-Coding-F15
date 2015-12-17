/* Celine Wu
Creative Coding, Fall 2015
Homework 6
Use DOM to make a novel single-page website/experience
Modify HW3 geometric bear with div links instead of rects.  Links to pages of my existing site, so visual continuity is terrible.  Sorry.
CodePens link: (not connecting to p5 library?) http://codepen.io/cw1208/pen/QyNLod
*/

// how to manage visibility when some elements are divs, some are on the same canvas but should be on different layers, and opacity is behaving iffily?

function setup() {
  
  var faceDiv = createDiv('<a href = "http://celinewu02.wix.com/portfolio#!ux/lxo2t/"></br></br>User Experience</a>');
  faceDiv.id("face");
  faceDiv.position(35,110);
  // All this may as well be done in CSS. So tedious here!
  faceDiv.style("background-color", "rgb(230, 225, 221)");
  faceDiv.style("width", "600px");
  faceDiv.style("height", "310px");
  faceDiv.style("z-index", "-1");
  faceDiv.style("text-align", "center");
  faceDiv.style("font-size", "20pt");
  faceDiv.style("font-family", "sans-serif");
  faceDiv.style("padding-top", "40px");
  
  var headbandDiv = createDiv('<a href = "http://celinewu02.wix.com/portfolio#!resume/cj5l/">Online Resume</a>');
  headbandDiv.id("headband");
  headbandDiv.position(0,53);
  headbandDiv.style("background-color", "rgba(20, 20, 20, .65)");
  headbandDiv.style("width", "700px");
  headbandDiv.style("height", "65px");
  headbandDiv.style("text-align", "center");
  headbandDiv.style("font-size", "25pt");
  headbandDiv.style("font-family", "sans-serif");
  headbandDiv.style("padding-top", "20px");
  
  var noseDiv = createDiv('</br><a href = "http://celinewu02.wix.com/portfolio#!about/c14qb/">About</a>');
  noseDiv.id("nose");
  noseDiv.position(210,390);
  noseDiv.style("background-color", "#FFBDDD");
  noseDiv.style("width", "250px");
  noseDiv.style("height", "100px");
  noseDiv.style("border-radius", "70px");
  noseDiv.style("text-align", "center");
  noseDiv.style("font-size", "16pt");
  noseDiv.style("font-family", "sans-serif");

  createCanvas(900,500);    // bear 900x500
}

function draw() {
  // Dark grey background within canvas
  // background(75, 75, 75, 40);
  
  
  // No outlines
  noStroke();
  
  // Main light gray face
  // fill(230, 225, 221);
  // rect(35, 110, 600, 310);
  
  // Left eye
  fill('#784471');
  rect(150, 230, 27, 120);
  
  // Right eye
  fill('#784471');
  rect(475, 230, 27, 120);
  
  // Opaic headband
  // fill(20, 20, 20, 65);
  // rect(0, 53, 700, 85);
  
  // Opaic face/chest accent
  fill(130, 130, 130, 30);
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
  
  // Nose, not in original painting
  // ellipse(320, 385, 80, 28);

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
  
  noFill();
  stroke(200,200,200);
  strokeWeight(2);
  rect(0, 0, 700, 500);
  
}

// function mouseWheel(event) {
//   posY += event.delta*4;
//   return false; // stops page scroll
// }
