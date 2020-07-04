class Character extends Animation {
  constructor(matrix, charImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight){
    super(matrix, charImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight);
    this.yModifier = yModifier;
    this.groundPosition = height - this.imageHeight - this.yModifier;
    this.y = this.groundPosition;
    this.jumpingSpeed = 0;
    this.gravity = 5;
    this.jumpHeight = -50;
    this.jumps = 0;
    this.invencibility = false;
  }
  
  jump() {
    if (this.jumps < 2) {
      this.jumpingSpeed = this.jumpHeight;
      this.jumps++;
    };    
  }
  
  appliesGravity() {
    this.y = this.y + this.jumpingSpeed;
    this.jumpingSpeed = this.jumpingSpeed + this.gravity;
    
    if (this.y > this.groundPosition) { // prevines character from falling off the ground 
      this.y = this.groundPosition;
      this.jumps = 0;
    }
  }
  
  becomeInvencible () {
    this.invencibility = true;
    setTimeout(() => {
      this.invencibility = false
    }, 1000)
  }
  
  collisionDetection(enemy) { // returns true if the two objects are colliding
    if(this.invencibility) {
      return false;
    }
    
    const precision = .7; // increases rect coverage accuracy by lowering the hitbox
    /*noFill();
    rect(
      this.x,
      this.y, 
      this.imageWidth * precision, 
      this.imageHeight * precision,
    );
    rect(
      enemy.x,
      enemy.y,
      enemy.imageWidth * precision,
      enemy.imageHeight * precision
    );*/
    const collision = collideRectRect(
      this.x, // TODO: Improve collision detection here
      this.y, // TODO: Improve collision detection here
      this.imageWidth * precision, 
      this.imageHeight * precision,
      enemy.x, // TODO: Improve collision detection here
      enemy.y, // TODO: Improve collision detection here
      enemy.imageWidth * precision,
      enemy.imageHeight * precision
    );
    
    return collision;
  }
}