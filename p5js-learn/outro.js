class Outro {
	constructor(x,y,image,speed){
		this.speed=speed;
		this.x=x;
		this.y=y;
		this.image=image;
	}

	play(){
		image(image,x,y);
		x+=speed;
		y+=speed;
		background(0)
		describe('green circle at x pos ' + round(x) + ' moving to the right');

	}

	
}