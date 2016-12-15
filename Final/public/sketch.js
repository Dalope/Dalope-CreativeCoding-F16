var cameraPos;
var heroPos;
var cameraMoveSpeed;

var sky;
var hero;
var trees;
var objects;

var walkCycle = [];
var standing;
var currHero;
var counter;
var imageNum;


function preload(){
	walkCycle = [loadImage('assets/hero_walking1-01.png'),
	loadImage('assets/hero_walking2-01.png'),
	loadImage('assets/hero_walking3-01.png'),
	loadImage('assets/hero_walking4-01.png')]
	standing = loadImage('assets/hero_standing-01.png')
}

function setup(){
	createCanvas(1250, 750);

	cameraPos = 0;
	cameraMoveSpeed = 5;

	counter = 0;
	imageNum = 0;

	sky = new Background(cameraPos, cameraMoveSpeed,
		loadImage('assets/sky-01.png'));
	trees = new Midground(cameraPos, cameraMoveSpeed,
		loadImage('assets/trees-01.png'));
	objects = new Foreground(cameraPos, cameraMoveSpeed,
		loadImage('assets/text-01.png'));
	hero = new Character(cameraMoveSpeed);

}



function draw(){
	background(240);

	currHero = checkChar();

	heroPos = hero.move();

	if(heroPos >= width/4  ||  heroPos <= 0){
		sky.move();
		trees.move();
		cameraPos = objects.move();
	}

	sky.make();
	trees.make();
	objects.make();
	hero.make(currHero);



}

function checkChar(){
	if (keyIsDown(RIGHT_ARROW)){
		counter ++;
		if (counter > 10){
			if (imageNum == 0){
				imageNum = 1;
			}
			else {
				imageNum = 0;
			}
			counter = 0;
		}
		return walkCycle[imageNum];
	}

	else if(keyIsDown(LEFT_ARROW)){
		counter ++;
		if (counter > 10){
			if (imageNum == 2){
				imageNum = 3;
			}
			else {
				imageNum = 2;
			}
			counter = 0;
		}
		return walkCycle[imageNum];
	}

	else{
		return standing;
	}

}


function Background(startPos, moveSpeed, skyImage){
	this.pos = startPos;
	this.vel = moveSpeed/4;
	this.img = skyImage;

	this.move = function(){

		if (keyIsDown(RIGHT_ARROW)){
			this.pos -= this.vel;

		}
		if (keyIsDown(LEFT_ARROW)){
			this.pos += this.vel;
		}

		return this.pos;
	}

	this.make = function(){

		push();  

			translate(this.pos, 0);
			image(this.img, 0, 0);

		pop();

	}
};


function Midground(startPos, moveSpeed, treesImage){
	this.vel = moveSpeed/2;
	this.pos = startPos;
	this.img = treesImage;

	this.move = function(){

		if (keyIsDown(RIGHT_ARROW)){
			this.pos -= this.vel;

		}
		if (keyIsDown(LEFT_ARROW)){
			this.pos += this.vel;
		}

		return this.pos;
	}

	this.make = function(){

		push();  

			translate(this.pos, 0);
			image(this.img, 0,0);

		pop();

	}

};


function Foreground(startPos, moveSpeed, textImage){
	this.vel = moveSpeed;
	this.pos = startPos;
	this.text = textImage;

	this.move = function(){

		if (keyIsDown(RIGHT_ARROW)){
			this.pos -= this.vel;

		}
		else if (keyIsDown(LEFT_ARROW)){
			this.pos += this.vel;
		}
		else{
		}

		return this.pos;
	}

	this.make = function(){

		push();  

			translate(this.pos, 0);
			image(this.text, 0, 0);

		pop();

	}
}

function Character(charVel){
	this.pos = 40;
	this.vel = charVel;

	this.move = function(){

		if(keyIsDown(RIGHT_ARROW) && this.pos <= width/4){
			this.pos += this.vel;
		}
		
		else if(keyIsDown(LEFT_ARROW) && this.pos >= 0){
			this.pos -= this.vel;
		}

		return this.pos;
	}

	this.make = function(myImage){
		this.img = myImage;

		push();

			translate(this.pos, 0);
			image(this.img, 0, 0);

		pop();
	}

};
