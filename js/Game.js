//Create class Game
class Game {
    constructor() {
        this.goofy = {};
        this.obstacles = [];
        this.score = 0;
        this.frames = 0;
        this.gameOver = false;
        this.winGame = false;
    }
}

//Create background Image infinite looping
const img = new Image();
img.src = "../images/background-image.jpg" ;

const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw() {
    context.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
    context.drawImage(this.img, this.x + canvas.width, 0, canvas.width, canvas.height);
  },
};