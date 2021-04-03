
let currentGame = new Game();
let currentGoofy = new Goofy();
let obstacle;

document.getElementById('start-button').onclick = () => {
    startGame();
}

document.addEventListener('keydown', (e) => {
    currentGame.goofy.moveGoofy(e.keyCode);
});

function startGame (){
    currentGoofy = new Goofy();
    //goofy.draw();
    currentGame.goofy = currentGoofy;
    currentGame.goofy.draw();
    updateObstacles()
    updateCanvas();
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.goofy.draw();
    requestAnimationFrame(updateCanvas);
}


