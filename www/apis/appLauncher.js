/*
	Created by MOSPI.org on 11.14.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// audioRecorder
function launch_audioRecorderApp() {
	agate.appLauncher.addEventListener('onComplete', 'onComplete');
	agate.appLauncher.exec('audioRecorder');
}

var audioRecorderSound;
function play_audioRecorderResult() {
	audioRecorderSound = agate.sound.createSound($("#audioRecorderResult-path-contents").text(), 'autoPlay:false|loop:false|shareResource:true', '');
	agate.sound.play(audioRecorderSound);
}

function stop_audioRecorderResult() {
	agate.sound.stop(audioRecorderSound);
}

// imageCapture
function launch_imageCaptureApp() {
	agate.appLauncher.addEventListener('onComplete', 'onComplete');
	agate.appLauncher.setSaveForImageCapture('true');
	agate.appLauncher.exec('imageCapture');
}

// videoCapture
function launch_videoCaptureApp() {
	agate.appLauncher.addEventListener('onComplete', 'onComplete');
	agate.appLauncher.exec('videoCapture');
}

function play_videoCaptureResult() {
	agate.runScript('appLauncher_videocaptureoutput.videoCaptureVideo.play()');
}

function pause_videoCaptureResult() {
	agate.runScript('appLauncher_videocaptureoutput.videoCaptureVideo.pause()');
}

function stop_videoCaptureResult() {
	agate.runScript('appLauncher_videocaptureoutput.videoCaptureVideo.stop()');
}

// albums
function launch_albumsApp() {
	agate.appLauncher.addEventListener('onComplete', 'onComplete');
	agate.appLauncher.exec('albums');
}

// twitter
function launch_twitterApp() {
	agate.appLauncher.openUri('twitter://post?message=HelloAgate!', 'goInstallPage|askErrorPopup');
}

// appLauncher event
function onComplete(param) {
	var type = param.type;

	if (type == 'audioRecorder')
	{
		if (param.path != undefined)
		{
			$('#audioRecorderResult-path-contents').html("<br/>" + param.path + "");
		} else {
			$('#audioRecorderResult-path-contents').html("");
		}
	} 
	else if (type == 'imageCapture')
	{
		if (param.path != undefined)
		{
			$('#imageCaptureResult-path-contents').html("<br/>" + param.path + "");
			agate.runScript('appLauncher_imagecaptureoutput.imageCaptureWin.defaultImg=\'' + param.path + '\'');
		} else {
			$('#imageCaptureResult-path-contents').html("");
			agate.runScript('appLauncher_imagecaptureoutput.imageCaptureWin.defaultImg=\'#ffffff\'');
		}
	}
	else if (type == 'videoCapture')
	{
		if (param.path != undefined)
		{
			$('#videoCaptureResult-path-contents').html("<br/>" + param.path + "");
			agate.runScript('appLauncher_videocaptureoutput.videoCaptureVideo.src=\'' + param.path + '\'');
		} else {
			$('#videoCaptureResult-path-contents').html("");
		}
	}
	else if (type == 'albums')
	{
		if (param.path != undefined)
		{
			$('#albumsResult-path-contents').html("<br/>" + param.path + "");
			agate.runScript('appLauncher_albumsoutput.albumsWin.defaultImg=\'' + param.path + '\'');
		} else {
			$('#albumsResult-path-contents').html("");
		}
	}
}