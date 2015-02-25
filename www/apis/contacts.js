/*
	Created by MOSPI.org on 09.20.2012
	
	You can freely copy, distribute, modify for commercial or non-commercial purposes
*/

// api-contacts
function contacts_success(agate_contact) {
    $('#contacts-output').html("<strong>" + contacts.count() + "</strong> contacts returned.");
    for (var i = 0; i < contacts.count() ; i++) {        
        if (contacts[i].name && contacts[i].name.formatted) {
            $('#contacts-output').append("<br/>Contact " + (i+1) + " is <strong>" +
                    contacts[i].name.formatted + "</strong>");
            break;
        }
    }
}
function contacts_fail (error) {
    $('#contacts-output').html("<strong>Error getting contacts.</strong>");
}
function get_contacts() {

	$('#contacts-output').html("<strong>" + agate.device.contact.count() + "</strong> contacts returned.");

}

