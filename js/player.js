
class Goofy {
    constructor() {
        this.x = 4;
        this.y = 380;
        this.width = 90;
        this.height = 120;
        
    }
    draw() {
        const image = new Image();
        image.src = '../images/goofy_PNG22.png';
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
            case 32: 
                if (this.y < 450) {
                    this.y -= 50
            }
            break;
            }
    }
}