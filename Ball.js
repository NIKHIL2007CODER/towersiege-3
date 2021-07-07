class Ball {
  constructor(x,y,r) {
    var options = {
        isStatic: false,
        restituton:0.3,
        density:0.4,
        stiffness:0.004
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill(255,255,0);
    noStroke();
    ellipse(pos.x, pos.y,55);
    pop();
  }
};