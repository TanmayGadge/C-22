const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(400, 390, 800, 20, {isStatic:true});
  World.add(world, ground);

  ball = Bodies.circle(400, 200, 20, {restitution:0.7});
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);  
}

