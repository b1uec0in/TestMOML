/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// api-media
var my_media = null;
var mediaTimer = null;
var dur = -1;  // duration of media (song)
var is_paused = false; // need to know when paused or not
var soundId = -1;

function getSoundId() {
    if (soundId == -1)
        soundId = agate.sound.createSound('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3', 'autoPlay:false|loop:false|shareResource:true', '');
    return soundId;
}

function setAudioPosition(position) {
    $("#audio_position").html(position + " sec");
}
function onSuccess() {
    setAudioPosition(dur);
    clearInterval(mediaTimer);
    mediaTimer = null;
    my_media = null;
    is_paused = false;
    dur = -1;
}
function onError(error) {
    alert('code: '    + error.code    + '\n' + 
            'message: ' + error.message + '\n');
    clearInterval(mediaTimer);
    mediaTimer = null;
    my_media = null;
    is_paused = false;
    setAudioPosition("0");
}
function playAudio(src) {
    if (my_media === null) {       
        $("#media_dur").html("0"); // ui niceties
        $("#audio_position").html("Loading...");        

		
		agate.sound.play(getSoundId());


    } else {
        if (is_paused) {
            // to resume where paused in song: call .play()
            is_paused = false;
            my_media.play();
        }
    }
    // Update my_media position every second
    if (mediaTimer === null) {
        mediaTimer = setInterval(function() {
            my_media.getCurrentPosition(
                    // success callback
                    function(position) {
                        if (position > -1) {
                            setAudioPosition(Math.round(position));
                            // getDuration() can take a few seconds so keep trying
                            // this could be done a better way, no callback for it
                            if (dur <= 0) {
                                dur = my_media.getDuration();                             
                                if (dur > 0) {
                                    dur = Math.round(dur);
                                    $("#media_dur").html(dur);
                                }
                            }                                                      
                        }
                    },
                    // error callback
                    function(e) {
                        alert("Error getting pos=" + e);
                        setAudioPosition("Error: " + e);
                    }
            );
        }, 1000);
    }
}
function pauseAudio() {
    if (is_paused) { return; }
    if (my_media) {
		agate.sound.pause(getSoundId());
    }
}
function stopAudio() {
    if (my_media) {

		agate.sound.stop(getSoundId());
    }
    if (mediaTimer) {
        clearInterval(mediaTimer);
        mediaTimer = null;
    }
    is_paused = false;
    dur = 0;
}

// api-media   Live Audio Recording / Playback
var mediaRec = 0;
function playbackRecord() {
    if (mediaRec) {

        mediaRec.play();
        $('#record-status').html("Playing");
        console.log("Playing Audio");
    }
}
function recordSuccess() {
    console.log("Record Success");
    $('#record-status').html("Success");
    $('#playbackRecord').live('tap', function() {
        playbackRecord();
    });
}
function recordError(error) {
    console.log('Record Error: code: ' + error.code);
}
function startRecord() {
    var src = "myrecording.mp3";
    
    // disable playback while recording
    $('#playbackRecord').live('tap', function() { });
    if (mediaRec) {
        mediaRec.release();  // help prevent errors
    }
    mediaRec = new Media(src, recordSuccess, recordError);

    mediaRec.startRecord();
    $('#record-status').html('<span style="color:#f22;">Recording</span>');
    $('#record-time').html("0 sec");

    // Stop recording after 5 sec
    var recTime = 0;
    var recInterval = setInterval(function() {
        recTime = recTime + 1;
        $('#record-time').html(recTime + " sec");
        if (recTime >= 5) {
            clearInterval(recInterval);
            $('#record-status').html("Recorded: ");
            mediaRec.stopRecord();
        }
    }, 1000);    
}

//$(document).ready(function() {       
//    $("#playaudio").live('tap', function() {
//        check_network();
//        if ($('#connection').html() === 'No network connection') {
//            alert("Need network connection to play song from internet");
//            return false;
//        }
//        // Note: Two ways to access media file: (1) web (below)        
//        var src = 'http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3';        
//        
//        playAudio(src);
//    });
//    $("#pauseaudio").live('tap', function() {
//        pauseAudio();
//    });    
//    $("#stopaudio").live('tap', function() {
//        stopAudio();
//    });
//    $("#startRecord").live('tap', function() {
//        startRecord();
//    });    
//    $("#playbackRecord").live('tap', function() {

//    });    
//});

var id = '-1';
function play() {
	id = agate.sound.createSound('/www/res/sound/Impomptu in D major(8k15s).mp3', 'autoPlay=false|loop=false|shareResource=true', '');
	
	if (id != '-1')	{
		agate.sound.play(id);
		$('#audio_status').html("Playing");
	} else {
		alert('id is invalid!');
	}
}

function pause() {
	if (id != '-1')	{
		agate.sound.pause(id);
		$('#audio_status').html("Paused");
	} else {
		alert('id is invalid!');
	}
}

function stop() {
	if (id != '-1')	{
		agate.sound.stop(id);
		id = '-1';
		$('#audio_status').html("Stopped");
	} else {
		alert('id is invalid!');
	}
}

function startRecord() {
	agate.recorder.start();
	$('#record-status').html("Recording");
}

function endRecord() {
	agate.recorder.stop();
	$('#record-status').html("Stopped");
}

function playBack() {
	agate.recorder.playBack();
	$('#record-status').html("PlayBack");
}