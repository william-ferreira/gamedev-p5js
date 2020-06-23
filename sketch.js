let backgroundImage;
let characterImage;
let scenery;
let character;
let soundtrack;

function preload() {
  backgroundImage = loadImage('images/scenery/florest.png');
  characterImage = loadImage('images/character/running.png');
  soundtrack = loadSound('sounds/game_track.mp3');
  frameRate(40);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  scenery = new Scenery(backgroundImage, 3);
  character = new Character(characterImage);
  soundtrack.loop();
}

function draw() {
  scenery.shows();
  scenery.move();
  character.shows();
}