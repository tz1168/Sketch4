let faces=[];

function setup(){
  createCanvas(800,800);
  for (let i = 0; i < 500; i++){
    faces[i] = new Smile(random(0.1, 5), random(800), 0, random(10,50),random(1,5));
  }
}

function draw(){
  background(51);

  for (let i = 0; i < faces.length; i++){
   let wind=createVector(random(-2,1), 0.5);
   let gravity=createVector(1.8, 1);
    faces[i].applyForce(wind);
    faces[i].applyForce(gravity);
    faces[i].update();
    faces[i].display();
    faces[i].checkEdges();
  }
}