const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, plinko, divisions1,divisions2,divisions3,divisions4,divisions5,particles;
function preload() {

}


function setup() {

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var divisionHeight=300;

    ground = new Ground(600,height,1200,20);
    plinko = new Plinko(600,height,1200,20);
    divisions1 = new Divisions(600,200,50,20);
    divisions2 = new Divisions(600,250,50,20);
    divisions3 = new Divisions(600,300,50,20);
    divisions4 = new Divisions(600,350,50,20);
    divisions5 = new Divisions(600,400,50,20);

    var particle = [];
    var plinko = [];
    var divisions = [];
}

function draw() {

  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(plinko.body, plinko.body.position, 
		  {x:15, y: -15})
  }
}