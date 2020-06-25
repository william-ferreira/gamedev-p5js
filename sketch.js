let backgroundImage;
let characterImage;
let enemyImage;

let scenery;
let character;
let enemy;
let soundtrack;
let jumpSound;

const characterMatrix = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const enemyMatrix = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

function preload() {
  backgroundImage = loadImage('images/scenery/florest.png');
  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/droplet.png');
  soundtrack = loadSound('sounds/game_track.mp3');
  jumpSound = loadSound('sounds/jump_sound.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenery = new Scenery(backgroundImage, 3);
  character = new Character(characterMatrix, characterImage, 0, 10, 110, 135, 220, 270);
  enemy = new Enemy(enemyMatrix, enemyImage, width-52, 10, 52, 52, 104, 104);
  frameRate(40);
  soundtrack.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }
}

function draw() {
  scenery.shows();
  scenery.move();
  character.shows();
  character.appliesGravity();
  enemy.shows();
  enemy.move();
  if (character.collisionDetection(enemy)) {
    console.log('Game Over');
    noLoop();
  }
}