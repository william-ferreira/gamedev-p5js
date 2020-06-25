class Animation {
  constructor(matrix, sourceImage, x, yModifier, imageWidth, imageHeight, spriteWidth, spriteHeight){
    this.matrix = matrix;
    this.sourceImage = sourceImage;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.x = x;
    this.yModifier = yModifier;
    this.y = height - this.imageHeight - this.yModifier;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.currentFrame = 0;
  }
  
  shows(){
    image(this.sourceImage, this.x, this.y, this.imageWidth, this.imageHeight, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight);
    
    this.animate();
  }
  
  animate(){
    this.currentFrame++;
    
    if (this.currentFrame === this.matrix.length-1) {
      this.currentFrame = 0;
    }  
  }
}