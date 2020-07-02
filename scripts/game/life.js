class Life {
   constructor (totalLives, initialLives) {
     this.totalLives = totalLives;
     this.initial = initialLives;
     this.lifes = this.initial;
     this.imageWidth = 28;
     this.imageHeight = 28;
     this.initialX = 20;
     this.y = 20;
   }
  
  draw () {  // used to draw hearts accordingly to the current number of lifes
    for (let i = 0; i < this.lifes; i++) {
      const margin = i * 10;
      const position = this.initialX * (1 + i);
      image(lifeImage, position + margin, this.y, this.imageWidth, this.imageHeight);
    }
  }
  
  earnLife() {
    if (this.lifes <= this.total) {
      this.lifes++;
    }
  }
  
  loseLife() {
      this.lifes--;
  }
}