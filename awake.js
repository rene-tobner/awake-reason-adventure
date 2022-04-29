"use strict";
let canvas;
let context;
let rectX = 0;
let rectY = 0;

window.onload = init;
window.addEventListener("keydown", function (e){
    // console.log(e)
    if (e.key === 'ArrowUp')
        rectY -= 10;
});

function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}


function gameLoop(timeStamp){
    draw();
    update();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw(){

    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100);
}

function update() {
    rectX += 1;
    rectY += 1;
}
