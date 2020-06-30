function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  soundtrack.loop();
  game = new Game();
  startScreen = new StartScreen();
  game.setup();
  scenes = {
    game,
    startScreen
  };
  buttonManager = new ButtonManager('Start', width/2, height/2);
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}