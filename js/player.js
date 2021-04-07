let gravity = 0.5;

class Goofy {
    constructor() {
        this.x = 4;
        this.y = 380;
        this.width = 90;
        this.height = 120;
        this.vx = 0;
        this.vy = 2;
        this.userPull= 0
        
    }
    draw() {
        const image = new Image();
        image.src = '../images/goofy_PNG22.png';
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    moveGoofy(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37: 
                if (this.x > 10) {
                    this.x -= 10;
            }
            break;
            case 39: 
                if (this.x < 550) {
                    this.x += 10
                }
            break;
            case 32: 
                this.userPull = 0.7;
            break;
        }
    }

    keyUpGoofy(keyCode) {
        switch(keyCode) {
            case 32: 
            this.userPull = 0;
            break;
        }
    }
    hitBottom() {
        let rockBottom = canvas.height - (this.height + 50);
        if (this.y > rockBottom) {
            this.y = rockBottom;
            this.vy = 0;
        }
    }

    hitCeiling() {
        if(this.y < 0) {
            this.y = this.height;
        }
   }
}