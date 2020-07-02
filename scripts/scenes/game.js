class Game {
  constructor() {
    this.currentEnemyIndex = 0;
  }

  setup() {
    scenery = new Scenery(backgroundImage, 3);
    score = new Score();
    life = new Life(3, 3);
    character = new Character(characterMatrix, characterImage, 0, 10, 110, 135, 220, 270);
    const enemy = new Enemy(enemyMatrix, enemyImage, width - 52, 10, 52, 52, 104, 104, 10, 100);
    const troll = new Enemy(trollMatrix, trollImage, width - 0, 5, 200, 200, 400, 400, 10, 100);
    const flying_droplet = new Enemy(flyingDropletMatrix, flyingDropletImage, width - 52, 200, 100, 75, 200, 150, 10, 100);

    enemies.push(enemy);
    enemies.push(troll);
    enemies.push(flying_droplet);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      character.jump();
      jumpSound.play();
    }
  }

  draw() {
    scenery.shows();
    scenery.move();
    life.draw()
    score.show();
    score.addPoint();
    character.shows();
    character.appliesGravity();

    const enemy = enemies[this.currentEnemyIndex];
    const visibleEnemy = enemy.x < -enemy.imageWidth; // enemy has passed screen limit?

    enemy.shows();
    enemy.move();

    if (visibleEnemy) { // if enemy has passed screen limit:
      this.currentEnemyIndex++; // next enemy on the enemies array

      if (this.currentEnemyIndex > 2) {
        this.currentEnemyIndex = 0;
      }
      enemy.speed = parseInt(random(10, 30));
    }

    if (character.collisionDetection(enemy)) {
      image(gameOverImage, width / 2 - 200, height / 2.5);
      life.loseLife();
      character.becomeInvencible();
      //noLoop();
    }
  }
}