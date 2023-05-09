let root = document.documentElement;
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
	if(page == 'urlparams' && urlParams.get('page')) {
		page = urlParams.get('page')
	}
	if(page) {
		show(page);
		window.history.replaceState(null, null, "?page=" + page);
	} else {
		show("home");
	}
}

function switchtheme() {
	if (rootStyle.getPropertyValue("--theme") == "dark") {
		root.style.setProperty("--theme", "light");
		root.style.setProperty("--background-1", "#f7fff7");
		root.style.setProperty("--background-2", "#fffaf3");
		root.style.setProperty("--foreground", "#575279");
		root.style.setProperty("--button", "#eb6f92");
		root.style.setProperty("--secondary", "#eb6f92");
		for (var i of document.getElementsByClassName("svg")) {
			i.setAttribute("fill", "#1c1a1e");
		}
	}

	else if (rootStyle.getPropertyValue("--theme") == "light") {
		root.style.setProperty("--theme", "dark");
		root.style.setProperty("--background-1", "#191724");
		root.style.setProperty("--background-2", "#1f1d2e");
		root.style.setProperty("--foreground", "#e0def4");
		root.style.setProperty("--button", "#31748f");
		root.style.setProperty("--secondary", "#eb6f92");
		for (var i of document.getElementsByClassName("svg")) {
			i.setAttribute("fill", "#e0def4")
		}
	}

	else {
		root.style.setProperty("--theme", "dark");
		root.style.setProperty("--background-1", "#1c1a1e");
		root.style.setProperty("--background-2", "#221f23");
		root.style.setProperty("--foreground", "#f7fff7");
		root.style.setProperty("--button", "#38B863");
		root.style.setProperty("--secondary", "#EF476F");
		for (var i of document.getElementsByClassName("svg")) {
			i.setAttribute("fill", "#f7fff7")
		}
	}
}

window.onload = function() {
	showpage('urlparams')
}