var block;
var sky;
var skyImg;
function preload(){
  skyImg.loadImage(sky.png);
}

function setup() {
    createCanvas(400,400);
    block = createSprite(250,300,20,20);
    sky = createSprite(0,400);
    sky.addImage(skyImg);
    sky.velocityX = +6;
    sky.x = width/2;
    sky.scale = 0.2;
}

function draw() {
    block.mousex = World.mouseX
    if(sky.x<0){
       sky.x = sky.width/2;
  }
  background("white");
  drawSprites();
}