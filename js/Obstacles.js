const canvas = document.getElementById('adventures');
const context = canvas.getContext('2d');

    //Create class Obstacle
class Obstacle {
    constructor(x, y, width, height, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.image = new Image();
    }

    //Create 2 images => dog for collecting/ banana to avoid
    draw() {
       if(this.type === 'dog') {
           this.image.src = '../images/dog.png';
       } else {
            this.image.src = "../images/banana.png";
       }
       context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}    

//can only collide with banana image
function obstacleCollision(obstacle) {
            return !((currentGame.goofy.x > obstacle.x + obstacle.width) ||
     (currentGame.goofy.x + currentGame.goofy.width < obstacle.x) ||
     (currentGame.goofy.y > obstacle.y + obstacle.height));
}