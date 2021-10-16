const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg,bunnyImg,fruitImg;
var bunny;
var button;

function preload (){

  bg = loadImage("background.png");
  fruitImg = loadImage("melon.png");
  bunnyImg = loadImage("Rabbit-01.png");
}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  bunny = createSprite(260,620,10,10);
  bunny.addImage("bunny",bunnyImg);
  bunny.scale = 0.2

  button = createImg("cut_button.png");
  button.position(220,30);
  button.size(50,50); 
  button.mouseClicked(drop);

/* btn =createButton()
  btn.position(x,y);
  btn.mousePressed(callback function)
 */
  
  rectMode(CENTER);

  imageMode(CENTER);

  ellipseMode(RADIUS);
  textSize(50)
  
  
}

function draw() 
{
  background(51);
  image(bg,width/2,height/2,width,height);
  rope.show();
  image(fruitImg,fruit.position.x,fruit.position.y,60,60);
  Engine.update(engine);
  ground.show();

 
drawSprites();   
}

function drop(){
 // break the rope and detach the fruit
 rope.break();
 fruit_con.detach();
 fruit_con = null;
}