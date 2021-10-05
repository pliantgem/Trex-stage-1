//create variables
var trex, trex_running;
var ground, ground_image;
var edges;


//load images, animations and sounds (game assets)
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image = loadImage("ground2.png");

}


//runs only once
function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("trex_running", trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();

  //make a ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage("ground1", ground_image);
  ground.x = ground.width/2;
  ground.velocityX = -2;

  
}


//repeats itself
function draw(){
  background("lightblue");

  console.log(ground.x);
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }

  if(keyDown("space") || keyDown("up")) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;


  trex.collide(ground);
  
  drawSprites();
}
