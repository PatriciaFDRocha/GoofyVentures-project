const canvas = document.getElementById('adventures');
const context = canvas.getContext('2d');

let frame = 0;

//Create class Game
class Game {
    constructor() {
        this.goofy = {};
        this.obstacle = [];
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
    
    //can only collide with banana image
function obstacleCollision(obstacle) {
    if(obstacle === bananaImg){
        currentGame.score--;
        if(currentGame.score < 0) {//
            return !((currentGame.goofy.x > bananaImg.x + bananaImg.width) ||
     (currentGame.goofy.x + currentGame.goofy.width < bananaImg.x) ||
     (currentGame.goofy.y > bananaImg.y + bananaImg.height));
        }


    }//will increase points 
    else if (dogImg.y > canvas.height) {
            currentGame.score++;
            document.getElementById('score').innerHTML = currentGame.score;
            currentGame.obstacle.splice(index, 1);
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

    //?Remove updateObstacle from inside class -> changing scope to stop being undefined -> didn't work
    //change function calling place -> didn't work
    
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
        if (obstacleCollision(obstacle.bananaImg)) {
            currentGame.gameOver = true;

            currentGame.score = 0;
            document.getElementById('score').innerHTML = 0;

            currentGame.obstacles = [];
            
            //Will try to change to different page
            //?Create function that activates -> gameOver() and will show page
            alert("You almost got it!! Just remember that you never lose when you save a dog's life 😉");
            }
        });
    //requestAnimationFrame(updateObstacle);//update animation
    }
}
console.log(updateObstacle());

