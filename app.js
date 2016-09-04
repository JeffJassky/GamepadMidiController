// CONSTANTS
const instruction = 144;
const velocity = 127;

// DEPENDENCIES
 var midi = require('midi');
var GamePad = require('node-gamepad');

// INIT MIDI
var output = new midi.output();
console.log(output.getPortCount());
console.log(output.getPortName(1));
output.openPort(1);

// INIT CONTROLLER
var controller = new GamePad(
	'snes',
	{vendorID: 4797,productID: 53269}
);

controller.connect();

controller.on('down:press', function() {
	output.sendMessage([instruction,36,velocity]);
	console.log('pressed down');
});
controller.on('x:press', function() {
	output.sendMessage([instruction,45,velocity]);
	console.log('pressed x');
});
controller.on('a:press', function() {
	output.sendMessage([instruction,6,velocity]);
	console.log('pressed a');
});
controller.on('b:press', function() {
	output.sendMessage([instruction,40,velocity]);
	console.log('pressed b');
});
controller.on('l:press', function() {
	output.sendMessage([instruction,42,velocity]);
	console.log('pressed l');
});
controller.on('r:press', function() {
	output.sendMessage([instruction,11,velocity]);
	console.log('pressed r');
});
