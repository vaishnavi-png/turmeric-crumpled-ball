const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper, ground, bin, sling;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper();
	ground= new Ground();
	bin= new Dustbin();
	sling = new Launcher(paper.body, {x:200, y:20});
	Engine.run(engine);
  
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  bin.display();
  sling.display();
}



