function enemyCollision({ x: PlayerX, y: PlayerY }, { x: EnemyX, y: EnemyY }) {
  //? Player's xy-coordinates and Enemiy's xy-coordinate lies in the same line.
  let SameX = Math.abs(PlayerX - EnemyX) < BoxSize;
  let SameY = Math.abs(PlayerY - EnemyY) < BoxSize;
  return SameX && SameY;
}
