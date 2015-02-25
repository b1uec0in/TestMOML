/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/


var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
// See the above in device.js for their assignments

// api-camera
function onPhotoDataSuccess(imageData) {
    console.log("* * * onPhotoDataSuccess");
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    console.log("* * * onPhotoURISuccess");
    // Uncomment to view the image file URI 
    // console.log(imageURI);
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = imageURI;
}

function open_cam() {
	agate.runScript('camera_output.cam.open()');
}

function close_cam() {
	agate.runScript('camera_output.cam.close()');
}

function type_back() {
	agate.runScript('camera_output.cam.type=\'back\'');
}

function type_front() {
	agate.runScript('camera_output.cam.type=\'front\'');
}

function take_pic() {
	agate.runScript('camera_output.cam.takePicture()');
}