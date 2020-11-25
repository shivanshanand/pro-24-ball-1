class paper{
    constructor(x,y,radius){
        var op={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,op);
        this.radius= radius;
        World.add(world,this.body);

    }

    display(){
        fill("pink")
        rectMode(CENTER);
        rect(0,0,this.radius);
    }



















}