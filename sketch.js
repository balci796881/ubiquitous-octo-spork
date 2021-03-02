
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperobject

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobject = new paper(100,100,100,100)
	if(keyDown("space")) {
	paperobject.velocityX = 12	
	paperobject.velocityY = -12
	  }
     paperobject.velocityX=paperobject.velocityX-0.8
	 paperobject.velocityY=paperobject.velocityY+0.8
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 paperobject.display();
  groundObject.display();
  dustbinObj.display();

}

