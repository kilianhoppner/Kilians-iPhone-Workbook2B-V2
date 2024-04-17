//Code from W3Schools

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight); // set capture size to window size
  cam.hide();
  frameRate(3);
}

function draw() {
  background(255);
  // Mirror the video horizontally
  translate(width, 0);
  scale(-1, 1);
  // Draw video capture feed as image inside p5 canvas
  image(cam, 0, 0, width, height);
}

function mousePressed() {
  save('selfie.png');
  return false;
}