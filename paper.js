class Paper{
    constructor(){
        var opt={
            isStatic:false,
            friction:0.3,
            density:1.2

        }
        this.body=Bodies.circle(100,200,20,opt);
        World.add(world,this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("white")
        ellipse(0,0,30,30);
        pop();
    }
}