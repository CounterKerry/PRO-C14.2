var bow, bow_image;
var arrow, arrow_image;
var balloon;
var redBalloon_image, pinkBalloon_image, greenBalloon_image, blueBalloon_image;
var rand;

function preload() {
  bow_image = loadImage("bow0.png");
  arrow_image = loadImage("arrow0.png");
  redBalloon_image = loadImage("red_balloon0.png");
  pinkBalloon_image = loadImage("pink_balloon0.png");
  greenBalloon_image = loadImage("green_balloon0.png");
  blueBalloon_image = loadImage("blue_balloon0.png");
}

function setup() {
    createCanvas(400, 400);
  
  bow = createSprite(350, 200, 20, 70);
  bow.addImage("bow0.png", bow_image);
}

function draw() {
    background("white");
  
  bow.y = World.mouseY;
  
  if (keyDown("space")) {
    arrow = createSprite(0, 200, 10, 50);
    arrow.addImage("arrow", arrow_image);
    arrow.velocityX = -5;
    arrow.x = bow.x;
    arrow.y = bow.y;
    arrow.scale = 0.5
  }
  
  spawnBalloon();

  drawSprites();
}

function spawnBalloon() {
  if (frameCount%60 === 0) {

    balloon = createSprite(0, 200, 50, 50);
    balloon.velocityX = 5;
    balloon.y = Math.round(random(40, 360));

    var rand = Math.round(random(1, 4));

    switch(rand)
    {
      case 1: balloon.addImage("redBalloon_image", redBalloon_image);
      break;
      case 2: balloon.addImage("pinkBalloon_image", pinkBalloon_image);
      break;
      case 3: balloon.addImage("greenBalloon_image", greenBalloon_image);
      break;
      case 4: balloon.addImage("blueBalloon_image", blueBalloon_image);
      default:break;
    }
    
    balloon.scale = 0.3;
    balloon.lifetime = 80;
  }
}