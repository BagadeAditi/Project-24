const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1,rubber2,rubber3;
var stone1;
var iron1

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    hammer = new Hammer(10,100);
    rubber1= new Rubber(520,500,10);
    rubber2= new Rubber(540,500,10);
    rubber3= new Rubber(560,500,10);
    rubber4= new Rubber(580,500,10);
    rubber5= new Rubber(600,500,10);
    rubber6= new Rubber(620,500,10);
    rubber7= new Rubber(640,500,10);
    rubber8= new Rubber(660,500,10);
    rubber9= new Rubber(680,500,10);
    rubber10= new Rubber(700,500,10);
    rubber11= new Rubber(750,500,50);

    stone1=new Stone(200,500,50,40);
    iron1=new Iron(300,500,70,70)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    rubber11.display();

    stone1.display();
    iron1.display();
}