const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(130,200)

    ground1 = new Ground(620,350,210,20);
    ground2 = new Ground(1000,200, 150, 20);
    
    block1 = new Block(530,330,30,40);
    block2 = new Block(560,330,30,40);
    block3 = new Block(590,330,30,40);
    block4 = new Block(620,330,30,40);
    block5 = new Block(650,330,30,40);
    block6 = new Block(680,330,30,40);
    block7 = new Block(710,330,30,40);

    block8 = new Block(560,300,30,40); 
    block9 = new Block(590,300,30,40);
    block10 = new Block(620,300,30,40);
    block11 = new Block(650,300,30,40);
    block12 = new Block(680,300,30,40);
    
    block13 = new Block(590,270,30,40);
    block14 = new Block(620,270,30,40);
    block15 = new Block(650,270,30,40);
    
    block16 = new Block(620,240,30,40);
    
    block17 = new Block(940,180,30,40);
    block18 = new Block(970,180,30,40);
    block19 = new Block(1000,180,30,40);
    block20 = new Block(1030,180,30,40);
    block21 = new Block(1060,180,30,40);

    block22 = new Block(970,150,30,40);
    block23 = new Block(1000,150,30,40);
    block24 = new Block(1030,150,30,40);

    block25 = new Block(1000,120,30,40);
    
    slingshot = new SlingShot(polygon.body,{x:130, y:200});
}

function draw(){
    background(0);

    push();
    fill("white");
    textSize(30);
    text ("SCORE : "+score,750,40);
    pop();

    Engine.update(engine);
    strokeWeight(4);
    
    ground1.display();
    ground2.display();
    
   
    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();

    fill("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    
    fill("green");
    block13.display();
    block14.display();
    block15.display();

    block22.display();
    block23.display();
    block24.display();

    block13.score();
    block14.score();
    block15.score();

    block22.score();
    block23.score();
    block24.score();

    fill("yellow")
    block16.display();

    block25.display();

    block16.score();

    block25.score();

    polygon.display();
    
    slingshot.display();
    push();
    stroke("red");    
    text (mouseX+","+mouseY,mouseX,mouseY);
    pop();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}