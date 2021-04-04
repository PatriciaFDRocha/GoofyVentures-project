
class Goofy {
    constructor() {
        this.x = 5;
        this.y = 260;
        this.width = 80;
        this.height = 110;
        
    }
    draw() {
        const image = new Image();
        image.src = './goofy_PNG22.png';
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    moveGoofy(keyCode) {
        console.log('MoveGoofy');
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 20) {
                    this.x -= 10;
            }
            break;
            case 39: 
                if (this.x < 450) {
                    this.x += 10
            }
            break;
            }
    }
}