width = 600;
height = 500;

function setup() {
	createCanvas(600, 500);
}

function draw(){
	fill(255);
	rect(0, 0, 599, 499);

	line(width/2, 0, width/2, height);
	line(0, height/3, width/2, height/3);
	line(500, 0, 500, height);

	if (mouseX >= 500 && mouseX <= width) {
		fill(0);
		rect(500, 0, width-500, height);
	}

}
