var appdata = {
	themecolor: 'var(--navbar-color)',
	appid: '4d213d8031f43d4da56dacbb1f74e77a',
	scalex: '400px',
	scaley: '500px',
	nobg: false,
	bgcolor: 'var(--navbar-color)',
	navbtns: true,
	headerscale: '60px',
	displayname: 'Lorem ipsum dolor sit amet.',
	windowmoveable: true,
	externalappsrc: './../apps/settings.html',
	overflowtype: 'hidden',
}

arcapi.createwindow(JSON.stringify(appdata), 'internal')