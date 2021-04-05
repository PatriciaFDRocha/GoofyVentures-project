
let currentGame;
let currentGoofy;
let animationOverId = requestAnimationFrame(updateCanvas);

//const backgroundMusic = document.getElementById('background-music');
const goofyScream = document.getElementById('yahahui');
//let stopTime = 0;

document.getElementById('start-button').onclick = () => {
    document.getElementById('adventures').style.display = 'block';
    document.getElementById('game-over').style.display = 'none';

    startGame();
}
document.getElementById('stop-button').onclick = () => {
    document.getElementById('game-over').style.display = "block";
    document.getElementById('adventures').style.display = "none";
    goofyScream.play();
    gameOver();
}

document.addEventListener('keydown', (e) => {
    currentGame.goofy.moveGoofy(e.keyCode);
});

function startGame (){
    currentGame = new Game();
    currentGoofy = new Goofy();
    currentGame.goofy = currentGoofy;
    currentGame.goofy.draw();

    updateCanvas();
}


function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.goofy.draw();

    //Randomise x value for obstacles falling from top
    const minX = 10;
    const maxX = 460;
    const randomX = Math.floor(Math.random()*(maxX-minX) - minX);

    //Create new obstacles every 100 frames
    if(currentGame.frames % 100 === 0) {

        const types = ['dog', 'banana'];
        let type = types[Math.floor(Math.random() * types.length)];//randomise different images

        let newObstacle = new Obstacle(randomX, 0, 35, 35, type);
        currentGame.obstacles.push(newObstacle);
    }
    currentGame.frames++;

    //Drawing image for each obstacle
    currentGame.obstacles.forEach((obstacle, index) => {
        obstacle.y += 2;
        obstacle.draw();

        //Reduce score with bananas//Increase score with doggys
        if (obstacleCollision(obstacle)) {
            if(obstacle.type === 'banana'){
                currentGame.score -= 5;
                gameOver();
            } else {
                currentGame.score++;
            }
            document.getElementById('score').innerHTML = currentGame.score;
            currentGame.obstacles.splice(index, 1);
        }
    });
    if (!currentGame.gameOver) {
        requestAnimationFrame(updateCanvas);
    }
}

function gameOver() {
    if(currentGame.score <= 0) {
        console.log('game over');
        currentGame.gameOver = true;
        
        document.getElementById('game-over').style.display = "block";
        document.getElementById('adventures').style.display = "none";

        alert("You almost got it!! Remember that you'll never lose when saving a dog's life 😉");
        goofyScream.play();

        cancelAnimationFrame(animationOverId);

    }
}




