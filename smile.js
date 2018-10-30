class Smile{
  constructor(m, x, y, r,e){
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius= r;
    this.eye=e;
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update(){
    if (this.position.x < width/2){
      this.velocity.add(this.acceleration); //going right
      this.position.add(this.velocity);
      this.acceleration.mult(0.5);
    }
    if (this.position.x >= width/2){
      this.velocity.add(this.acceleration);  //going left
      this.position.add(this.velocity);
      this.acceleration.mult(0.5);
      this.position.x=this.position.x-1;
    }
  }

  display(){
    stroke(0);
    strokeWeight(2);
    fill(random(255),random(255),random(255),500);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);//face,circle
    fill(random(50));
    ellipse(this.position.x-5,this.position.y,this.eye,this.eye);//left eye
    ellipse(this.position.x+5,this.position.y,this.eye,this.eye); //right eye
    line(this.position.x-this.eye, this.position.y+2*this.eye,this.position.x+this.eye, this.position.y+2*this.eye)//mouth
  }

  checkEdges(){
    if (this.position.x > width){
      this.position.x= width;
      this.velocity.x*= -2;
    } 
    else if (this.position.x < 0){
      this.velocity.x*= -1;
      this.position.x= 0;
    }
    if (this.position.y > height){
      this.velocity.y*= -1;
      this.position.y= height;
    }
  }

}