class Enemy extends Animation {
  constructor(matrix, enemyImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight, speed){
    super(matrix, enemyImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight);
    
    this.speed = speed;
    this.x = width;
  }
  
  move(){
    this.x = this.x - this.speed;  
  }
  
  appear() {
     this.x = width;
  }
}
