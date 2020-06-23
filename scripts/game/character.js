class Character extends Animation {
  constructor(matrix, charImage, x, imageWidth, imageHeight, spriteWidth, spriteHeight){
    super(matrix, charImage, x, imageWidth, imageHeight, spriteWidth, spriteHeight);

    this.groundPosition = height - this.imageHeight;
    this.y = this.groundPosition;
    this.jumpingSpeed = 0;
    this.gravity = 5;
  }
  
  jump() {
    this.jumpingSpeed = -50;
  }
  
  appliesGravity() {
    this.y = this.y + this.jumpingSpeed;
    this.jumpingSpeed = this.jumpingSpeed + this.gravity;
    
    if (this.y > this.groundPosition) { // prevines character from falling off the ground 
      this.y = this.groundPosition;
    }
  }
  
  collisionDetection(enemy) { // returns true if the two objects are colliding
    noFill();
    rect(this.x, this.y, this.imageWidth, this.imageHeight);
    rect(enemy.x, enemy.y, enemy.imageWidth, enemy.imageHeight);
    const precision = .7; // increases rect coverage accuracy by lowering the hitbox
    const collision = collideRectRect(
      this.x, 
      this.y, 
      this.imageWidth * precision, 
      this.imageHeight * precision,
      enemy.x,
      enemy.y,
      enemy.imageWidth * precision,
      enemy.imageHeight * precision
    );
    
    return collision;
  }
}