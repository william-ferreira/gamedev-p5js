class Enemy extends Animation {
  constructor(matrix, enemyImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight, speed, delay){
    super(matrix, enemyImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight);
    
    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move(){
    this.x = this.x - this.speed;  
    
    if(this.x < -this.imageWidth - this.delay) {
      this.x = width;
    }
  }
}
