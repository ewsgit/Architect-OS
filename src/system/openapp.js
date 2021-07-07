function amp_system_open_app(appname, appid) {
	document.getElementById('amp-system-navbarapps').innerHTML += `
		<img src="./../icons/appicon.png" alt="app">
	`
}

function generatewindow(appname, appid) {
	if (!sessionStorage.getItem('windows')) {
		sessionStorage.setItem('windows', `"{
			""
		}"`)
	}
	var windowsopenforapp = JSON.parse(sessionStorage.getItem('windows'))[appid].windowsopen
	var windowid = `${appid}-window-${windowsopenforapp}`
	document.getElementById('windows').innerHTML += `
		<script>
			dragElement(document.getElementById(app-${appid}-window-${windowid}));
		</script>

	`
	sessionStorage.setItem('windows', JSON.stringify(JSON.parse(sessionStorage.getItem(windows))[appid].windowsopen + 1))
}