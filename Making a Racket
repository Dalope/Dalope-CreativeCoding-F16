var bubbleList = []
var musicList = []
var keys = []
var colors = []


function preload() {
	for (i = 0; i <8; i++){
		musicList[i] = loadSound('assets/Bell'+ String(i+1) +'.wav');
	}

	println(musicList);
}

function setup() {
	colorMode(RGB,255, 255, 255, 1);
	createCanvas(500, 500);

	keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	colors = [[239, 85, 64, 0.5], [204, 115, 53, 0.5], [204, 178, 53, 0.5],
	[58, 79, 37, 0.5], [33, 71, 63, 0.5], [74, 89, 122, 0.5], [168, 106, 221, 0.5],
	[147, 69, 128, 0.5]];

}


function draw() {

	background(240);
	createKeyboard();

	if (bubbleList.length > 0){
		for (i = 0; i < bubbleList.length; i++){
			bubbleList[i].move();
			bubbleList[i].make();
		}
	}
}


function keyTyped() {

	for (i = 0; i <= keys.length; i++){
		if (key === keys[i]){
			musicList[i].play();
			var soundFile = musicList[i];
			var color = colors[i];
			var tempBub = new Bubble(soundFile, color);
			bubbleList.push(tempBub);

			println(soundFile, color);
		}
	}
}


function createKeyboard() {

	var whiteKeyWidth = (500-16)/8;

	fill(255);
	noStroke();

	for (i = 0; i <= 8; i++){  //white keys
		rect(i * (2 + whiteKeyWidth), height - height/5, 
			whiteKeyWidth, height/5);
	}

	for (i = 1; i <= 6; i++){  //black keys
		if (i == 3){
			noFill();
			noStroke();
		}
		else{
			fill(102, 74, 86);
			rect(whiteKeyWidth * i + 2, height - height/5, 
				2*whiteKeyWidth/3, height/8);
		}
	}
}


function Bubble(mySound, myColor){
	this.xPos = random(width);
	this.yPos = random(height - height/5);
	this.xVel = random(5);
	this.yVel = random(5);
	this.sound = mySound;
	this.color = myColor;
	this.radius = 10;

	this.move = function () {
		if (this.xPos >= width || this.xPos <= 0){
			this.xVel = -this.xVel;
			this.sound.play();
			this.radius += 1;
		}
		if (this.yPos >= height - height/5 || this.yPos <= 0){
			this.yVel = -this.yVel;
			this.sound.play();
			this.radius += 1;

		}
		this.xPos += this.xVel;
		this.yPos += this.yVel;
	}

	this.make = function() {
		fill(this.color);
		ellipse(this.xPos, this.yPos, this.radius, this.radius);
		println('Im drawing');
	}
};
