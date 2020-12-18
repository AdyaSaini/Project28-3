const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1200,10);

	stone = new Stone(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");

  //stone.display();
  ground.display();

  drawSprites();
}



