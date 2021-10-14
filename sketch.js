const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var particles=[];
var plinkos=[];
var division=[];
var line;
var divisionsheight=225;

var gameState="PLAY";

var count = 0;
var score= 0;


function setup() {
  createCanvas(800,800);
  background(0,239,255);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(400,690,800,20);

  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75));
  }
  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 175));
  }
  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 275));
  }
  for(var j = 25; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 375));
  }
 
 

  for(var k = 0; k<=width;k = k + 80){
    division.push(new Division(k,height-divisionsheight/2,10,divisionsheight));
  }
 
}

function draw() {


  Engine.update(engine);
  background("purple");
  ground.display(); 


//  for(var i = 0; i < particles.length; i++){
 //   particles[i].display();
   //}
  for(var k = 0; k<division.length;k++) {
    division[k].display();
  }

  textSize(35);
  text("Score = "+score,20,40);
  fill(255)
  
  textSize(25);
  text("500",15,590);
  text("400",95,590);
  text("300",175,590);
  text("200",255,590);
  text("100",335,590);
  text("100",415,590);
  text("200",495,590);
  text("300",575,590);
  text("400",655,590);
  text("500",735,590);


  if(gameState=="END"){
    bckground("black");
    fill("red");
    textSize(100);
    text("Game Over",200,400);
  }

  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  }

  if(particles!=null){
    
    particles.display();

    if(particles.body.position.y >800){

      if(particles.body.position.x <15){
        score=score + 500;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <600 &&particles.body.position.x>301){
        score=score + 400;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <900 &&particles.body.position.x>601){
        score=score + 300;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <256 &&particles.body.position.x>176){
        score=score + 200;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <336 &&particles.body.position.x>256){
        score=score + 100;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <416 &&particles.body.position.x>336){
        score=score + 100;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <496 &&particles.body.position.x>416){
        score=score + 200;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <576 &&particles.body.position.x>496){
        score=score + 300;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <655 && particles.body.position.x>576){
        score=score + 400;
        particle=null;
        if(count>=5) gameState="END";
      }
      else if(particles.body.position.x <736 && particles.body.position.x>655){
        score=score + 500;
        particle=null;
        if(count>=5) gameState="END";
      }
     
    
      
    }
  }
}
function mousePressed(){
  if(gameState!="END"){
    count++;
    particle=new Particle(mouseX,50,10,10);

  }
}
