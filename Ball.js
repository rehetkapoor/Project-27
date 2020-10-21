class Ball{
  constructor(x, y) {

  var options={
    density: 1.2,
    isStatic: false
  }

      this.body = Bodies.circle(x, y, 25, options);
      World.add(world, this.body);
    }
    display(){
      push();
      ellipseMode(RADIUS);
      fill("white")
      translate(this.body.position.x, this.body.position.y)
      ellipse(0, 0, 25, 25);
      pop();
    }
}
