/*
Celine Wu
Creative Coding, Fall 2015
Homework 5 -- Redesign a clock using trigonometry and time functions
Metronome oscillating second hand, large hour numbers center top, smaller minutes below
Interactive view: http://codepen.io/cw1208/pen/addrmV
*/

var font;


function preload(){
  font = loadFont("cmr10.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // draw hour counter text
  textSize(140);
  textFont(font);
  fill(150);
  textAlign(CENTER);
  text(hour(), windowWidth/2, 200);

  // draw minute counter text
  textSize(100);
  textFont(font);
  fill(255);
  textAlign(CENTER);
  text(minute(), windowWidth/2, 320);
  
  // draw second counter text
  textSize(70);
  textFont(font);
  fill(90);
  textAlign(CENTER);
  text(second(), windowWidth/2, 400);
  
  // look up pendulum, rotate line
  // var amp = 100;
  // var radius = 150;
  // var period = second();
  // var angle = frameCount / period;
  // var x = cos(angle)*amp;
  // var y = sin(angle)*amp;

  rectMode(CORNER);
  fill(255);
  strokeCap(SQUARE);
  translate(width/2, height+5);
  rotate(cos(frameCount/59 * PI)+PI);
  rect(0, 0, 5, 500);
}


