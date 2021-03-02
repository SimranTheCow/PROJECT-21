
 var wall,thickness;
var bullet,speed, weight;


function setup() {
 createCanvas (1600,400);

 speed=random(50,100);
 weight=random(500, 2000);

  bullet = createSprite(100, 200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  thickness=random(20,100);

  wall = createSprite(1100, 200, thickness, height/2);
  wall.shapeColor = color (80,80,80);
 
}

function draw() {
  background(0);  
   
if (wall.x-bullet.x< (bullet.width+wall.width)/2)

 {
   bullet.velocityX=0;
  damage=0.5 * weight* speed* speed/(thickness*thickness*thickness);

if (damage>10)
{
wall.shapeColor="red";
}
if (damage<10)
{
wall.shapeColor="green";
}

}

  drawSprites();

}
 
