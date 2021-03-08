var canvas, backgroundImage;

var player, npc;
var messages;

function preload(){
  
}

function setup(){
  canvas = createCanvas(1300, 600);
  
  player = createSprite(200, 300);
  npc = createSprite(1200, 300);

  //fill("cyan");
  //messages = createSprite(650, 100, 800, 100);

}


function draw(){
 if(keyDown("space")){
  textSize(34); 
  text("hello", 650, 100);
  
  
  }
 drawSprites();
}
