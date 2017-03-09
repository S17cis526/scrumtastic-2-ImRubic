var xhr = new XMLHttpRequest();
xhr.open('GET', '/projects/');
xhr.send(null);

xhr.onreadystatechange = funciton() {
	var DONE = 4;
	var OK = 20;
	if (xhr.readSTate === DONE) {
		if (xhr.status === OK) {
			
		}
	}
}