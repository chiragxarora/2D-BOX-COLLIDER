let paintbox = document.getElementById("box");
let pen = paintbox.getContext("2d");

class Box {
    constructor(size,color){
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }

}

let score = 0;

class Player extends Box {
    constructor(speedx,speedy){
        super(50,"blue");
        this.y = 200;
        this.speedx = speedx;
        this.speedy = speedy;
    }

    move() {
        this.x += this.speedx;
        this.y += this.speedy;
        if(this.x >= 670){
            score += 1;
            pen.clearRect(this.x,this.y,this.size,this.size);
            this.x = 0;
            this.y = 200;
            this.speedx = 0;
            this.speedy = 4;
        }
        if(this.y + this.size >= 450){
            this.speedy = -1 * (Math.abs(this.speedy)) ;
        }
        if(this.y <= 0){
            this.speedy = Math.abs(this.speedy) ;
        }
        
    }

}

class Enemy extends Box {
    constructor(speed){
        super(50,"red");
        this.speed = speed;
    }

    move () {
        
        this.y += this.speed;
        if(this.y + this.size >= 450){
            this.speed = -1 * (Math.abs(this.speed)) ;
        }
        if(this.y <= 0){
            this.speed = Math.abs(this.speed) ;
        }
        
    }
    
    
}

let p = new Player(0,4);
let e1 = new Enemy(10);
let e2 = new Enemy(8);
let e3 = new Enemy(6);
let e4 = new Enemy(8);
let e5 = new Enemy(10);
e1.x = 120;
e2.x = 240;
e3.x = 360;
e4.x = 480;
e5.x = 600;

function drawBox (box) {
    pen.fillStyle = box.color;
    pen.fillRect(box.x,box.y,box.size,box.size);
}
   

drawBox(p);
drawBox(e1);
drawBox(e2);
drawBox(e3);
drawBox(e4);
drawBox(e5);
paintbox.addEventListener('mouseup',()=> {
    p.speedx = 4;
    p.speedy = 0;
});
paintbox.addEventListener('mousedown', () => {
    p.speedx = 0;
    p.speedy = 4;
});

function isCollided (p, e){
    let x1 = p.x, x2 = p.x + p.size, y1 = e.x, y2 = e.x + e.size;
    let X1 = p.y, X2 = p.y + p.size, Y1 = e.y, Y2 = e.y + e.size;
    if(((x1 >= y1 && x1 <= y2) ||(x2 >= y1 && x2 <= y2) ||(y1 >= x1 && y1 <= x2) ||(y2 >= x1 && y2 <= x2)) && ((X1 >= Y1 && X1 <= Y2) ||(X2 >= Y1 && X2 <= Y2) ||(Y1 >= X1 && Y1 <= X2) ||(Y2 >= X1 && Y2 <= X2))){
        return true;
    }
    return false;
}
let gameOn = true;
function gameLoop () {
    if(!gameOn){
        return;
    }
    pen.clearRect(0,0,800,450);
    e1.move();
    e2.move();
    e3.move();
    e4.move();
    e5.move();
    p.move();
    if(isCollided(p,e1)||isCollided(p,e2)||isCollided(p,e3)||isCollided(p,e4)||isCollided(p,e5)){
        gameOn = false;
        window.alert("Not a Gamer if you're score is less than "+(score+1)+" :-(  Your Score: "+score);
    }
    drawBox(p);
    drawBox(e1);
    drawBox(e2);
    drawBox(e3);
    drawBox(e4);
    drawBox(e5);
    window.requestAnimationFrame(gameLoop);
}

gameLoop();