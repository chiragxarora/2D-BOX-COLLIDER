let paintbox = document.getElementById("box");
let pen = paintbox.getContext("2d");
let score = 0;
let SizeY = 400;
let SizeX = 800;
let BoxSize = 50;
let gameOn = true;

let player = new Player();
let Enemies = [...Array(5).keys()].map((e) => new Enemy(e));

function drawBox({ x, y, size, sizey, color }) {
  pen.fillStyle = color;
  pen.fillRect(x, y, size, sizey);
}

function resetGame() {
  //? Restart Game after Victory oe Loss;
  //? Reset Values to Initial
  player.x = 0;
  player.y = 0;
  player.speedx = 0;
  player.speedy = 4;
  Enemies.forEach((enemy) => (enemy.y = 0));
  gameOn = true;
}

function victory() {
  if (player.x >= SizeX - player.size) {
    score += 1;
    alert(`Victory!! Score is Now ${score}`);
    resetGame();
  }
}
function gameLoop() {
  if (!gameOn) {
    return;
  }
  pen.clearRect(0, 0, SizeX, SizeY);
  Enemies.forEach((enemy) => enemy.move());
  player.move();

  if (Enemies.filter((enemy) => enemyCollision(player, enemy)).length) {
    gameOn = false;
    //? Cheeky Eh?
    window.alert(
      "Not a Gamer if you're score is less than " + (score + 1) + " :-(  Your Score: " + score
    );
    resetGame();
  }
  victory();
  drawBox(player);
  Enemies.forEach((enemy) => drawBox(enemy));
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
