
var step = 1;
var alien;
var alien2;

function setup() {
	createCanvas(800, 800);

	alien = new Alien(10,10);
	alien2 = new Alien(60,60);
}

function draw() {

	background(255);
	alien.move();
	alien2.move()
	alien.show();
	alien2.show();
}

function Alien(x,y) {
	this.x = x;
	this.y = y;


	this.show = function() {
			// removes the outline of our shapes
		noStroke();

		// body
		fill(0,128,128);
		// xPos and yPos are upper left corner
		rect(this.x+200, this.y+100, 40, 200);

		// head
		fill(107,142,35);
		// xPos and yPos are center of ellipse
		ellipse(this.x+220, this.y+75, 175, 50);

		// eyes
		fill(0);
		ellipse(this.x+175, this.y+70, 20, 20);
		ellipse(this.x+265, this.y+70, 20, 20);

		// arc(x,y,w,h,start,stop,[mode])
		arc(this.x+220, this.y+80, 40, 20, 0, PI);

		// legs
		// line(x1,y1,x2,y2)
		strokeWeight(5);
		stroke(0);
		line(this.x+210, this.y+300, this.x+210, this.y+350);
		line(this.x+230, this.y+300, this.x+230, this.y+350);

		line(this.x+170, this.y+0, this.x+170, this.y+52);
		line(this.x+270, this.y+0, this.x+270, this.y+52);
	};

	this.move = function() {
		this.x = this.x+step
		this.y = this.y+step

		if(this.x > 50) {
			step = -1;
		}

		if( this.x < -50) {
			step = 1
		}
	}
}