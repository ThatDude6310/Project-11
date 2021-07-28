var ground , groundImage
var jaxon , jaxon_running
var w1
var w2



function preload(){
  //pre-load images

    groundImage= loadImage("path.png")

    jaxon_running= loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,800);

    ground= createSprite(190,50,50,50)
    ground.scale=1.5
    ground.velocityY=4
    ground.addAnimation("moving", groundImage)

    jaxon= createSprite (200,700,20,20)
    jaxon.addAnimation("running", jaxon_running)
    jaxon.scale = 0.1

    w1= createSprite(0,400,50,800)
    w2= createSprite(400,400,50,800)
  
    w1.visible=false
    w2.visible=false
  }

function draw() {
    background(0);

    if (ground.y>800){
        ground.y= height/2
    }

    jaxon.collide(w1)
    jaxon.collide(w2)
    jaxon.x= mouseX 

    drawSprites();
}
