//generates random that skews smaller by comapring random numbers. add one to ensure flakes aren't too small
function getRandomSize() {
    while (true) {
    let r1 = random(1);
    let r2 = random(1);
    if(r2 > r1) {
        return r1 * 9 + 0.75;
    }
  }

}
//snowflake constructor
class Snowflake {

    constructor() {
        let x = random(width);  //starting point of flake based on width
        let y = random(-100, -10)  //generate flakes offscreen so they are falling 
        let xv = random(-1, 1); //assign random horizontal vector on creation
        this.pos = createVector(x, y);
        this.vel = createVector(xv, 0);
        this.acc = createVector();
        this.r = getRandomSize();  //snowflake size based on rando algo
    }
    
    applyForce(force){
        //faux parallax effect
        let f = force.copy();
        f.mult(this.r); //gravity acts more on 'bigger' aka heavier particles
        this.acc.add(f); //gravity force to accelerator 
    }
    randomize() {
        

    }
    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.r * .2);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    render() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y)
    }
    //define if flake is offscreen if pos x/y is bigger than height/widhth + snow width
    offScreenY() {
        return (this.pos.y > height + this.r);
    }
    offScreenX() {
        return (this.pos.x > width - (this.r) || this.pos.x < 0); //left size or right side of screen
        ;
    }
    rect1() {
        return(this.pos.x)
    }

}