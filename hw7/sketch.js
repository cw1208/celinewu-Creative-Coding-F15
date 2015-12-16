/* Celine Wu
Creative Coding, Fall 2015
Homework 7 -- use JSON data
Takes current temperature and humidity weather readings for Union Square, Manhattan, NY, NY 10003. Fills the background blue from the bottom up for humidity reading and displays temp and humidity % as text.
Interactive view:  http://codepen.io/cw1208/pen/______
*/

var weather;

function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?zip=10003,us&appid=2de143494c0b295cca9337e1e96b00e0';
  weather = loadJSON(url);
}

function setup() {
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  background(255);

  // get the humidity value out of the loaded JSON
  var humidity = weather.main.humidity;
  fill(20, 80, 230, 80);
  noStroke();
  // use the humidity value to set position of rect. pixels = 500* humidity/100 = 5*humidity
  rect(0, height - (5 * humidity), width, height);

  // convert temperature from Kevins to Fahrenheit
  var tempK = weather.main.temp;
  var tempF = round(tempK * 9 / 5 - 459.67);
  // display temperature text
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(120);
  fill(90);
  text(tempF+"ºF", width / 2+15, height / 2, 200, 200);
  
  // display humidity text
  textSize(30);
  text(humidity+"% humidity", width/2, height/2+150, 200, 200);
  
  // display zipcode text
  rectMode(CORNER);
  textAlign(LEFT);
  textSize(20);
  text("Zip: 10003", 0, 0, 200, 50);
}

