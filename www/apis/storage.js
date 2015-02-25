/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/


// api-storage  "Create DB"

function errorCB() {
   $('#sql-result').html("<strong>Error processing SQL</strong>");
}

function successCreateCB() {
   console.log("Success creating Database 1.0");
   $('#sql-result').html("<strong>Success creating Database </strong>");
}
var db = 0;
function createDB(){
	var result = agate.db.exec('CREATE TABLE IF NOT EXISTS DEMO( _id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT NOT NULL)');

	if(result == "true"){
		successCreateCB();
		
	}else{
		errorCB();
	}
}

function writeDB(){
	var userVariable = "MY AGATE DB";
	var result = agate.db.exec('INSERT INTO DEMO VALUES(null,\''+userVariable+'\')');
	$('#sql-result').html("<strong>" + result + "</strong>");
}



function readDB(){
	var select_result = agate.db.exec('SELECT * FROM DEMO');
	

	var db_data =  agate.db.result.data('0','1');
	agate.device.log("select Result : " + db_data);
	$('#sql-result').html("<strong>" + db_data + "</strong>");
}


function deleteDB(){
	var result = agate.db.exec('DELETE FROM DEMO');

	$('#sql-result').html("<strong>" + result + "</strong>");
}


function getCount() {
	   
	   var select_result = agate.db.exec('SELECT * FROM DEMO');
	   var	record_count = agate.db.result.rowCount();
				$('#sql-result').html("<strong>Num. Rows Returned = " + record_count + "</strong>");

}

