//Require MIDIPlayer and MIDIFile modules 

var MIDIPlayer = require('midiplayer');
var midi = require('midi');
var MIDIFile = require('midifile');
var fs = require('fs');
var data = fs.readFileSync('blackstar.mid'); 

 var output = new midi.output();
 console.log(data.buffer);


output.openPort(1);

    // Creating player 
    var midiPlayer = new MIDIPlayer({
      'output': output
    });
 
    // creating the MidiFile instance from a buffer (view MIDIFile README) 
    var midiFile = new MIDIFile(data.buffer);
 
    // Loading the midiFile instance in the player 
    midiPlayer.load(midiFile);
 
    // Playing 
    midiPlayer.play(function() {
        console.log('Play ended');
    });
 
    // Volume 
    midiPlayer.volume = 80; // in percent 
 
    // Pausing 
    midiPlayer.pause();
 
    // Resuming 
    midiPlayer.resume();
 
    // Stopping 
    midiPlayer.stop();
 
    // Playing again and loop 
    midiPlayer.play(function playCallback() {
        midiPlayer.play(playCallback);
    });

