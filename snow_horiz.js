//generates random that skews smaller by comapring random numbers. add one to ensure flakes aren't too small
function getRandomSize() {
    while (true) {
    let r1 = random(1);
    let r2 = random(1);
    if(r2 > r1) {
        return r1 * 8 + 1;
    }
  }

}
//snowflake constructor
class Snowflake {
    
    constructor() {
        let x = random(width);  //starting point of flake based on width
        let y = random(-100, -10)  //generate flakes offscreen so they are falling 
        let xv = random(-1, 1); //assign random horizontal vector on creation
        this.pos = createVector(x, y); //position vector
        this.vel = createVector(xv, 0); //initial velocity vector
        this.acc = createVector(); //acceleration vector
        this.r = getRandomSize();  //snowflake size based on above rando algo
        this.radius = sqrt(random(pow(width / 2, 2)));
        this.initialangle = random(0, 2 * PI); //generate random starting angle between 0 & 2PI
        
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
        this.vel.limit(this.r * .2); //gravity limit
        this.pos.add(this.vel);
        this.acc.mult(0);

        // x position follows a circle falling
        let w = 0.1; // angular speed
        let angle = w * t + this.initialangle;
        this.pos.x = width / 2 + this.radius * sin(angle);
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