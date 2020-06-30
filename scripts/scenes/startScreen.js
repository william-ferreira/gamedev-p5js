class StartScreen {
  constructor() {
    
  }
  
  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }
  
  _backgroundImage() {
    image(startScreenImage, 0, 0, width, height);
  }
  
  _text() {
    textFont(startScreenFont);
    textAlign(CENTER);
    textSize(50);
    text('The adventures of', width/2, height/6);
    textSize(100);
    text('Hipsta', width/2, height/4);
  }
  
  _button() {
    buttonManager.y = height / 7 * 5;
    buttonManager.draw();
  }
}  
