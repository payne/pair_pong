function Game() {
  this.entities = []; // empty list
  this.width=0;
  this.height=0;
}

Game.prototype.loop=function(context) {
  var self=this;
  var fps =60; // frames per second
  var ms  =1000; // milliseconds/second
  var interval = ms / fps;
  //TODO: Use the fancier way someday....
  setInterval(function() {
        context.fillStyle = 'black';
        context.fillRect(0,0,self.width,self.height);
        // Question!  How did it get context?
        self.update(context); // loop over the entities 
        self.draw(context);
  }, interval);
}
Game.prototype.update=function(context) {
   this.entities.forEach(function(entity) {
     if (entity.update) {
      entity.update(context); // only call if there is an update method
     }
   });
}
Game.prototype.draw=function(context) {
   this.entities.forEach(function(entity) {
     if (entity.draw) {
      entity.draw(context); 
     }
   });
}


Game.prototype.constructor=Game;

$( document ).ready( function () {
	// old method
	var canvas = $( 'canvas' )[ 0 ];
	var context = canvas.getContext( '2d' ) // 2-d or webgl
  var game  = new Game();
  game.height = canvas.height
  game.width = canvas.width
  var ball = new Entity(game);
  ball.xVelocity=10;
  game.entities=[ball,
           //, new Paddle, new Ball
  ];
  game.loop(context); // forever loop with timer....
} );
