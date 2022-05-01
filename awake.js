"use strict";

class GameObject
{
    constructor (window, context, x, y){
        this.window  = window;
        this.context = context;
        this.old_x = x;
        this.old_y = y;
        this.x = x;
        this.y = y;

        this.isColliding = false;
    }
}
class Hero extends GameObject
{
    constructor (window, context, x, y){
        super(window, context, x, y);

        // Set default width and height
        this.width = 10;
        this.height = 10;

        this.window.addEventListener("keydown", (e) => {
            this.old_x = this.x;
            this.old_y = this.y;
            if (e.key === 'ArrowUp')
                this.y -= 5;
            if (e.key === 'ArrowDown')
                this.y += 5;
            if (e.key === 'ArrowLeft')
                this.x -= 5;
            if (e.key === 'ArrowRight')
                this.x += 5;
        });
    }

    draw(){

        this.context.clearRect(this.old_x, this.old_y, this.width, this.height)

        this.context.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        // Move with set velocity
    }
}

class MapObject {

    constructor(x, y, obj) {
        this.x = x;
        this.y = y;
        this.obj = this.whatObj(obj);
        // oneOf: space | slash | backslash | X | pipe | minus | plus | pound
        // this.width ??
    }
    whatObj(char) {
        switch (char) {
        case ' ' : return 'space';
        case '/' : return 'slash';
        case '\\': return 'backslash';
        case 'X' : return 'X';
        case '|' : return 'pipe';
        case '-' : return 'minus';
        case '+' : return 'plus';
        case '#' : return 'pound';
        default:   return 'unknown';
        }
    }
}

class MapObjects {

    constructor(context, map) {
        this.context = context;
        this.objects = [];
        this.map = map;
    }

    draw(){
        var y = 10;
        this.context.font = 'normal normal 12px monospace';
        // let metrics = this.context.measureText("n") 7.22 ~ 8 = Weite
        // Höhe per style.lineHeight ? oder einfach 15 vom y-Wert?
        let width = 8
        this.map.split('\n').forEach(m => {

            let objRow = [];

            for (let i=0; i < m.length; i++) {

                let char = m.charAt(i);
                let x_positioning = 10*i;
                this.context.fillText(char, x_positioning , y, width);
                objRow.push(new MapObject(x_positioning, y, char));
            }
            this.objects.push(objRow);
            y += 15;
        })
    }
    clearObjXatRowY(arrayX, arrayY){
        let obj = this.objects[arrayY][arrayX];
        // this.context.clearRect(obj.x, obj.y, 8, 15)
        this.context.fillRect(obj.x, obj.y, 8, 15)
    }
}


let canvas;
let context;
let hero;
let mapObjects;
// let rectX = 0;
// let rectY = 0;

window.onload = init;


function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    hero = new Hero (window, context, 0,0);

    mapObjects = new MapObjects (context, map);
    mapObjects.draw();
    mapObjects.clearObjXatRowY(29,0);

    // let world = {hero};
    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}


function gameLoop(timeStamp){
    hero.draw();
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}



function update() {
    // rectX += 1;
    // rectY += 1;
}
