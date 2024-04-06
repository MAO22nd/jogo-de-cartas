var gameState = "start"
var bg, bgImg;
var som;
var rei1,rei2,torre,frente1,frente2,frente3,verso1,verso2,verso3;
var rei1Imag,rei2Img,torreImg,frente1Img,frente2Img,frente3Img,verso1Img,verso2Img,verso3Img;

function preload(){
//bgImg = loadImage("");
rei1Img = loadImage("rei1.png");
rei2Img = loadImage("rei2.png");
torreImg = loadImage("torre2.png");
torreImg = loadImage("torre1.png");
frente1Img = loadImage("frente1.png");
frente2Img = loadImage("frente2.png")
frente3Img = loadImage("frente3.png");
verso1Img = loadImage("verso1.png");
verso2Img = loadImage("verso2.png");
verso3Img = loadImage("verso3.png");


//cartasImg = loadImage("");
}





function setup() {
  bg = createCanvas(windowWidth, windowHeight);
 // bg.addImage(bgImg,0,0);
 rei1 = createSprite(50,550,50,50);
 rei1.addImage(rei1Img);
 rei1.scale=0.09;

}

function draw() {
  background("#3D8D3D");
  if(gameState == "start")
  {
    fill ('white');
    text("Bem-vindo(a)!",windowWidth/2,windowHeight/2)
  }
verso1 = createSprite(150,550,60,100);
verso1.addImage(verso1Img);
verso1.scale=0.5;
verso2 = createSprite(300,550,60,100);
verso2.addImage(verso1Img);
verso2.scale=0.5;
verso3 = createSprite(450,550,60,100);
verso3.addImage(verso1Img);
verso3.scale=0.5;

  drawSprites();
}
