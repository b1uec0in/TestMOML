/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

function roundNumber(num) {  // Helper function
    var dec = 3;
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}

// api-accelerometer
function getCurrentAcceleration() {
	agate.device.accelerometer.addEventListener('accelerometer', 'onUpdateCurrentAccelerometer');
	agate.device.accelerometer.start();
}

var accelStatus = 'off';
function toggleAcceleration() {	
	
	if (accelStatus == 'off')
	{
		agate.device.accelerometer.addEventListener('accelerometer', 'onUpdateAccelerometer');
		agate.device.accelerometer.start();
		accelStatus = 'on';
	} else {
		agate.device.accelerometer.stop();
		agate.device.accelerometer.removeEventListener('accelerometer', 'onUpdateAccelerometer');
		accelStatus = 'off';
		document.getElementById('x').innerHTML = '0';
		document.getElementById('y').innerHTML = '0';
		document.getElementById('z').innerHTML = '0';
		document.getElementById('accel_timestamp').innerHTML = '';
	}
	
}

function onUpdateAccelerometer(param) {
    document.getElementById('x').innerHTML = roundNumber(param.x);
    document.getElementById('y').innerHTML = roundNumber(param.y);
    document.getElementById('z').innerHTML = roundNumber(param.z);
    document.getElementById('accel_timestamp').innerHTML = roundNumber(param.speed);
}

function onUpdateCurrentAccelerometer(param) {
    document.getElementById('x').innerHTML = roundNumber(param.x);
    document.getElementById('y').innerHTML = roundNumber(param.y);
    document.getElementById('z').innerHTML = roundNumber(param.z);
    document.getElementById('accel_timestamp').innerHTML = roundNumber(param.speed);
	agate.device.accelerometer.stop();
	agate.device.accelerometer.removeEventListener('accelerometer', 'onUpdateCurrentAccelerometer');
	agate.device.accelerometer.removeEventListener('accelerometer', 'onUpdateAccelerometer');
	status = '0';
}