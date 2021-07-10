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
						elmnt.innerHTML = `<h1 style="font-size: 10em; position: absolute; top:0; left:0; text-align:center; background:#fff; z-index:10000; width:100%; height: 100%;">Architect FrameWork Error</h1>`;
						console.error('404 - Architect Framework Error ( HTML CROSS LINK )')
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

function loadpage(page) {
	window.location.href(page)
}

//deprecated
function loadapp(apppage) {
	window.location.replace(apppage)
}

//call framework functions

includeHTML();