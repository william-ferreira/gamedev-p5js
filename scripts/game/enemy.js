class Enemy extends Animation {
  constructor(matrix, enemyImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight){
    super(matrix, enemyImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight);
    
    this.speed = 10;
  }
  
  move(){
    this.x = this.x - this.speed;  
    
    if(this.x < -this.imageWidth) {
      this.x = width;
    }
  }
}
