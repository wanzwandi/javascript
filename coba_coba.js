function firework( sx, sy, tx, ty){
  this.x = sx;
  this.y = sy;
  this.sx = sx;
  this.sy = sy;
  this.tx = tx;
  this.ty = ty;
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty)
  this.distanceTraveled = 0;
}
firework()
