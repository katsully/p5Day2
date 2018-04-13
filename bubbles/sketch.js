var bubbles = [];

function setup() {
	createCanvas(800,800);
	// allows for looping
	for(var i=0; i<100; i++) {
		bubbles.push(new Bubble(random(width),random(height),
			random(255), random(255), random(255)));
	}
}

function draw() {
	background('red');
	for(var i = 0; i<100; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}

}

//Bubbles class
function Bubble(x, y, red, green, blue) {
	this.x = x;
	this.y = y;
	this.red = red;
	this.green = green;
	this.blue = blue;

	this.show = function() {
		// this makes it blue
		// all fill values are from 0 to 255
		fill(this.red,this.green,this.blue);
		ellipse(this.x, this.y, 25, 25);
	};

	this.move = function() {
		this.x += random(-3,3);
		this.y += random(-3,3);
	}
}