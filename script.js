const root = document.documentElement;

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}

function setTheme(currentTheme) {
	root.setAttribute('theme', currentTheme);
	document.cookie = `theme=${currentTheme}; expires=2147483647; SameSite=Lax;`;
}

function switchTheme() {
	let currentTheme = root.getAttribute('theme')

	if (currentTheme == 'light') {
		currentTheme = 'dark';
	} else {
		currentTheme = 'light';
	}

	setTheme(currentTheme);
}

setTheme(getCookie('theme'));

window.onload = () => {
	[...document.getElementsByClassName('js-required')].forEach(element => {
		element.classList.remove("js-required")
	});
	document.getElementById('age').innerHTML = ((Date.now() - 1180879200000)/ 1000 / 60 / 60 / 24 / 365.25 ).toFixed(4);
}