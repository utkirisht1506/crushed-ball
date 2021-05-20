
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , ground , rightwall , leftwall , basewall ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball (50,650,10)
	ground = new Bricks(400 , 690 , 800 ,10);
	basewall = new Bricks (600,670 , 200 , 10);
	leftwall = new Bricks(500 , 620 , 10 , 100);
	rightwall = new Bricks(700 , 620 , 10 , 100);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  basewall.display();
  leftwall.display();
  rightwall.display();

 
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   
	   Body.applyForce(ball.Body, ball.Body.position, {
		   x:20 , y:-10})
	   
	   
	 }
         }
         

