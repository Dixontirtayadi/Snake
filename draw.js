const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 15;
const rows = canvas.height / scale;
const cols = canvas.width / scale;
var snake;
var difficulty;


var start = document.getElementById("start");
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

start.style.display = "none";


//buttonSetup = function() {
    easy.onclick = function() {
        easy.style.display = "none";
        medium.style.display = "none";
        hard.style.display = "none";
        difficulty = 100;    
        document.getElementById("text").innerHTML = "";
        start.style.display = "initial";
    }
    
    medium.onclick = function() {
        easy.style.display = "none";
        medium.style.display = "none";
        hard.style.display = "none";
        difficulty = 75;
        start.style.display = "initial";
        document.getElementById("text").innerHTML = "";
    }
    
    hard.onclick = function() {
        easy.style.display = "none";
        medium.style.display = "none";
        hard.style.display = "none";
        difficulty = 50;    
        start.style.display = "initial";
        document.getElementById("text").innerHTML = "";
    }
//}

start.onclick = function() {
    start.style.display = "none";
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    let intervalId = window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        
        if (snake.eat(fruit)) {
            fruit.pickLocation();
            /*
            while (fruit.checkCollision()) {
                fruit.pickLocation(snake.getTail());
            }
            */
        }

        if (snake.checkCollision()) {
            window.clearInterval(intervalId);
            start.style.display = "initial";
//            easy.style.display = "initial";
//            medium.style.display = "initial";
//            hard.style.display = "initial";
        }

        document.querySelector('.score').innerText = "Score = " + (snake.total-1);

    }, difficulty);
}

window.addEventListener('keydown', ( (evt) => {
    const direction = evt.key;
    snake.changeDirection(direction);
}))

