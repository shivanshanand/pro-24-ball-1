class wall{
    constructor(x,y,b,c){
        this.body=Bodies.rectangle(x,y,b,c, {isStatic:true});
        World.add(world,this.body);

        this.width=b
        this.height=c
    }

    show(){
        rectMode(CENTER);
        rect(x,y,this.width,this.height);
    }
  }