
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400);
  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("monkey_running");
  monkey.scale=0.1;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground");
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  ground.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
   
  
   invisibleground = createSprite(200,378,400,1);
  invisibleground.visible = false;
  
score=0;
  
   bananas=new Group();

 obstacles=new Group();

  
}


function draw() {
background(1111);

spawnbananas();
spawnObstacles();
  
  monkey.collide(invisibleground);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space")&&monkey.y>300){
    
   monkey.velocityY=-12; 
    
  }
  
  if(ground.x<0){
   
     ground.x=ground.width/2;
    
  }
  
  if(obstacles.isTouching(monkey)){
    
   monkey.scale=0.1; 
    
  }
  
    if(bananas.isTouching(monkey)){
    
   score=score+2; 
    bananas.destroyEach();
  }
  
  if(obstacles.isTouching(monkey)){
    
   score=0; 
    obstacles.destroyEach();
  }
   
  
  
drawSprites();
  
  stroke("white");
  textSize(24);
  fill("white");
  text("score :"+score,300,50);
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(460,120,40,10);
    banana.y = Math.round(random(200,260));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -6;
    banana.lifetime = 134;
    
    
       
    bananas.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(460,350,10,40);
    obstacle.velocityX = -6;
    
    obstacle.addImage(obstacleImage)
    
        
    obstacle.scale = 0.19;
    obstacle.lifetime =  140;
    
    obstacles.add(obstacle);
  }

  
}






