var form = document.getElementById('incident.do');

if (form) {
	for ( var x = 0; x < form.elements.length; x++) {
		form.elements[x].disabled = true;
	}
}