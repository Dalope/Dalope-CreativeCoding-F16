var squareSize = 204  //size of each square
var margin = 50  //space around all squares
var spacing = 20  //space between squares
var square = squareSize + spacing  //takes into account the space a square and its margin take up
var distance
var x1
var y1
var x2
var y2

function setup() {

	createCanvas(1000, 1000); 

}


function draw() {

	fill(18, 38, 22); //green
	for(i = 0; i<9; i++) {
		if (i==0){
			noStroke();
		}
		else{
			stroke(210, 183, 114);
			strokeWeight(2);  //linework
		}
		rect(margin + (i*12), margin + (i*12), squareSize - (i*24), 
			squareSize - (i*24));
	}

	fill(216, 164, 7); //yellow
	noStroke();
	rect(margin+square, margin, squareSize, squareSize);
	stroke(210, 183, 114)  //linework
	for (i = 1; i < 16; i++) {
		line(margin+square + 1, margin+(i*(squareSize/16)), 
			margin+square+squareSize - 1, margin+(i*(squareSize/16)));
	}

	fill(20, 18, 26); //nearly black
	noStroke();
	rect(margin + 2*square, margin, squareSize, squareSize);
	stroke(210, 183, 114);
	for (i = 1; i < 13; i++){
		line(margin+2*square + squareSize/12*i, margin,
			margin+2*square, margin+squareSize/12*i);
	}
	for (i = 1; i < 13; i++){
		line(margin+2*square + squareSize, margin + squareSize/12*i,
			margin+2*square +squareSize/12*i, margin+squareSize);
	}

	fill(2, 28, 78); //blue
	noStroke();
	rect(margin, margin+square, squareSize, squareSize);
	stroke(210, 183, 114);
	for (i = 1; i < 16; i++){
		line(margin, margin+square + i*(squareSize/16), margin+squareSize - 
			(i*squareSize/16), margin+square + i*(squareSize/16));
		line(margin+squareSize -(i*squareSize/16), margin+square + 
			(i*squareSize/16), margin+squareSize -(i*squareSize/16), 
			margin+square+squareSize);
	}

	distance = squareSize/16
	x1 = margin + square + squareSize/2
	y1 = margin + square + squareSize/2
	x2 = margin + square + squareSize/2
	y2 = margin + square + squareSize/2


	fill(197, 38, 17);  //orange
	noStroke();
	rect(margin+square, margin+square, squareSize, squareSize);
	stroke(210, 183, 114);
	for(i = 1; i < 30; i++){
		if (i%4 == 1){  //up
			y2 = y2 - distance;
		}
		if (i%4 ==2){  //left
			x2 = x2 - distance;
			distance = distance + squareSize/16;
		}
		if (i%4 == 3){  //down
			y2 = y2 + distance;
		}
		if (i%4 == 0){  //right
			x2 = x2 + distance;
			distance = distance + squareSize/16;
		}
		line(x1, y1, x2, y2);
		x1 = x2;
		y1 = y2;
	}

	fill(167, 0, 10);  //red
	noStroke();
	rect(margin+(2*square), margin+square, squareSize, squareSize);
	stroke(210, 183, 114);
	noFill();
	for(i = 1; i <= 8; i++){
		rect(margin+(2*square), margin+square, squareSize/16*i, squareSize/16*i);
	}
	for(i = 1; i <=8; i++){
		rect(margin+2*square+squareSize - squareSize/16*i, margin+square,
			squareSize/16*i, squareSize/16*i);
	}
	for(i = 1; i <=8; i++){
		rect(margin+2*square, margin+square+squareSize - squareSize/16*i,
		 squareSize/16*i, squareSize/16*i);
	}
	for(i = 1; i <=8; i++){
		rect(margin+2*square+squareSize - squareSize/16*i, margin+square+squareSize - squareSize/16*i,
		 squareSize/16*i, squareSize/16*i);	
	}

}