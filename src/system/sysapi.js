var arcapi = {
	createwindow(appdata) {
		if (!appdata) return this.error('window failed to create (No Appdata Was Passed Into The Window Create Function)');
		var appdata = JSON.parse(appdata)
		document.getElementById(`windowscontainer`).innerHTML += `
		<div class="window" id="window_${appdata.appid}">
		<div class="windowheader" id="window_${appdata.appid}_header"></div>
		<script defer id="window_${appdata.appid}_javascript"></script>
		</div>
		`
		if (appdata.displayname) document.getElementById(`window_${appdata.appid}_header`).innerHTML = `<a class="windowheadertitle">${appdata.displayname}</a>`
		if (appdata.navbtns == true) {
			document.getElementById(`window_${appdata.appid}_header`).innerHTML += `
			<img src="./../icons/appiconunrounded.png" alt="close" class="window_nav_btn_close" onclick="ampsys_closewindow_${appdata.appid}()">
				<img src="./../icons/appiconunrounded.png" alt="max" class="window_nav_btn_max" onclick="ampsys_maxwindow_${appdata.appid}()">
				<img src="./../icons/appiconunrounded.png" alt="min" class="window_nav_btn_min" onclick="ampsys_minwindow_${appdata.appid}()">
			`
		}
		if (appdata.windowmoveable == true) {
			document.getElementById(`window_${appdata.appid}_javascript`).innerHTML += `
dragElement(document.getElementById('window_${appdata.appid}'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "_header")) {
    document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function ampsys_maxwindow_${appdata.appid}() {
	document.getElementById('window_${appdata.appid}')
}
function ampsys_minwindow_${appdata.appid}() {
	document.getElementById('window_${appdata.appid}')
}
function ampsys_closewindow_${appdata.appid}() {
	document.getElementById('window_${appdata.appid}').remove()
}
`
		}
		if (appdata.themecolor) document.getElementById(`window_${appdata.appid}_header`).style.backgroundColor = appdata.themecolor
		if (appdata.scalex) document.getElementById(`window_${appdata.appid}`).style.width = appdata.scalex
		if (appdata.scaley) document.getElementById(`window_${appdata.appid}`).style.height = appdata.scaley
		if (appdata.bgcolor) document.getElementById(`window_${appdata.appid}`).style.backgroundColor = appdata.bgcolor
		if (appdata.nobg == true) document.getElementById(`window_${appdata.appid}`).style.backgroundColor = '#ffffff00'
		if (appdata.headerscale) {
			document.getElementById(`window_${appdata.appid}_header`).style.height = appdata.headerscale

			document.getElementById(`window_${appdata.appid}_header`).children[1].style.height = appdata.headerscale
			document.getElementById(`window_${appdata.appid}_header`).children[2].style.height = appdata.headerscale
			document.getElementById(`window_${appdata.appid}_header`).children[3].style.height = appdata.headerscale

			document.getElementById(`window_${appdata.appid}_header`).children[1].style.right = `0`
			document.getElementById(`window_${appdata.appid}_header`).children[2].style.right = `calc(${appdata.headerscale} + 2px)`
			document.getElementById(`window_${appdata.appid}_header`).children[3].style.right = `calc(${appdata.headerscale} + 4px + ${appdata.headerscale})`
		}
	},
	error(reason) {
		console.error(reason)
	}
}

var appdata = {
	themecolor: 'var(--navbar-color)',
	appid: '1238',
	scalex: '400px',
	scaley: '500px',
	nobg: false,
	bgcolor: 'var(--navbar-color)',
	navbtns: true,
	headerscale: '60px',
	displayname: 'Lorem ipsum dolor sit amet.',
	windowmoveable: true,
}

arcapi.createwindow(JSON.stringify(appdata))

//#region Allow Api Code To Run
function nodeScriptReplace(node) {
	if (nodeScriptIs(node) === true) {
		node.parentNode.replaceChild(nodeScriptClone(node), node);
	}
	else {
		var i = -1, children = node.childNodes;
		while (++i < children.length) {
			nodeScriptReplace(children[i]);
		}
	}

	return node;
}
function nodeScriptClone(node) {
	var script = document.createElement("script");
	script.text = node.innerHTML;

	var i = -1, attrs = node.attributes, attr;
	while (++i < attrs.length) {
		script.setAttribute((attr = attrs[i]).name, attr.value);
	}
	return script;
}

function nodeScriptIs(node) {
	return node.tagName === 'SCRIPT';
}

nodeScriptReplace(document.getElementsByTagName("body")[0]);

//#endregion
