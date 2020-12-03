var frontcover, frontcoverimg;
var Background1,Background1img;
var button1,button1img
var button2,button2img;
var gamestate="scene0";

function preload(){
  
 Background1img=loadImage("Pics/backgroundimg1.jpeg") 
 button1img=loadImage("Pics/Play.png")
 button2img=loadImage("Pics/next.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  

  
  
  button2=createSprite(windowWidth-80,windowHeight-80)
  button2.addImage(button2img)
  button2.scale=0.25
}

function draw() {
  background("green"); 
  
  if(gamestate==="scene0"){

    button1=createSprite(windowWidth-80,windowHeight-80)
    button1.addImage(button1img)
    button1.scale=0.25

    if(mousePressedOver(button1)){
      console.log("Goint to scene 1");

      gamestate="scene1"
    }
    
  }
  if(gamestate==="scene1"){

    Background1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background1.addImage(Background1img)
    Background1.scale=1.5

    if(mousePressedOver(button2)){
      console.log("Goint to scene 2");

      gamestate="scene2"
    }
  }
  




  drawSprites();
}