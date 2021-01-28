
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce = 300;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,30);
	mango8=new mango(1140,150,30);
	mango9=new mango(1100,230,30);
	mango10=new mango(1200,200,30);
	mango11=new mango(1120,50,30);
	mango12=new mango(900,160,30)  

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(235,420,30);
	launcherObject=new Launcher(stoneObj.body,{x:235,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(25);
  text("Press Space to get a second chance to play !!",50,50)
 image(boy ,200,340,200,300);

 
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  groundObject.display();
  launcherObject.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed()
{
	if (keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango)
{
	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);
	detectollision(stoneObj,mango6);
	detectollision(stoneObj,mango7);
	detectollision(stoneObj,mango8);
	detectollision(stoneObj,mango9);
	detectollision(stoneObj,mango10);
	detectollision(stoneObj,mango11);
	detectollision(stoneObj,mango12);
	

	


	mangoBodyPosition=lmango.body.setPosition
	stoneBodyPosition=lstone.body.setPosition

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}