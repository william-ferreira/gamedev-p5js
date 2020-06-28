let backgroundImage;
let characterImage;
let enemyImage;
let trollImage;
let flyingDropletImage;
let gameOverImage;

let scenery;
let character;
let enemy;
let troll;
let flying_droplet;
let score;
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

const trollMatrix = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const flyingDropletMatrix = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const enemies = [];

function preload() {
  backgroundImage = loadImage('images/scenery/florest.png');
  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/droplet.png');
  trollImage = loadImage('images/enemies/troll.png');
  flyingDropletImage = loadImage('images/enemies/flying-droplet.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  soundtrack = loadSound('sounds/game_track.mp3');
  jumpSound = loadSound('sounds/jump_sound.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenery = new Scenery(backgroundImage, 3);
  score = new Score();
  character = new Character(characterMatrix, characterImage, 0, 10, 110, 135, 220, 270);
  const enemy = new Enemy(enemyMatrix, enemyImage, width-52, 10, 52, 52, 104, 104, 8, 200);
  const troll = new Enemy(trollMatrix, trollImage, width-0, 5, 200, 200, 400, 400, 5, 2000);
  const flying_droplet = new Enemy(flyingDropletMatrix, flyingDropletImage, width-52, 200, 100, 75, 200, 150, 8, 2500);
  
  enemies.push(enemy);
  enemies.push(troll);
  enemies.push(flying_droplet);
  
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
  score.show();
  score.addPoint();
  character.shows();
  character.appliesGravity();
  
  
  enemies.forEach(enemy => {
    enemy.shows();
    enemy.move();
    
    if (character.collisionDetection(enemy)) {
      image(gameOverImage, width/2-200, height/2.5);
      noLoop();
    }  
  });
  
}