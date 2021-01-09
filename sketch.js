
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rectangle1,rectangle2,rectangle3;

function preload()
{
	
}

function setup() {
	createCanvas(1400,600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	paper=new Paper(150,300,50);
	ground=new Ground(600,580,1800,10);

	rectangle1 = new Dustbin(1000, 570, 200, 20);
	rectangle2 = new Dustbin(900, 470, 20, 190);
	rectangle3 = new Dustbin(1100, 470, 20, 190);
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paper.display();
  ground.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:125, y: -130})
	}
  }
