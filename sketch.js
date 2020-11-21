var bullet,wall;
var edge;
var weight,speed;
var damage;
var thickness;
function setup() {
  createCanvas(800,400);
  bullet = createSprite(50,200,150,15)
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))
  edge = createEdgeSprites()
  thickness=Math.round(random(22,83))
  wall = createSprite(500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background("Black");
  bullet.velocityX=speed  
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if(bullet.isTouching(wall)&&damage<=10){
    bullet.velocityX=0
    bullet.shapeColor="green"
  }
  if(bullet.isTouching(wall)&&damage>10){
    bullet.velocityX=0
    bullet.shapeColor="red"
  }
  bullet.collide(edge)
  drawSprites();
}

