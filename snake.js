function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 1;
    this.tail = [];

    this.getTail = function() {
        return this.tail;
    }

    this.draw = function() {
        ctx.fillStyle = "white";
            for (let i = 0; i < this.tail.length ; i++) {
                ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
            }
        ctx.fillRect(this.x,this.y,scale,scale);
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total - 1] = {x : this.x, y:this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x >= canvas.width) {
            this.x = 0;
            return true;
        } else if (this.y >= canvas.height) {
            this.y = 0;
            return true;
        } else if (this.x < 0) {
            this.x = canvas.width;
            return true;
        } else if (this.y < 0) {
            this.y = canvas.height;
            return true;
        }

        return false;
    }

    this.changeDirection = function(direction) {
        if(direction === "ArrowDown") {
            this.xSpeed = 0;
            this.ySpeed = scale;
        } else if (direction === "ArrowUp") {
            this.xSpeed = 0;
            this.ySpeed = -scale;
        } else if (direction === "ArrowLeft") {
            this.xSpeed = -scale;
            this.ySpeed = 0;
        } else if (direction === "ArrowRight") {
            this.xSpeed = scale;
            this.ySpeed = 0;
        }
    }

    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }

    this.checkCollision = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.tail[i].x === this.x && this.tail[i].y === this.y) {
                //this.total = 0;
                //this.tail = [];
                return true;
            }
        }
        return false;
    }


}