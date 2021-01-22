
var ground1;
var ground2;
var ground3;
var aper;
var gr;
var launch;
var dustbin,dustbinimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
 function preload(){
	 dustbinimg=loadImage("dustbingreen.png");
	

 }
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	
	world = engine.world;
	
	gr = Bodies.rectangle(600, 550, 1200000, 10 , {isStatic:true} );
	stroke(99,69,312);
	fill(0);
	World.add(world, gr);

	dustbin=createSprite(950, 470, 10,10);
	dustbin.addImage(dustbinimg)
	dustbin.scale=0.5
World.add(world,dustbin);




	
	ground2=new round(890,475,20,160);
	

	aper=new Paper(200,500,70);

	ground1=new round(950,540,120,20);

	launch= new launcher(aper.body,{x:200,y:400})
	
ground3=new round(1010,475,20,160);

	Engine.run(engine);

	
	
}


function draw() {
  
  background(12,93,239);
  ground1.display();
  ground2.display();
  ground3.display();
  aper.display();
  launch.display();
  Engine.update(engine);
  rectMode(CENTER);
  rect(gr.position.x,gr.position.y,1200,10);
//   rectMode(CENTER);
//   rect(dustbin.position.x,dustbin.position.y,120,10);
 // keyPressed();
 drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition (aper.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
 launch.fly();
 
 }


