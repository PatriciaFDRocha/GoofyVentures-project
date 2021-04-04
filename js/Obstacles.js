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

//Create 2 images => dog for collecting/ banana to avoid
    const dogImg = new Image();
    dogImg.src = "../images/dog.jpg";

    const bananaImg = new Image();
    bananaImg.src = "../images/banana.jpg";

    //Create variable for random image to fall
    const randomImgArr = ["../images/dog.jpg", "../images/banana.jpg"];
    const randomImg = Math.floor(Math.random()*randomImgArr.length);
    

    //Create class Obstacle
class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    updateObstacle() {
        //Randomise x value for obstacles falling from top
        const minX = 10;
        const maxX = 460;
        const randomX = Math.floor(Math.random()*(maxX-minX) - minX);

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

        //Drawing image for each obstacle
        currentGame.obstacle.forEach((obstacle) => {
            obstacle.x -= 3;
            drawImage(randomImg, randomX, 0, 30, 30);

            //Game Over if collision is true and score back to 0
            if (obstacleCollision(obstacle)) {
                currentGame.gameOver = true;

                currentGame.score = 0;
                document.getElementById('score').innerHTML = 0;

                currentGame.obstacles = [];
                
                alert("You almost got it!! Just remember that you never lose when you save a dog's life 😉");
            
            }
        });

        requestAnimationFrame(updateObstacle);
    }
}


