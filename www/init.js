/*
	Created by MOSPI.org on 10.23.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

function checkRequirement()
{
    var targetVersion = "11";
    var platform = agate.runScript('device.os.platform');
    
    if (platform == "Android") {
        var version = agate.runScript("application.version");
        var name = agate.runScript("application.name");
        if (name == "Agate API Demo" && version != targetVersion) {
        
            agate.runScript("device.systemPopup('New version is available!', 'Do you want to download?', 'Yes:appLauncher.openUri(\\'market://details?id=org.mospi.ageteApiDemo\\', \\'\\')', 'No', '')");
            /*
            if (confirm("New version is available.\nDo you want to download?") == true) {
                location.href = "market://details?id=org.mospi.ageteApiDemo";
            }
            */
        }
    }
    
}

var baseDir; // includes ending slash
function init() {
    baseDir = getDocumentDir();
}

function getDocumentDir()
{
    var dir = document.documentURI.substring(0, document.documentURI.lastIndexOf("/") + 1);
    
    return dir;
}

var initFunctions = [];
function onAgateReady() // automatically called by AGATEWEBVIEW when all agate objects are registered.
{
    checkRequirement();
    
   for (i = 0; i < initFunctions.length; ++i) {
       initFunctions[i]();
    }
}
