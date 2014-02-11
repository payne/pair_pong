console.log("AAAA")
$(document).ready(function(){
console.log("BBB")
var canvas = $('canvas')[0];
var context=canvas.getContext('2d') // 2-d or webgl
context.fillStyle='red';
context.fillRect(100,100,20,20);
});
console.log("CCC");
