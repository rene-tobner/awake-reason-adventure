"use strict";
let canvas;
let context;
    
window.onload = init;

function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

let rectX = 0;
let rectY = 0;

function gameLoop(timeStamp){
    draw();
    update();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw(){
    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100);
}

function update() {
    rectX += 1;
    rectY += 1;
}
