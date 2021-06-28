const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var  roofObject;

//create 5 ropesand 5 bobs
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	
	
	
	
	
	
	
	
	
	
	
	Engine.run(engine);
	
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		//apply force on one bob
	
		  }
	}
function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

	
	
	
	
	
	
	
	

  
 
}


