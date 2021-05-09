//Game States
var PLAY=1;
var END=0;
var gameState=1;
var fruit
var monster
var fru1, fru2, fru3, fru4
var mon1, mon2
var knife, endz;
var knifeImage, fruit1, fruit2, fruit3, fruit4, alien1, alien2, a, b;


function preload(){
  
  knifeImage = loadImage("knife.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  alien1 = loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  gameover = loadImage("gameover.png")
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);
  a = 100
  b = 600
  score=0;
  //create fruit and monster Group variable here
  fru1 = createGroup()
  fru2 = createGroup()
  fru3 = createGroup()
  fru4 = createGroup()
  mon1 = createGroup()
  mon2 = createGroup()
}

function draw() {
  if (frameCount%200===0 && a > 0 && b > 0){
    a = a + 10
    b = b - 25
  }
  if(gameState===PLAY){
    background(20, 170, 250)
    //calling fruit and monster function
    fruitz()
    monsterz()
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   if (knife.isTouching(fru1)){
     score = score + 1
     fru1.destroyEach()
   }
    if (knife.isTouching(fru2)){
     score = score + 2
     fru2.destroyEach()
   }
    if (knife.isTouching(fru3)){
     score = score + 3
     fru3.destroyEach()
   }
    if (knife.isTouching(fru4)){
     score = score + 4
     fru4.destroyEach()
   }
    if (knife.isTouching(mon1)){
     gameState = END
   }
    if (knife.isTouching(mon2)){
     gameState = END
   }
    // Go to end state if knife touching enemy
  if (gameState === END){
    endz = createSprite(300, 300, 1, 1)
    endz.addImage(gameover)
    endz.scale = 2.5
    background("black")
    fru1.destroyEach()
    fru2.destroyEach()
    fru3.destroyEach()
    fru4.destroyEach()
    mon1.destroyEach()
    mon2.destroyEach()
    knife.destroy()
  }
  }
  console.log(frameCount)
  drawSprites();
  
  //Display score
  stroke("cyan")
  strokeWeight(4)
  textSize(25);
  text("SCORE: "+ score,250,50);
  stroke("red")
  strokeWeight(2)
  textSize(15);
  text("Monster = X", 515, 520)
  stroke("lime")
  text("Orange = 1", 515, 535)
  text("Apple = 2", 515, 550)
  text("Pear = 3", 515, 565)
  text("Banana = 4", 515, 580)
}
function fruitz(){
  if (frameCount%Math.round(random(1, a)) === 0){
    fruit = createSprite(Math.round(random(1, 600)), Math.round(random(1, 600)), 1, 1)
    var r = Math.round(random(1,4))
    if (r === 1){
      fruit.addImage(fruit1)
      fru1.add(fruit)
    }
    if (r === 2){
      fruit.addImage(fruit2)
      fru2.add(fruit)
    }
    if (r === 3){
      fruit.addImage(fruit3)
      fru3.add(fruit)
    }
    if (r === 4){
      fruit.addImage(fruit4)
      fru4.add(fruit)
    }
    fruit.scale = 0.2
    fruit.velocityX = -7
    fruit.lifetime = 100
  }
}

function monsterz(){
 if (frameCount%Math.round(random(1, 500)) === 0){
    monster = createSprite(Math.round(random(1, b)), Math.round(random(1, 600)), 1, 1)
    var r = Math.round(random(1,2))
    if (r === 1){
      monster.addImage(alien1)
      mon1.add(monster)
    }
    if (r === 2){
      monster.addImage(alien2)
      mon2.add(monster)
    }
    monster.velocityX = -7
    monster.lifetime = 100
  } 
}