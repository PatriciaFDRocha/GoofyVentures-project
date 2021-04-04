
let currentGame = new Game();
let currentGoofy = new Goofy();


document.getElementById('start-button').onclick = () => {
    startGame();
}

document.addEventListener('keydown', (e) => {
    currentGame.goofy.moveGoofy(e.keyCode);
});

function startGame (){
    currentGoofy = new Goofy();
    currentGame.goofy = currentGoofy;
    currentGame.goofy.draw();

    updateObstacle();
    updateCanvas();
}



function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.goofy.draw();

    ////Increasing score with dog image
    if (dogImg.y > canvas.height) {
        currentGame.score++;
        document.getElementById('score').innerHTML = currentGame.score;
        currentGame.obstacle.splice(index, 1);
    }

    requestAnimationFrame(updateCanvas);
}




