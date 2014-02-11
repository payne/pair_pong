function Game() {
	this.entities = []; // empty list
	this.width = 0;
	this.height = 0;
        this.up=false;
        this.down=false;
        this.down=false;
        this.up=false;
}

Game.prototype.loop = function ( context ) {
	var self = this;
	var fps = 60; // frames per second
	var ms = 1000; // milliseconds/second
	var interval = ms / fps;

        $('canvas').on('keydown keyup', function(keyEvent) {
           console.log("keyEvent="+keyEvent);
           console.log("type="+keyEvent.type + " and which="+keyEvent.which);
           console.log("j? " + 74==keyEvent.which);
           console.log("k? " + 75==keyEvent.which);
           //??? toAscii('A')==65
           if (keyEvent.type === 'keydown' && 74==keyEvent.which) { self.down=true; self.up=false; }
           if (keyEvent.type === 'keydown' && 75==keyEvent.which) { self.down=false; self.up=true; }
           keyEvent.preventDefault();
        });
        
	//TODO: Use the fancier way someday....
	setInterval( function () {
		context.fillStyle = 'black';
		context.fillRect( 0, 0, self.width, self.height );
		// Question!  How did it get context?
		self.update(context,self.down,self.up); // loop over the entities 
		self.draw( context );
	}, interval );
}
Game.prototype.update = function ( context, down,up ) {
	this.entities.forEach( function ( entity ) {
		if ( entity.update ) {
			entity.update( context, down,up ); // only call if there is an update method
		}
	} );
}
Game.prototype.draw = function ( context ) {
	this.entities.forEach( function ( entity ) {
		if ( entity.draw ) {
			entity.draw( context );
		}
	} );
}

// Question! Why do we do this?
Game.prototype.constructor = Game;

$( document ).ready( function () {
	var game = new Game();
	// old method
	var canvas = $( 'canvas' )[ 0 ];
        //TODO: Use Marc's fancy mapping stuff someday...
        console.log("Trying to connect the key listener...");
	var context = canvas.getContext( '2d' ) // 2-d or webgl
	game.height = canvas.height
	game.width = canvas.width
	//ball
	var ball = new Entity( game );
	ball.xVelocity = 10;
	ball.x = game.height / 2;
	ball.y = game.width / 2;
	//paddle
	var paddle = new Entity( game );
	paddle.yVelocity = 8;
	paddle.x = 0;
	paddle.y = 0;
        paddle.wantsUpDown=true;
        paddle.update=function(context,down,up) {
            // like super.update(...) in java
            // Check the keyboard state
            if (up) {
              this.yVelocity += this.speed;
            } else if (down) {
              this.yVelocity -= this.speed;
            } else {
              //console.log("this.game.up is " + this.game.up);
              this.yVelocity = 0;
            }
            Entity.prototype.update.apply(this,arguments); 
        };
	//computer paddle
	var computerPaddle = new Entity( game );
	computerPaddle.yVelocity = 8;
	computerPaddle.y = 0;
	computerPaddle.x = game.width - computerPaddle.width;

	game.entities = [
    ball,
    paddle,
    computerPaddle
  ];

	game.loop( context ); // forever loop with timer....
} );
