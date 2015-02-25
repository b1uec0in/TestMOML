/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// api-notification
var showAlert = function() {
	agate.device.systemPopup('Game Over', 'You are the winner!', 'Done', '', '');
};
var showConfirm = function() {
	agate.device.systemPopup('Game Over', 'You are the winner!', 'Restart:function.notification_restart', 'Exit:function.notification_Exit', '');
};
var beep = function() {
	agate.device.beep.playBeep();
};
var vibrate = function() {
	agate.device.vibrator.vibrate("1000");
};
