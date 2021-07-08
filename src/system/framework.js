/**
 *  <div arc-include-html="[path to html file]"></div>
 */

// HTML CROSS LINK
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("arc-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) { elmnt.innerHTML = this.responseText; }
					if (this.status == 404) {
						elmnt.innerHTML = `<h1 style="font-size: 10em; position: absolute; top:0; left:0; text-align:center; background:#fff; z-index:10000; width:100%; height: 100%;">MineTools FrameWork Error</h1>`;
						console.error('404 - Minetools Framework Error ( HTML CROSS LINK )')
					}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("arc-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}


function loadpage(page) {
	window.location.href(page)
}

//deprecated
function loadapp(apppage) {
	window.location.replace(apppage)
}

//call framework functions

includeHTML();