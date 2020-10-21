
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Ground(400,100,250,20)

	ball1= new Ball(150,350)
	ball2= new Ball(200,350)
	ball3= new Ball(250,350)
	ball4= new Ball(300,350)
	ball5= new Ball(350,350)

	rope1= new Rope(ball1.body, roof.body, -100, 0);
	rope2= new Rope(ball2.body, roof.body, -50,0);
	rope3= new Rope(ball3.body, roof.body, 0,0);
	rope4= new Rope(ball4.body, roof.body, 50,0);
	rope5= new Rope(ball5.body, roof.body, 100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(180);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}

function keyPressed(){
  
  if (keyCode===UP_ARROW){
  Matter.Body.applyForce(ball5.body, ball5.body.position, {x:100, y:100})
  }
}
