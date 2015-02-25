/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// api-geolocation


var getCurrentPosition = function() {
		var text = "<div>Watching geolocation...</div>";
		console.log(text);
		$("#cur_position").html(text);

		agate.device.gps.addEventListener('gpsLocation', 'onCurrentListener');
		agate.device.gps.readyGPS();
};


var statusWatchPosition = 'off';

var toggleWatchPosition = function() {

	if (statusWatchPosition == 'off') {
		var text = "<div>Watching geolocation...</div>";
		console.log(text);
		$("#cur_position").html(text);

		agate.device.gps.addEventListener('gpsLocation', 'onUpdateListener');
		agate.device.gps.readyGPS();
		statusWatchPosition = 'on';
	} else {
		agate.device.gps.removeGPS();
		agate.device.gps.removeEventListener('gpsLocation', 'onUpdateListener');
		statusWatchPosition = 'off';
		invisibleResult();
	}

};

function onCurrentListener(param) {
	
	var text = "<div>Latitude: " + param.latitude + 
                    "<br/>" + "Longitude: " + param.longitude + "<br/>" + 
                    "Accuracy: " + param.accuracy + "m<br/>" + "Address: " + param.address + "<br/>" + "</div>";
	 console.log(text);
	$("#cur_position").html(text);

	
	var mapwidth = parseInt($('#map').css("width"), 10);  // remove 'px' from width value
    var mapheight = parseInt($('#map').css("height"), 10);
		 
        $('#map').css('visibility','visible');
        $('#map').attr('src', "http://maps.googleapis.com/maps/api/staticmap?center=" + 
            param.latitude + "," + param.longitude + 
            "&zoom=13&size=" + mapwidth + "x" + mapheight + "&maptype=roadmap&markers=color:green%7C" +
            param.latitude + "," + param.longitude + "&sensor=false");

		agate.device.gps.removeGPS();
		agate.device.gps.removeEventListener('gpsLocation', 'onUpdateListener');

}

function onUpdateListener(param) {
	var text = "<div>Latitude: " + param.latitude + 
                    "<br/>" + "Longitude: " + param.longitude + "<br/>" + 
                    "Accuracy: " + param.accuracy + "m<br/>" + "Address: " + param.address + "<br/>"+"</div>";
	 console.log(text);
	$("#cur_position").html(text);
	
	var mapwidth = parseInt($('#map').css("width"), 10);  // remove 'px' from width value
    var mapheight = parseInt($('#map').css("height"), 10);
		 
        $('#map').css('visibility','visible');
        $('#map').attr('src', "http://maps.googleapis.com/maps/api/staticmap?center=" + 
            param.latitude + "," + param.longitude + 
            "&zoom=13&size=" + mapwidth + "x" + mapheight + "&maptype=roadmap&markers=color:green%7C" +
            param.latitude + "," + param.longitude + "&sensor=false");
}

function invisibleResult(){
	$("#cur_position").html("");
	$('#map').css('visibility','hidden');
}
