
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var render, cue, tEdge, rEdge, bEdge, lEdge;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;
var pocket1, pocket2, pocket3, pocket4, pocket5, pocket6; 

function preload(){}

function setup() {
	createCanvas(400, 700);

	engine = Engine.create();
	world = engine.world;

	//table = new Table(350, 350, 350, 600)
	tEdge = new Edge(0, 0, 800, 10)
	bEdge = new Edge(0, 700, 800, 10)
	rEdge = new Edge(400, 0, 10, 1400)
	lEdge = new Edge(0, 0, 10, 1400)

	cue = new Cue(200,500,30)
	
	ball1 = new Ball(200, 100, 20)
	ball2 = new Ball2(173, 130, 20)
	ball3 = new Ball2(227, 130, 20)
	ball4 = new Ball3(150, 160, 20)
	ball5 = new Ball3(200, 160, 20)
	ball6 = new Ball3(250, 160, 20)
	ball7 = new Ball4(123, 190, 20)
	ball8 = new Ball4(173, 190, 20)
	ball9 = new Ball4(227, 190, 20)
	ball10 = new Ball4(277, 190, 20)

	pocket1 = new Pocket(0,0,50)
	pocket2 = new Pocket(400,0,50)
	pocket3 = new Pocket(0,350,50)
	pocket4 = new Pocket(400,350,50)
	pocket5 = new Pocket(0,700,50)
	pocket6 = new Pocket(400,700,50)

	render = Render.create({
		element: document.body,
		engine: engine, 
		options: {
		  width: 1300,
		  height: 900,
		  wireframes: false
		}
	  });

	  
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background('#1C6108');
  Engine.update(engine);

  
  
  //table.display();
  cue.display();

  tEdge.display();
  bEdge.display();
  rEdge.display();
  lEdge.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();

  pocket1.display();
  pocket2.display();
  pocket3.display();
  pocket4.display();
  pocket5.display();
  pocket6.display();
}



