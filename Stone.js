class Stone{
	constructor(x,y,width,height)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			desity:12
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		//this.r=r
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)
			pop()
	}

}