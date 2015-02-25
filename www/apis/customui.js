/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/


// api-storage  "Create DB"

var coverflow_tid = 0;
var coverflow_index = 0;
function coverflow_delayUpdate()
{
    var index = coverflow_index + 1;
    var title = agate.runScript("xpath.evaluateEx('coverflowData', '/IMAGELIST/ITEM[" + index + "]/@title')");
    var artist = agate.runScript("xpath.evaluateEx('coverflowData', '/IMAGELIST/ITEM[" + index + "]/@artist')");
    //alert(name);
   $('#coverflow-data').html("<span style='color:#663322'>Rank :</span> <span style='color:#aa99bb'>" + index + "</span> <br />" +
                        "<span style='color:#663322'>Title :</span> <span style='font-size:large;color:#EE7755'>" + title + "</span> <br />" +
                        "<span style='color:#663322'>Artist :</span> <span style='color:#aa99bb'>"+ artist +"</span>");

}

function coverflow_onChange(index) {
    coverflow_index = index;
    
    coverflow_delayUpdate();
    return;
    
    if (coverflow_tid != 0)
        clearTimeout(coverflow_tid);
    //$('#coverflow-data').html("");
    coverflow_tid = setTimeout(coverflow_delayUpdate, 500);
}

function coverflow_init()
{
    coverflow_onChange(0);
}

initFunctions.push(coverflow_init);
