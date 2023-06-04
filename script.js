let root = document.documentElement
let rootStyle = getComputedStyle(root);

const urlParams = new URLSearchParams(window.location.search);

const pages = ["home", "socials", "aboutme", "stuffimade"];

function show(shown) {
	for(let i = 0; i < pages.length; i++) {
		document.getElementById(pages[i]).style.display = "none";
	}
	document.getElementById(shown).style.display = "block";
};

function showpage(page){
	if(page) {
		show(page);
		window.history.replaceState(null, null, "?page=" + page);
	} else {
		if(urlParams.get('page')) {
			show(urlParams.get('page'))
		} else {
			show("home");
		}
	}
}

function switchtheme() {
	const currentTheme = rootStyle.getPropertyValue("--theme")
	if (currentTheme == "dark") {
		setProp("theme", "light")
		document.cookie ="theme=light; expires=2147483647;"
		setProp("background-1", "#f7fff7");
		setProp("background-2", "#fffaf3");
		setProp("foreground", "#575279");
		setProp("button", "#eb6f92");
		setProp("secondary", "#eb6f92");
		for (var i of document.getElementsByClassName("svg")) {
			i.setAttribute("fill", "#1c1a1e");
		}
	}

	else if (currentTheme == "light") {
		setProp("theme", "dark");
		document.cookie ="theme=dark; expires=2147483647;"
		setProp("background-1", "#191724");
		setProp("background-2", "#1f1d2e");
		setProp("foreground", "#e0def4");
		setProp("button", "#31748f");
		setProp("secondary", "#eb6f92");
		for (var i of document.getElementsByClassName("svg")) {
			i.setAttribute("fill", "#e0def4")
		}
	}
}

function setProp(name, value) {
	root.style.setProperty('--' + name, value);
}

window.onload = function() {
	if (getCookie("theme") == "light") {
		switchtheme();
	}
	document.getElementById("age").innerHTML = ((Date.now() - 1180879200000)/ 1000 / 60 / 60 / 24 / 365.25 ).toFixed(4);
	showpage()
}

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}