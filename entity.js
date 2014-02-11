function Entity( game ) {
	this.game = game;
	// coordinates
	this.x = 0;
	this.y = 0;

	this.width = 20;
	this.height = 20;

	// entities move
        this.speed = 10;
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
	// out of bounds?
	//this.x = Math.min(this.x, this.game.width); // stop on the right
	// let's bounce...
	if ( this.x > this.game.width ) {
		this.xVelocity *= -1;
	}
	if ( this.x < 0 ) {
		this.xVelocity *= -1;
	}

	if ( this.y > this.game.height ) {
		this.yVelocity *= -1
	}
	if ( this.y < 0 ) {
		this.yVelocity *= -1;
	}
	this.y += this.yVelocity;
}
