const arcapi = {
	createwindow(appdata) {
		if (!appdata) return this.error('window failed to create (No Appdata Was Passed Into The Window Create Function)');
		var appdata = JSON.parse(appdata)
		document.getElementById(`windowscontainer`).innerHTML += `
		<div class="window" id="window_${appdata.appid}">
		<div class="windowheader" id="window_${appdata.appid}_header"></div>
		</div>
		`
		if (appdata.displayname) document.getElementById(`window_${appdata.appid}_header`).innerHTML = `<a class="windowheadertitle">${appdata.displayname}</a>`
		if (appdata.navbtns == true) {
			document.getElementById(`window_${appdata.appid}_header`).innerHTML += `
				<img src="./../icons/appiconunrounded.png" alt="max" class="window_nav_btn">
				<img src="./../icons/appiconunrounded.png" alt="min" class="window_nav_btn">
				<img src="./../icons/appiconunrounded.png" alt="close" class="window_nav_btn">
			`
		}
		if (appdata.themecolor) document.getElementById(`window_${appdata.appid}_header`).style.backgroundColor = appdata.themecolor
		if (appdata.scalex) document.getElementById(`window_${appdata.appid}`).style.width = appdata.scalex
		if (appdata.scaley) document.getElementById(`window_${appdata.appid}`).style.height = appdata.scaley
		if (appdata.bgcolor) document.getElementById(`window_${appdata.appid}`).style.backgroundColor = appdata.bgcolor
		if (appdata.nobg == true) document.getElementById(`window_${appdata.appid}`).style.backgroundColor = '#ffffff00'
		if (appdata.headerscale) document.getElementById(`window_${appdata.appid}_header`).style.height = appdata.headerscale
		if (appdata.headerscale) document.getElementById(`window_${appdata.appid}_header`).children[1].style.height = appdata.headerscale
		if (appdata.headerscale) document.getElementById(`window_${appdata.appid}_header`).children[2].style.height = appdata.headerscale
		if (appdata.headerscale) document.getElementById(`window_${appdata.appid}_header`).children[3].style.height = appdata.headerscale
	},
	error(reason) {
		console.error(reason)
	}
}

var appdata = {
	themecolor: '#0000ff',
	appid: '1238',
	scalex: '400px',
	scaley: '50px',
	nobg: false,
	bgcolor: '#f000f0',
	navbtns: true,
	headerscale: '20px',
	displayname: 'Hello I\'m A Window And I Exist',
}

arcapi.createwindow(JSON.stringify(appdata))
appdata.appid++
arcapi.createwindow(JSON.stringify(appdata))
appdata.appid++
arcapi.createwindow(JSON.stringify(appdata))
appdata.appid++
arcapi.createwindow(JSON.stringify(appdata))
appdata.appid++
arcapi.createwindow(JSON.stringify(appdata))
appdata.appid++
arcapi.createwindow(JSON.stringify(appdata))