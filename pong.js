$( document ).ready( function () {
	// old method
	var canvas = $( 'canvas' )[ 0 ];
	var context = canvas.getContext( '2d' ) // 2-d or webgl
	context.fillStyle = 'red';
	context.fillRect( 100, 100, 20, 20 );

	// using entity.js to draw 
	var ball = new Entity();
	ball.draw( context );
} );