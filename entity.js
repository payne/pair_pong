function Entity() {

	// coordinates
	this.x = 0;
	this.y = 0;

	this.width = 20;
	this.height = 20;

	// entities move
	this.xVelocity = 0;
	this.yVelocity = 0;

}

// draw on screen
Entity.prototype.draw = function ( context ) {
	context.fillStyle = 'green';
	context.fillRect( this.x, this.y, this.width, this.height );
}

Entity.prototype.update = function ( context ) {
	this.x += this.xVelocity;
	this.y += this.yVelocity;
}