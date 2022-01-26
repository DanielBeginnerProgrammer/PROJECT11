var runner,runnerImg;
var street,streetImg;
var invisible_wall_right;
var invisible_wall_left;
var bomb,bombImg;
var coin,coinImg;

function preload(){
  //imagens pré-carregadas
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  streetImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //runner e rua
  street = createSprite(200,200);
  runner = createSprite(200,360);
  runner.addAnimation("running",runnerImg);
  street.addImage(streetImg);
  runner.scale = 0.05;
  street.velocityY = 20;
  //bomba e moeda
  bomb = createSprite();
  bomb.visible = false;
  coin = createSprite();
  coin.visible = false;
  coin.addImage(coinImg);
  coin.scale = 0.5;
  coinSpawner(110,coin);
}

function draw() {
 if (keyIsDown(RIGHT_ARROW)) {
    runner.position.x = runner.position.x + 50;
  }
  if (keyIsDown(LEFT_ARROW)) {
    runner.position.x = runner.position.x - 50;
  }
  if (runner.position.x > 300) {
    runner.position.x = 300;
  }
  if (runner.position.x <110) {
    runner.position.x = 110;
  }
  if (street.y > 400) {
    street.position.y = street.position.y - 400;
  }
  background("black"); 

  drawSprites();
}


function coinSpawner(x,coinType){ 
    coinType.visible = true;
    coinType.position.x = x;
    coinType.position.y = -100;
    coinType.velocityY = street.velocityY;

}