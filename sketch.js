
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball ;
var ground;
var leftSide;
var rightSide ;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
 
	ground = new Ground(width/2,670,width,15)
	leftSide = new Ground(1000,600,15,120)
	rightSide = new Ground(1200,600,15,120)


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	fill(1770);


}



ellipseMode(RADIUS);


function draw() {
	rectMode(CENTER);

  background(0);
 
  ellipse(ball.position.x,ball.position.y,20);
  
 


  drawSprites();
  Engine.update(engine);
ground.show() 
leftSide.show()  
rightSide.show()
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	}

	}



