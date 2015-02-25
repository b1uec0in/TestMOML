/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

$(document).ready(function() {   
    $('.api-div').hide();
    $('.api-div#api-intro').show();
    $('#intro').click(function(event) {
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);            
    });

    $('div ul li a').click(function(event) {
        event.preventDefault();

        var attrhref = $(this).attr('href');

        if (attrhref.indexOf("#api-") !== 0) {
            return;
        }
        
        // hide all div's, show only this one
        $('.api-div').hide();
        $(attrhref).show();

        // if small screen and portrait - close after tap
        var disp = $('ul #listdivider').css("display");

        if (disp === 'none') {
            $('div.ui-collapsible').trigger("collapse");
        } else {
            $.mobile.silentScroll(0);            
        }
    }); 
    
    $('#listdivider').click(function() {
        event.preventDefault();
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);
    });
	
});