function preload() {
  backgroundImage = loadImage('images/scenery/field.jpg');
  startScreenImage = loadImage('images/scenery/startscreen.png');
  characterImage = loadImage('images/character/running.png');
  character2Image = loadImage('images/character/male-character.png');
  enemyImage = loadImage('images/enemies/droplet.png');
  trollImage = loadImage('images/enemies/troll.png');
  flyingDropletImage = loadImage('images/enemies/flying-droplet.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  lifeImage = loadImage('images/assets/heart.png');
  startScreenFont = loadFont('images/assets/startscreenfont.otf');
  soundtrack = loadSound('sounds/game_track.mp3');
  jumpSound = loadSound('sounds/jump_sound.wav');
  cartridge = loadJSON('cartridge/cartridge.json');
}
