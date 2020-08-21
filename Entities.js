class Box {
  constructor(color) {
    this.size = 50;
    this.sizey = this.size;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.speedx = 0;
    this.speedy = 8;
  }

  move() {
    this.wallCollision();
    this.x += this.speedx;
    this.y += this.speedy;
  }

  wallCollision() {
    //? Checks if Block is Colliding with any Walls
    //? if true, reverse the direction (multiply speed with -1)
    if (this.x + 2 <= 0 || this.x + this.size >= SizeX - 1) this.speedx = -1 * this.speedx;
    if (this.y + 2 <= 0 || this.y + this.size >= SizeY - 1) this.speedy = -1 * this.speedy;
  }
}

class Player extends Box {
  constructor() {
    super("blue");
  }
}

class Enemy extends Box {
  constructor(Factor = 0) {
    super("red");
    this.x = (Factor + 1) * 120;
    this.speedy -= 7;
    this.speedy += Factor;
    console.table(this);
  }
}
