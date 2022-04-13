let outro=[]

function preload(){
firework = loadImage("assets/firework.png")
example = loadImage("assets/knight.png")
}

function setup(){
	createCanvas(600,400)
	outro[0] = new Outro(0,-400,firework,1)
	outro[1] = new Outro(300,-300,firework,1.2)
	outro[2] = new Outro(-300,-200,firework,1.5)
}

function draw(){
	background(200)


	fill(255,0,0)
	noStroke()
	rect(20,20,40,20)
	rect(50,50,40,20)
	playOutro()

}

function playOutro(){
	image(example,50,100,200,200)
	outro[0].play()
	outro[1].play()
	outro[2].play()


}

class Outro {
	constructor(x,y,image,speed){
		this.speed=speed;
		this.x=x;
		this.y=y;
		this.image=image;
	}

	play(){
		image(this.image,this.x,this.y);
		this.y+=this.speed;
	}
}