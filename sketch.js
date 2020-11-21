const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
var ground = new Ground(400,400,800,20)

}

function draw() {
  background(255,255,255);  

ground.display ();

  drawSprites();
}