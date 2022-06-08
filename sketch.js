
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao, bola, parede1, parede2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var retangulos = {isStatic: true};
	chao = Bodies.rectangle(400, 690, 800, 10, retangulos);
	World.add(world, chao);

	parede1 = Bodies.rectangle(20, 630, 10, 100, retangulos);
	World.add(world, parede1);

	parede2 = Bodies.rectangle(130, 630, 10, 100, retangulos);
	World.add(world, parede2);

	bola = Bodies.circle(750, 650, 35);
	World.add(world, bola);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

rect(chao.position.x, chao.position.y, 800, 10);
rect(parede1.position.x, parede1.position.y, 5, 100);
rect(parede2.position.x, parede2.position.y, 5, 100);
ellipse(bola.position.x, bola.position.y, 50);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bola, bola.position, {x: -0.1, y: -0.3});
	}
}



