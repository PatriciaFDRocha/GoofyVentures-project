const canvas = document.getElementById('adventures');
const context = canvas.getContext('2d');

let obstacle;
let frame = 0;

//Create class Game
class Game {
    constructor() {
        this.goofy = {};
        this.obstacles = [];
        this.score = 0;
    }
}

//Create class Obstacle
class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    updateObstacle() {
        //Randomise x value for obstacles
        const minX = 10;
        const maxX = 450;
        const randomX = Math.floor(Math.random()*(maxX-minX) - minX);

        //Create 2 images => dog for collecting/ banana to avoid
        const image1 = new Image();
        image1.src = './dog.jpg';
        const image2 = new Image();
        image2.src = "./banana.jpg";
        
        //Create new obstacles every 100 frames
        if(frame % 100 === 0) {
            obstacle.push({
                x:randomX,
                y: 0,
                width: 30,
                height: 30
            });
        }
        frame++;

        obstacles.forEach(obstacle => {
            obstacle.x -= 3;
            context.drawImage(this.image, randomX, 0, 30, 30);
        })

        requestAnimationFrame(updateObstacle);
    }
}


