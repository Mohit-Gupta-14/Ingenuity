// Global Scope
var bg, bgImage;
var mario, mario_running;
var ground;
var brickimg,brickGroup;
var coins,coinsGroup;
var count=0;
// Load Assets
function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  brickimg = loadImage("images/brick.png");
  mariodead=loadAnimation("images/dead.png");
    mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png"
  );
  coins = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png",
    "images/con6.png"
  );
  mush = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  tur = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  coinSound=loadSound("sounds/coinSound.mp3");
  jumpSound=loadSound("sounds/jump.mp3");
  dieSound=loadSound("sounds/dieSound.mp3");
}

// create basic Scaleton with their required credentials
function setup() {
  // Create Canvas
  createCanvas(1200, 650);

  // create Objects
  bg = createSprite(600, 300, 150, 50);
  mario = createSprite(200, 520, 150, 50);

  // Add pictures on Objects
  bg.addImage(bgImage);
  mario.addAnimation("running", mario_running);
  mario.addAnimation("dead", mariodead);

  // Scale Objects
  bg.scale = 0.5;
  mario.scale = 0.2;

  // create Ground
  ground = createSprite(200, 580, 400, 10);
  coinsGroup=new Group(); 
  brickGroup=new Group(); 
  enemyGroup=new Group();
}

// Used to redraw the Objects on the canvas
function draw() {
  // Make background move and repeate
  bg.velocityX = -5;
  if (bg.x < 250) bg.x =  bg.width / 4;

  // mario Fly
  if (keyDown("space")){ 
    mario.velocityY = -10;
    jumpSound.play();
  }

  // add Gravity
  mario.velocityY = mario.velocityY + 0.5;

  // Call generate bricks
      genbrick();
      gencoins();
      genenemy();

        if(enemyGroup.isTouching(mario)){
        ground.y=620;
        mario.velocityY=0;
        mario.changeAnimation("dead",mariodead);
        mario.scale=0.3;
        dieSound.play();
        bg.velocityX=0;
        enemyGroup.setVelocityXEach(0);
        brickGroup.setVelocityXEach(0);
        coinsGroup.setVelocityXEach(0);
        enemyGroup.setLifetimeEach(-1);
        brickGroup.setLifetimeEach(-1);
        coinsGroup.setLifetimeEach(-1);
      }

      for(var i=0;i<brickGroup.length;i++)
      {
        var temp=brickGroup.get(i);
        if(mario.isTouching(temp)){
        mario.collide(temp);
      }
      }
       for(var i=0;i<coinsGroup.length;i++)
       {
         var temp=coinsGroup.get(i);
         if(mario.isTouching(temp)){
          count++;
         temp.destroy();
         coinSound.play();
       }
       }
      if (mario.x < 200) {
        mario.x = 200;
      }
      if (mario.y < 50) {
        mario.y = 50;
      }
  // mario stuck on ground
  mario.collide(ground);
  ground.visible = false;
  // Redraw Objects
  drawSprites();

  //coin Display

  textSize(25);
  fill('red');
  text("Coin Collected :" + count, 700,30);
}
function genbrick(){
  if(frameCount%80==0)
  {

  var brick=createSprite(1200,100,40,10);
  brick.y=random(100,450);
  brick.scale=0.7;
  brick.addImage(brickimg);
  brick.velocityX=-5;
  brick.lifetime=250;
  brickGroup.add(brick);
  }
}
function gencoins(){
   if(frameCount%70==0)
   {
   var coin=createSprite(1200,100,40,10);
   coin.y=random(100,450);
   coin.scale=0.1;
   coin.addAnimation( "run",coins);
   coin.velocityX=-5;
   coin.lifetime=250;
   coinsGroup.add(coin);
   }
}
function genenemy(){
  if(frameCount%90==0)
   {
   var enemy=createSprite(1200,550,40,10);
   enemy.scale=0.1;
   var en=Math.round(random(1,2));
   console.log(en);
   if(en==1)
   {
   enemy.addAnimation( "enem",mush);
   }
   if(en==2)
   {
    enemy.addAnimation("enem1",tur);
   }
   enemy.velocityX=-5;
   enemy.lifetime=250;
    enemyGroup.add(enemy);
   }

}