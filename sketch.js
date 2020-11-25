
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,wall1;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new paper(100,50,20);
	wall1=new wall(700,340,200,20);
}


function draw() {
  background(0);
  Engine.update(engine);

  paper1.display();
  wall1.show();
 
}



