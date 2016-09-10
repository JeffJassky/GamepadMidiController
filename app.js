// CONSTANTS
const instruction = 144;
const velocity = 127;

// DEPENDENCIES
var midi = require('midi');
var MIDIPlayer = require('midiplayer');
var MIDIFile = require('midifile');
var GamePad = require('node-gamepad');
var fs = require('fs');
var player = require('play-sound')(opts = {})



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

// INIT MIDI FILE PLAYER
var data = fs.readFileSync('blackstar.mid'); 
// Creating player 
var midiPlayer = new MIDIPlayer({'output': output });
// creating the MidiFile instance from a buffer (view MIDIFile README) 
var midiFile = new MIDIFile(data.buffer);
// Loading the midiFile instance in the player 
midiPlayer.load(midiFile);

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
controller.on('start:press', function() {
	player.play('Jotun Demo.mp3', function(err){});
    midiPlayer.play(function() {
        console.log('Play ended');
    });
	console.log('pressed start');
});
