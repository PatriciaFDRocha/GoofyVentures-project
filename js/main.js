
let currentGame;
let currentGoofy;
let animationOverId;

const backgroundMusic = document.getElementById('background-music');
const goofyScream = document.getElementById('yahahui');
const winMusic = document.getElementById('win-game-music');

document.getElementById('start-button').onclick = () => {
    document.getElementById('adventures').style.display = 'block';
    document.getElementById('game-over').style.display = 'none';

    startGame();
}
document.getElementById('stop-button').onclick = () => {
    gameOver();
}

document.addEventListener('keydown', (e) => {
    e.preventDefault()
    currentGame.goofy.moveGoofy(e.keyCode);
});
document.addEventListener('keyup', (e) => {
    e.preventDefault()
   currentGame.goofy.keyUpGoofy(e.keyCode);
});

function startGame (){
    currentGame = new Game();
    currentGoofy = new Goofy();
    currentGame.goofy = currentGoofy;

    winMusic.pause();
    document.getElementById('win-game').style.display = 'none';

    backgroundMusic.play();

    img.onload = updateCanvas;// start calling updateCanvas once the image is loaded
    updateCanvas();
}


function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.move();

    context.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    currentGame.goofy.draw();

    //jump
    currentGame.goofy.hitBottom();
    currentGoofy.vy = currentGoofy.vy + (gravity - currentGoofy.userPull);
    currentGoofy.y += currentGoofy.vy;

    currentGame.goofy.hitCeiling();


    //Randomise x value for obstacles falling from top
    const minX = 10;
    const maxX = 600;
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
                if (currentGame.score <= 0) {
                    gameOver();
                }
            } else {
                currentGame.obstacles.splice(index, 1);
                currentGame.score++;
                if (currentGame.score === 1)  {
                    winGame();
                }
            }
            document.getElementById('score').innerHTML = currentGame.score;
        }
        if (obstacle.y > canvas.height) {
            currentGame.obstacles.splice(index, 1);
        }
    });
    if (!currentGame.gameOver && !currentGame.winGame) {
        animationOverId = requestAnimationFrame(updateCanvas);
    }
}

function gameOver() {
    currentGame.score = 0;
    currentGame.gameOver = true;
    backgroundMusic.pause();

    document.getElementById('game-over').style.display = "block";
    document.getElementById('adventures').style.display = "none";
    document.getElementById('win-game').style.display = 'none';

    alert("You almost got it!! Remember that you'll never lose when saving a dog's life 😉");
    goofyScream.play();
    cancelAnimationFrame(animationOverId);
}

function winGame() {  
    currentGame.winGame = true;
    backgroundMusic.pause();

    document.getElementById('win-game').style.display = 'block';
    document.getElementById('adventures').style.display = "none";
    document.getElementById('game-over').style.display = "none";

    alert('You won! Congratulations!');
    winMusic.play();

    cancelAnimationFrame(animationOverId);
}
