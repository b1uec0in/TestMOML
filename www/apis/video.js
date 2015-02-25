/*
	Created by MOSPI.org on 11.14.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// video
function play_video() {
	agate.runScript('video_output.video.play()');
}

function pause_video() {
	agate.runScript('video_output.video.pause()');
}

function stop_video() {
	agate.runScript('video_output.video.stop()');
}

function caption_toggle() {
	var showCaption = agate.runScript('video_output.video.caption');

	if (showCaption == '1')
	{
		agate.runScript('video_output.video.caption = false');
	}
	else
	{
		agate.runScript('video_output.video.caption = true');
	}
}