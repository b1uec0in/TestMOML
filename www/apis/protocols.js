/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/


function launch_albums() {
	agate.appLauncher.exec('albums');
	agate.appLauncher.addEventListener('onComplete', 'onSelectImage');
}

function onSelectImage(param) {
	var imagePath = param.path;

	if (imagePath != '') {	
		$('#file-path-contents').html("<br/><strong>" + imagePath + "</strong>");
		agate.runScript('protocol_storageoutput.storageWin.defaultImg=\'' + imagePath + '\'');
	}
}