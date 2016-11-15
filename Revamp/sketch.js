var cloud
var buddy
var cubeArm
var opp
var adj

function setup() {

	createCanvas(600, 600);
	angleMode(DEGREES);

	var cubeArm = width/4;
	var opp = cubeArm * sin(30);
	var adj = opp / tan(30);



	cloud1 = new Cloud(-50, height/8, .05,
		loadImage("assets/Cloud1_Bg.png"));
	cloud2 = new Cloud(300, height/10, .05,
		loadImage("assets/Cloud2_Bg.png"));
	cloud3 = new Cloud(200, 2*height/3, .2,
		loadImage("assets/Cloud3_Bg.png"));
	cloud4 = new Cloud(-100, 4*height/5, .2,
		loadImage("assets/Cloud4_Bg.png"));

	buddy = new Ball();
}

function draw() {

	// background(242, 230, 241);
	background(232, 211, 227);

	// move background clouds
	cloud1.move();
	cloud1.make();
	cloud2.move();
	cloud2.make();

	makeCube();

	if (buddy.checkMove() === true){
		buddy.moveBall();
	}
	buddy.makeBall();

	// move foreground clouds
	cloud3.move();
	cloud3.make();
	cloud4.move();
	cloud4.make();

}

function makeCube() {
	cubeArm = width/4;
	opp = cubeArm * sin(30);
	adj = opp / tan(30);

	stroke(232, 211, 227);
	fill(233, 230, 242);

	for(i = 0; i < 3; i++){
		push()
			translate(width/2, height/2);
			rotate(120 * i);
			fill(233 + (10*i), 230 + (10*i), 242);
			quad(0, 0,
				0, cubeArm,
				adj, cubeArm - opp,
				adj, -opp);
		pop()
	}
}


function Cloud(myXPos, myYPos, myVel, myImg) {
	this.xPos = myXPos;
	this.yPos = myYPos;
	this.vel = myVel;
	this.img = myImg;

	this.move = function() {
		this.xPos += this.vel;
		if (this.xPos >= width){
			this.xPos = -300;
		}
	}

	this.make = function() {
		image(this.img, this.xPos, this.yPos);
	}
};


function Ball() {
	this.xPos = width/2;
	this.yPos = height/2 - (width/4 * sin(30));
	this.runSpeed = 1;
	this.dist;
	this.tooClose = 25;

	this.checkMove = function() {
		this.dist1 = dist(this.xPos + 2, this.yPos + 15,
			width/2, height/2);
		this.dist2 = dist(this.xPos + 2, this.yPos+15,
			width/2 + adj, height/2 - opp);
		this.dist3 = dist(this.xPos + 2, this.yPos+15,
			width/2, height/2 - 2*opp);
		this.dist4 = dist(this.xPos + 2, this.yPos+15,
			width/2 + adj, height/2 -opp);

		//find out the heights of each triangle

		// this.tri1 = cubeArm*this.dist1/2;
		// this.tri2 = cubeArm*this.dist2/2;
		// this.tri3 = cubeArm*this.dist3/2;
		// this.tri4 = cubeArm*this.dist4/2;

		this.total = this.tri1 + this.tri2 + this.tri3 + this.tri4;


		// if(this.total == cubeArm*(cubeArm*cos(30))){
			return true;
	}

	this.moveBall = function() {
		this.dist = int(dist(mouseX, mouseY, this.xPos, this.yPos));

		if(this.dist < this.tooClose){
			//if collective area of the four triangles
			//equal the area of the rhombus, proceed.

				if(mouseX <= this.xPos) {
					this.xPos += this.runSpeed;
				}
				if(mouseX >= this.xPos){
					this.xPos -= this.runSpeed;
				}
				if(mouseY <= this.yPos){
					this.yPos += this.runSpeed;
				}
				if(mouseY >= this.yPos){
					this.yPos -= this.runSpeed;
				}
		}
	}

	this.makeBall = function() {
 		noStroke();
 		fill(213, 210, 222);
 		ellipse(this.xPos + 2, this.yPos + 15, 10, 10);
 		fill(8, 122, 90);
		ellipse(this.xPos, this.yPos, 10, 10);
		fill(245);
		ellipse(this.xPos - 2, this.yPos - 2, 2, 2);
	}
}
