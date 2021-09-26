const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
  stoneimage = loadImage("images/rock.png");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  engine = new Ground(400,200,50,50);
  boggie1 = new Ground(300,200,50,50);
  boggie2 = new Ground(200,200,50,50);
  boggie3 = new Ground(100,200,50,50);

  chain1 = new SlingShot(engine.body,boggie1.body);
  chain2 = new SlingShot(boggie1.body,boggie2.body);
  chain3 = new SlingShot(boggie2.body,boggie3.body);

  Matter.Body.setStatic(ground.body,{isStatic:true})
  stone = Matter.Bodies.rectangle(800,200,100,100);
  Matter.World.add(myWorld,stone);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  engine.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  
  chain1.show();
  chain2.show();
  chain3.show();

  image(stoneimage,stone.position.x,stone.position.y,100,100)

 
  }
  function keyPressed(){
    if (keyCode===RIGHT_ARROW)
    {
      Matter.Body.applyForce(engine.body,engine.body.position,{x:0.5,y:0})
    }
  }

  
