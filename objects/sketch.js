var bug;	// declare my variable
var bug2;
var img;

function preload() {
	img = loadImage('ladybug.png');
}

function setup() {
	createCanvas(710, 400);
	// make a bug
	bug = new Bug(100, 200);
	bug2 = new Bug(0,0);
}

function draw() {
	background("pink");

	// get property value of object ~ kat.first
	bug.move();
	bug2.move();
	bug.show();
	bug2.show();
}

// Bug class
function Bug(x, y) {
	this.x = x;
	this.y = y;

	this.show = function() {
		// ellipse(this.x, this.y, 80, 80);
		image(img, this.x, this.y, 80, 80);
	};

	this.move = function() {
		this.x += 1;
		this.y += 1;
	}
}








