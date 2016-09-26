int xPos = 300;
int yPos = 300;
int ySize = 50;
int xSize = 50;
int distance;
int tooClose = 150;
int runningSpeed = 5;

void setup(){
  background(255, 255, 255);
  size(600, 600);
}

void draw(){
  background(255,255, 255);
  distance = int(dist(mouseX, mouseY, xPos, yPos));
  
  if(distance < tooClose){
    println("RUN AWAY!!!");
    
    if(mouseX <= xPos){
      xPos = xPos + runningSpeed;
    }
    if(mouseX >= xPos){
      xPos = xPos - runningSpeed;
    }
    if(mouseY <= yPos){
      yPos = yPos + runningSpeed;
    }
    if(mouseY >= yPos){
      yPos = yPos - runningSpeed;
    }
  }
  else{
    println("better...");
  }
  ellipse(xPos, yPos, xSize, ySize);
  
}