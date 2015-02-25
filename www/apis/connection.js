/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// api-connection

function check_network() {
	var curNetwork = -1;
	
	curNetwork = agate.device.network.type();
	//alert(curNetwork);
	
	if(curNetwork == "offline"){
		$('#connection').html("No network connection");
		wifiInfo_clear();
	}else if(curNetwork == "cell3g"){
		$('#connection').html("3G connection");
		wifiInfo_clear();
	}else if(curNetwork == "wifi"){
		$('#connection').html("WiFi connection");
		wifiInfo();
	}else if(curNetwork == "cell4g"){
		$('#connection').html("4G connection");
		wifiInfo_clear();
	}else {
		$('#connection').html(curNetwork + " connection");
		wifiInfo_clear();
	}

}

function wifiInfo(){
	document.getElementById('ipV4Address').innerHTML = agate.device.network.ipV4Address();
	document.getElementById('ipV6Address').innerHTML = agate.device.network.ipV6Address();
	document.getElementById('ssid').innerHTML = agate.device.network.SSID();
	document.getElementById('bssid').innerHTML = agate.device.network.BSSID();
	document.getElementById('linkSpeed').innerHTML = agate.device.network.linkSpeed() + " Mbps";
}

function wifiInfo_clear(){
	document.getElementById('status').innerHTML = '';
	document.getElementById('ipAddress').innerHTML = '';
	document.getElementById('ssid').innerHTML = '';
	document.getElementById('bssid').innerHTML = '';
	document.getElementById('linkSpeed').innerHTML = '';
}