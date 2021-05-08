var tom,tom1,tom2,tom3;
var jerry,jerry1,jerry2,jerry3;
var backgroundImg;

function preload() {
    //load the images here
  tom1=loadAnimation("images/cat1.png");
  tom2=loadAnimation("images/cat2.png","images/cat3.png");
  tom3=loadAnimation("images/cat4.png");
  jerry1=loadAnimation("images/mouse1.png");
  jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
  jerry3=loadAnimation("images/mouse4.png");
  backgroundImg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom=createSprite(870,600,50,50);
  tom.addAnimation("tomSitting",tom1);
  tom.scale=0.2;
  
  jerry=createSprite(200,600,50,80);
  jerry.addAnimation("jerrySitting",jerry1);
  jerry.scale=0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.x=300;
        tom.addAnimation("tomstand",tom3);
        tom.changeAnimation("tomstand",tom3);
        jerry.addAnimation("jerryStand",jerry3);
        jerry.changeAnimation("jerryStand",jerry3);
    }
    movetom();
    drawSprites();
}


function movetom(){

  //For moving and changing animation write code here

  if(keyDown("left")){

    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tom2);
    tom.changeAnimation("tomRunning",tom2);
    jerry.addAnimation("jerryRunning",jerry2);
    jerry.changeAnimation("jerryRunning",jerry2);
  }

}
