window.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 37: // ? LEFT
      player.speedx = -4;
      player.speedy = 0;
      return;
    case 38: // ? UP
      player.speedx = 0;
      player.speedy = -4;
      return;

    case 39: // ? RIGHT
      player.speedx = 4;
      player.speedy = 0;
      return;

    case 40: // ? DOWN
      player.speedx = 0;
      player.speedy = 4;
      return;

    default:
      return;
  }
});
