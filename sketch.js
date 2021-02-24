var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car<(car.width+wall.width)/2){
  car.shapeColor = color(225,0,0);
  }


if(deformation<180 && deformation>100){
car.shapeColor = color(225,230,0);
     }
     if (deformation<100) {
       car.shapeColor = color(0,225,0)
     }
     if (deformation>180) {
       car.shapeColor = color(225,0,0);
     }  
}