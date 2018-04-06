//This code os based upon several examples found on the p5.js website and is
//a demo for a larger project
//a p5.js orthographic camera example can be found in the reference however that example
//required some adjustment of the "far" parameter

//ewanbeckett.com

console.log("sketch file loaded") //just cjecking ;)

var img;
var rX = 3.14;
var rY = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(RADIANS);
  ortho(-windowWidth / 2, windowWidth / 2, windowHeight / 2, -windowHeight / 2, 0, 900); //making the camera orthographic rather than rectilinear
  img = loadImage("eye.jpg");   //loading the eye texture jpg
}

function draw(){
  //ortho() needs to be redelared in each loop otherwise the camera "viewport" doesn't update with the window size and things get warped
  ortho(-windowWidth / 2, windowWidth / 2, windowHeight / 2, -windowHeight / 2, 0, 900);
  background(0); //background colour

  texture(img); //setting the texture for all 3D objects after this to the eye image

  push();                          //any transformations made after push() and before pop() will remain local
  translate(270, 0, 0);            //the default origin for 3D bodies is the centre of the canvase so this moves the sphere to the right
  rotateX(rX);                     //rotating the sphere around the X axis, tilting it based on the y1 coordinate from max
  rotateY(rY);                     //rotating the sphere around the Y axis, panning it based on the x1 coordinate from max
  sphere(210);                     //draw a sphere with a radius of 70, oh and use the texture declared above
  pop();                           //transformations are stopped here

  push();
  translate(-270, 0, 0);           //and the same for the other eye except the position is 270 pixels in the other direction
  rotateX(rX);
  rotateY(rY);
  sphere(210);
  pop();

  //-- setting the rX and rY variable to make the eyes look at the cursor --
  rX = map(mouseY, 0, windowHeight, 2.45, 3.8, true); //the "true" keeps the resulting value within bounds
  rY = map(mouseX, 0, windowWidth, 0.8, -0.8, true);

}

// dynamically adjust the canvas to the window
// windowResized is called any time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
