class Game {
  constructor() {
    this.enemyIndex = 0;
    this.map = cartridge.map;
  }

  setup() {
    scenery = new Scenery(backgroundImage, 10);
    score = new Score();
    life = new Life(cartridge.settings.maxLifes, cartridge.settings.initialLifes);
    character = new Character(characterMatrix, characterImage, 0, 10, 110, 135, 220, 270);
    character2 = new Character(character2Matrix, character2Image, 30, 60, 102, 101, 204, 202);
    const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 10, 52, 52, 104, 104, 10);
    const troll = new Enemy(trollMatrix, trollImage, width - 0, 5, 200, 200, 400, 400, 10);
    const flying_droplet = new Enemy(flyingDropletMatrix, flyingDropletImage, width - 52, 200, 100, 75, 200, 150, 10);

    enemies.push(enemy);
    enemies.push(troll);
    enemies.push(flying_droplet);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      character2.jump();
      jumpSound.play();
    }
  }

  draw() {
    //frameRate(10);
    scenery.shows();
    scenery.move();
    //life.draw()
    //score.show();
    //score.addPoint();
    character2.shows();
    character2.appliesGravity();
    const currentLine = this.map[this.enemyIndex];
    
    //const enemy = enemies[currentLine.enemy];
    //const visibleEnemy = enemy.x < -enemy.imageWidth; // enemy has passed screen limit?

    //enemy.speed = currentLine.speed;
    
    //enemy.shows();
    //enemy.move();
    

    //if (visibleEnemy) { // if enemy has passed screen limit:
      //this.enemyIndex++; // next enemy on the enemies array
      //enemy.appear();
      //if (this.enemyIndex > this.map.length-1) {
        //this.enemyIndex = 0;
      //}
    //}

    //if (character2.collisionDetection(enemy)) {
      //life.loseLife();
      //character2.becomeInvencible();
      //if(life.lifes === -1) {
        //image(gameOverImage, width / 2 - 200, height / 2.5);
        //noLoop();
      //}
    //}
  }
}