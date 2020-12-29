
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800,400);
  FoodGroup = new Group();
  obstacleGroup = new Group();
 monkey = createSprite(100,300,10,10); 
 monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,390,1000,50);
 // ground2 = createSprite(900,595,1000,50);
  ground.velocityX = -3;
 // ground2.velocityX = -3;
 // ground2.shapeColor = "blue";
}


function draw() {
 background("black");
  if (ground.x < 300){
    ground.x = ground.width/2;
  }
 
  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY = -10;
  }
monkey.velocityY = monkey.velocityY + 0.2;
  console.log(monkey.y);
  monkey.collide(ground);
  
 stroke("white");
 textSize(20);
 fill("white");
  survivalTime = Math.ceil(frameCount/frameRate())
 text("Survival Time "+ survivalTime,500,50);
  
  Drawbanana();
  obstacles();
 drawSprites(); 
}

function Drawbanana(){
  if(frameCount%80===0){
    banana=createSprite(825,random(120,200),10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 200;
    banana.scale = 0.1;
    FoodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(800,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.lifetime = 200;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
}
}



