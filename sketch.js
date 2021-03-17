
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200, 450, 20)
	box1 = new Dustbin(630, 200, 15, 80)
	box2 = new Dustbin(655, 200, 100, 15)
	box3 = new Dustbin(680, 200, 15, 80)
	ground = new Ground(width/2, 670, width, 10)
	
	ground.shapeColor = color(0, 0, 0)
	box1.shapeColor = color(255, 0, 0)
	box2.shapeColor = color(255, 0, 0)
	box3.shapeColor = color(255, 0, 0)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  paper1.display(); 
  box1.display(); 
  box2.display(); 
  box3.display(); 
  ground.display(); 

  
};

function keyPressed(){
  if (keyCode === UP_ARROW){

	  Matter.Body.applyForce(paper1.body, paper1.body.position,{x:55, y:-55});
    
  }
}

