let snow = []; //array that holds the snowflakes
let gravity; //gravity global variable
let angle; //angle global variable
let t; //time global variable

function setup() {
    const canvas = createCanvas(270, 860); //canvas is 1/4 scale of tower, set to canvas variable
    canvas.parent('sketchxx') //set canvas parent for html handoff
    gravity = createVector(0, .001); //define gravity, limited by 
    frameRate(60);
}

function draw(){
    background(100); //gray so we can see the snow
    t = frameCount / 60; //set the time
    //Make Snow Flakes!!
    snow.push(new Snowflake());
    for(flake of snow) {
        flake.applyForce(gravity);
        flake.update(t);
        flake.render(); 
    } 
    //remove snow when it leaves the screen
    for(let i = snow.length-1; i>=0; i--) {
        if (snow[i].offScreenY()){
            snow.splice(i,1);
        }
        //if snow hits side of screen, reverse x velocity
        if (snow[i].offScreenX()) {
            snow[i].vel.x = -1 * snow[i].vel.x;
        }
    }

    //Window Masks
    fill(0);
    noStroke();
    //regular window sizes
        for (let j = 62; j < 633; j+=79) {
            for(let i = 66; i < 175; i+= 54) {
                 rect(i, j, 30, 43);
            }
    }
    //circular tops
    for(let i = 81; i < 200; i+= 54) {
        circle(i, 62, 30);
   }

   //Long rectangles on bottom
   for (let j = 692; j < 880; j+=101) {
        for(let i = 66; i < 175; i+= 54) {
        rect(i, j, 30, 68);
         }
    }
}