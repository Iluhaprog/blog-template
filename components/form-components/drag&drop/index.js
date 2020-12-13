function addDragAndDrop({id, dragover, dragleave, drop}) {
	const el = document.getElementById(id);
	el.addEventListener('dragover', function(e) {
		e.preventDefault();
		dragover(e, el);
	});
	el.addEventListener('dragleave', function(e) {
		e.preventDefault();
		dragleave(e, el);
	});
	el.addEventListener('drop', function(e) {
		e.preventDefault();
		drop(e, el);
	});
}

function changeBg(el, bg) {
	el.style.background = bg;
}
function addClass(el, className) {
	el.classList.add(className);
}

function removeClass(el, className) {
	el.classList.remove(className);
}

function bytesToMegaBytes(bytes, digits) {
	return (bytes / (1024 * 1024)).toFixed(digits);
}

function getFileInfo(e) {
	[...e.dataTransfer.files].forEach(function(element, index) {
		const  { name, type, size } = element;
		console.log(`
			Name: ${name};
			Type: ${type};
			Size: ${bytesToMegaBytes(size, 3)};
			`)
	});
}