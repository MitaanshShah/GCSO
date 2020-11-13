var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50 , 200, 50, 50);
  wall = createSprite(1500, 200, 60, 200);
  speed = random(55, 90)
  weight = random(400, 1500)
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = color(80, 80, 80)
  car.velocityX = speed

  deformation = 0.5*weight*speed*speed/22500

  if(car.isTouching(wall) && deformation<100){
    car.shapeColor = 'green'
    car.velocityX = 0
  }
  if(car.isTouching(wall) && deformation >100 && deformation <180){
    car.shapeColor = 'yellow'
    car.velocityX = 0
  }
  if(car.isTouching(wall) && deformation >180){
    car.shapeColor = 'red'
    car.velocityX = 0
  }

  drawSprites();
}
