class Cue{
    constructor(x,y,radius){
       var options = {
           isStatic: true
       }
     this.body = Bodies.circle(x,y, radius, options)
     this.x = x;
     this.y = y;
     this.radius = radius;
     //this.radius = r;
     World.add(world,this.body)
    }
 
    display(){
     var paperpos = this.body.position;
     push();
     translate(paperpos.x,paperpos.y);
     rectMode(CENTER)
     fill(355);
     //ellipseMode(CENTER);
     ellipse(0,0,this.radius,this.radius);
     if(keyIsDown(38)){
        this.body.isStatic = false;
        this.body.velocityY = -5;
    } else{
        this.body.isStatic = true;
        this.body.velocityY = 0;
    }
     pop();
    }
}