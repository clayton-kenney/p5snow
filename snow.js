function getRandomSize() {
    while (true) {
    let r1 = random(1);
    let r2 = random(1);
    if(r2 > r1) {
        return r1 * 9 + 0.5;
    }
  }

}
class Snowflake {

    constructor() {
        let x = random(width);
        let y = random(-100, -10)
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();
        this.r = getRandomSize();
    }
    
    applyForce(force){
        //faux parallax effect
        let f = force.copy();
        f.mult(this.r);
        this.acc.add(f);
    }
    randomize() {
        

    }
    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.r * .3);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    render() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y)
    }
    //define if flake is offscreen if y pos i bigger than height + snow width
    offScreen() {
        return (this.pos.y > height + this.r);
    }

}