/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/
function onBackbutton() {
    // the intro div is considered home, so exit if use
    // wants to go back with button from there
    if ($('.api-div#api-intro').css('display') === 'block') {
        console.log("Exiting app");
        navigator.app.exitApp();
    } else {    
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);
    }
}

function deviceInfo(){
    document.getElementById("platform").innerHTML = agate.device.os.platform();
    document.getElementById("osversion").innerHTML = agate.device.os.version();
	document.getElementById("osrelease").innerHTML = agate.device.os.release();
    document.getElementById("model").innerHTML = agate.device.model();
    document.getElementById("manufacturer").innerHTML = agate.device.manufacturer();
    document.getElementById("hwid").innerHTML = agate.device.id();
    document.getElementById("width").innerHTML = agate.device.screen.widthPixels();
    document.getElementById("height").innerHTML = agate.device.screen.heightPixels();
    document.getElementById("density").innerHTML = agate.device.screen.density();
    document.getElementById("scaleDensity").innerHTML = agate.device.screen.scaledDensity();
    document.getElementById("densitydpi").innerHTML = agate.device.screen.densityDpi();  
    document.getElementById("xdpi").innerHTML = agate.device.screen.xdpi();
	document.getElementById("ydpi").innerHTML = agate.device.screen.ydpi();

}
