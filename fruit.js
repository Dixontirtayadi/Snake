function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = Math.floor(Math.random() * rows) * scale;
        this.y = Math.floor(Math.random() * cols) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x,this.y,scale,scale);
    }

    /*
    this.checkCollision = function(tail) {
        for (let i = 0; i < tail.length; i++) {
            if (tail[i].x === this.x && tail[i].y === this.y) {
                return false;
            }
        }
        return true;
    }
    */

}