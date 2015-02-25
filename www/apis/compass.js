/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

//api-compass
var compassWatch = null;

function updateHeading(h) {

	$('#heading').html(h);
	compassArrow.style.webkitTransform = 'rotate(-'+h+'deg)';
}

function getCurrentHeading() {

	agate.device.compass.addEventListener('compass', 'onCurrentCompass');
	agate.device.compass.start();
}

var statusCompass = 'off';
function toggleCompass() {	
	if (statusCompass == 'off')
	{
		agate.device.compass.addEventListener('compass', 'onUpdateCompass');
		agate.device.compass.start();
		statusCompass = 'on';
	} else {
		agate.device.compass.stop();
		agate.device.compass.removeEventListener('compass', 'onUpdateCompass');
		statusCompass = 'off';
		$('#heading').html('');
	}
	
}

function onUpdateCompass(param) {
	updateHeading(param.azimuth);
}

function onCurrentCompass(param) {
	updateHeading(param.azimuth);
	agate.device.compass.stop();
	agate.device.compass.removeEventListener('compass', 'onCurrentCompass');
	status = '0';
}
