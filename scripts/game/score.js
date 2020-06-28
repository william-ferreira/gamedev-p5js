class Score {
  constructor() {
    this.points = 0; 
  };
  
  show() {
    textAlign(CENTER);
    fill('#FFF');
    textSize(30);
    text(parseInt(this.points), width - 30, 50);
  };
  
  addPoint(){
    this.points = this.points + 0.2;
  };
};