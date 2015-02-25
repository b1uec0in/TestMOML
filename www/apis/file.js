/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

var path = 'storage:test/file.txt';

function createFile() { // button onclick function
	var result = agate.file.create(path);
	
	if (result == 'true')
	{
		$('#file-status').html("Created: <strong>" + path + "</strong>");
		$('#file-read-text').empty();  
	    $('#file-read-dataurl').empty();
	} else {
		$('#file-status').html("Status: <strong>Create failed!</strong>");       
	}
}

function writeFile() { // button onclick function
	var contents = 'Hellow agate!';
	var result = agate.file.write(path, contents);

	if (result == 'true') {	
		$('#file-contents').html("<br/>Contents: <strong>" + contents + "</strong>");
	} else {
		$('#file-status').html("Status: <strong>Write failed!</strong>");       
	}
}

function readFile() { // button onclick function
	var result = agate.file.read(path);

	if (result != '') {	
        $('#file-read-text').html("<strong>" + result + "</strong>");
	} else {
		$('#file-status').html("Status: <strong>Read failed!</strong>");       
	}
}

function removeFile() { // button onclick function
	var result = agate.file.remove(path);

	if (result == 'true') {	
		$('#file-status').html("Removed: <strong>" + path + "</strong>"); 
		$('#file-contents').empty();
		$('#file-read-text').empty();
	} else {
		$('#file-status').html("Status: <strong>Remove failed!</strong>");       
	}
}
