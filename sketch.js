var rectWidth = 100
var rectHeight = 50

var rStep = 50
var gStep = 200
var bStep = 70

function setup() {
	createCanvas(1000, 1000);
}

function draw() {
	noStroke();

	for (i = 1; i<=4; i++){
		push();

		fill(255-i*rStep, 200-i*gStep, 176-i*bStep);
		translate((i*(width/5) - (rectWidth/2)), (height/2) - (rectHeight/2));

		rotate((2*i-1)*PI/4);

		rect(0, 0, rectWidth, rectHeight);

		pop();

	}
}