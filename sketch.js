function setup() {
  createCanvas(800,400);
  wall1 = createSprite(780,50,20,90);
  wall2 = createSprite(780,300,20,90);
 // wall3 = createSprite(780,310,20,90);
  bullet1 = createSprite(40,50,30,20);
  bullet1.shapeColor = color(255,255,255);
  bullet2 = createSprite(40,300,30,20);
  bullet2.shapeColor = color(255,255,255);
  //bullet3 = createSprite(40,300,20,30);
 // bullet3.shapeColor = color(255,255,255);

 bullet1.speed = random(223,321);
 bullet2.speed = random(223,321);
// bullet3.speed = random(223,321);

  bullet1.weight = random(30,52);
  bullet2.weight = random(30,52);
 // bullet3.weight = random(30,52);

  bullet1.velocityX = bullet1.speed;
  bullet2.velocityX = bullet2.speed;
  //bullet3.velocityX = bullet3.speed; 

  wall1.thickness = random(22,83);
  wall2.thickness = random(22,83);
  //wall3.thickness = random(22,83);

  bullet1.damage = 0.5*bullet1.weight*bullet1.speed*bullet1.speed/(wall1.thickness*wall1.thickness*wall1.thickness);
  bullet2.damage = 0.5*bullet2.weight*bullet2.speed*bullet2.speed/(wall2.thickness*wall2.thickness*wall2.thickness);
 // bullet3.damage = 0.5*bullet3.weight*bullet3.speed*bullet3.speed/(wall3.thickness*wall3.thickness*wall3.thickness);
  
 }

var wall,thickness;
var bullet,speed,weight;
var damage;

function draw() {
  background(0,0,0); 
  
  if (bullet1.collide(wall1)) {

  if (bullet1.damage <= 10){
    wall1.shapeColor = color(0,255,0);
  }

  /*if(car1.deformation > 100 && car1.deformation <= 180){
    car1.shapeColor = color(230,230,0);
  }*/

  if(bullet1.damage > 10){
    wall1.shapeColor = color(255,0,0);
  }
}

  if(bullet2.collide(wall2)){

  if (bullet2.damage <= 10){
    wall2.shapeColor = color(0,255,0);
  }

 /* if(car2.deformation > 100 && car2.deformation <= 180){
    car2.shapeColor = color(230,230,0);
  }*/

  if(bullet2.damage > 10){
    wall2.shapeColor = color(255,0,0);
  }
}

  /*if(car3.collide(wall3)){

  if (car3.deformation <= 100){
    car3.shapeColor = color(0,255,0);
  }

  if(car3.deformation > 100 && car3.deformation <= 180){
    car3.shapeColor = color(230,230,0);
  }

  if(car3.deformation > 180){
    car3.shapeColor = color(255,0,0);
  }
}*/

  drawSprites();
}