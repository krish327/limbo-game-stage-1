var back
var backimg
var limbo,limboImg 
var ground 
var spider1
var spiderImg
var monster
var monsterImg
function preload(){
backimg = loadImage("images/image.png") 
limboImg=loadAnimation("images/limbo1.png","images/limbo2.png","images/limbo3.png","images/limbo4.png")
spiderImg=loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png")
monsterImg=loadAnimation("images/monster 1.png","images/monster 2.png","images/monster 3.png","images/monster 4.png","images/monster 5.png","images/monster 6.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  back=createSprite(width/2,height/2,width,height)
  back.addImage(backimg)
  back.scale=4
  ground=createSprite(width/2,height-20,width,40)
limbo=createSprite(width-1200,height-100,30,30)
limbo.setCollider("rectangle",0,155,50,70)
limbo.addAnimation("limbo",limboImg)
limbo.scale=0.5
ground.shapeColor= "black"
limbo.shapeColor="black"

}

function draw() {
  background(255,255,255);  
 back.velocityX=-3
 if(back.x<0){
   back.x=width/2

 }
 if(keyDown("SPACE")){
   limbo.velocityY=-12

   
 }
 limbo.velocityY=limbo.velocityY+1
 limbo.collide(ground)
 monster1()
  drawSprites();
  spider()
}
function spider (){
  if (frameCount%200===0){


  spider1=createSprite(width-100,height-75,10,10)
  spider1.addAnimation("spider1",spiderImg)
  spider1.velocityX=-6
  spider1.scale=1.5
 
}}
function monster1 (){
  if (frameCount%200===0){


  monster=createSprite(width-100,height-400,10,10)
  monster.addAnimation("monster",monsterImg)
 monster.velocityX=-6
 monster.scale=1.5
 
}}