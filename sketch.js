var bullet , wall ;

var speed , weight ; 
var thickness ;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,312);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,40,20);
  bullet.shapeColor=("green");
  bullet.velocityX=speed;
  

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("white");
  
  
}

function draw() {
  background(0); 
//to find x and y location on canvas
 text(mouseX+","+mouseY,mouseX,mouseY);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     
    if(damage>10){
      wall.shapeColor=("red");
    }
    if(damage<10){
      wall.shapeColor=("blue");
    }
  
    }
  

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
  return false;
  }
}












