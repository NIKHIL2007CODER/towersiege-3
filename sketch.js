const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var bird; 
function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1365,627);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,1400,20);
    ground2 = new Ground(575,400,400,10);
    ground3 = new Ground(1080,300,200,10);

    ball = new Ball(200,300,30);
    
    //1st layer
    box1 = new Box(400,340,50,60);
    box2 = new Box(450,340,50,60);
    box3 = new Box(500,340,50,60);
    box4 = new Box(550,340,50,60);
    box5 = new Box(600,340,50,60);
    box6 = new Box(650,340,50,60);
    box7 = new Box(700,340,50,60);
    box8 = new Box(750,340,50,60);
    box9 = new Box(800,340,50,60);

    //second layer 
    box11 = new Box(425,280,50,60);
    box22 = new Box(475,280,50,60);
    box33 = new Box(525,280,50,60);
    box44 = new Box(575,280,50,60);
    box55 = new Box(625,280,50,60);
    box66 = new Box(675,280,50,60);
    box77 = new Box(725,280,50,60);

    //third layer 
    box111 = new Box(450,220,50,60);
    box222 = new Box(500,220,50,60);
    box333 = new Box(550,220,50,60);
    box444 = new Box(600,220,50,60);
    box555 = new Box(650,220,50,60);
    box666 = new Box(700,220,50,60);
 
    // fourth layer 
    box14 = new Box(525,170,50,60);
    box24 = new Box(575,170,50,60);
    box34 = new Box(625,170,50,60);





    // 1st layer 2 
    block1 = new Box(1000,240,50,60);
    block2 = new Box(1050,240,50,60);
    block3 = new Box(1100,240,50,60);
    block4 = new Box(1150,240,50,60);

    // 2nd layer 2 
    block5 = new Box(1025,180,50,60);
    block6 = new Box(1075,180,50,60);
    block7 = new Box(1125,180,50,60);

    // 3 rd layer 2
    block8 = new Box(1050,120,50,60);
    block9  =  new Box(1100,120,50,60);
    
    // fourth layer 2 
    block10 = new Box(1075,60,50,60);


    Slingshot = new Slingshot(ball.body,{x:150,y:300});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    ground2.display();
    ground3.display();

   ball.display()
   
    Slingshot.display(); 

    fill("aqua");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
  
    fill(255,105,188);
    box11.display();
    box22.display();
    box33.display();
    box44.display();
    box55.display();
    box66.display();
    box77.display();
    
    fill(0,150,255);
    box111.display();
    box222.display();
    box333.display();
    box444.display();
    box555.display();
    box666.display();

    fill("pink");
    box14.display();
    box24.display();
    box34.display();

    fill(173,255,47);
    block1.display();
    block2.display();
    block3.display();
    block4.display();

    fill(222,23,56);
    block5.display();
    block6.display();
    block7.display();

    fill(255,0,255);
    block8.display();
    block9.display();

    fill(255,255,0);
    block10.display()
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
Slingshot.fly()
}
function keyPressed(){
    if(keyCode === 32)
    Slingshot.attach(ball.body);
    Matter.Body.setPosition(ball.body,{x:200,y:300});
    
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(13,11);
    
    if(hour>=06 && hour<=18){
        bg = "background11g.jpg";
    }
    else{
        bg = "background18.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
