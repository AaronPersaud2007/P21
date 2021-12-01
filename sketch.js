const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;


var ball;



function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.3,y:0})
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:1.2})
  }
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width/2,height-10,width,20);
  right = new Ground(1700,height-70,20,100);
  left = new Ground(1800,height-70,20,100);

  


 var ball_option = {
   restitution : 0.3,
   friction:0,
   density:1.2,
   isStatic:false

 }
  ball = Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  keyPressed();
}

