class ButtonManager{
  constructor (text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._modifyScene());
    this.button.addClass('button-start-screen');
  }
  
  draw () {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }
  
  _modifyScene() {
    this.button.remove();
    currentScene = 'game'
  }
}