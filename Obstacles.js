const canvas = document.getElementById('adventures');
const context = canvas.getContext('2d');

let obstacles= [];

class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
/*
    drawObstacle() {       
        const image = new Image();
        image.src = './dog.jpg';
        context.drawImage(image, this.x, 0, 50, 50);
}*/

    //Create class Game
class Game {
    constructor() {
        this.player = {};
        this.obstacles = [];
        this.score = 0;
    }
}

    //Create top obstacles
    function updateObstacles() {
        obstacles.forEach((obstacle) => {
            obstacle.y -= 3;
            obstacle.update();
        });
        
        const minX = 20;
        const maxX = 450;
        const randomX = Math.floor(Math.random()*(maxX - minX) - minX);

        const obstacleTop = new Obstacle(
        randomX,
        0,
        50,
        50
        )
    } 
    obstacles.push(obstacleTop);