let root = document.documentElement;
let rootStyle = getComputedStyle(root)

function switchtheme() {
	if (rootStyle.getPropertyValue("--theme") == "dark") {
		root.style.setProperty("--theme", "light");
		root.style.setProperty("--background-1", "#f7fff7");
		root.style.setProperty("--background-2", "#fff");
		root.style.setProperty("--foreground", "#1c1a1e");
		root.style.setProperty("--button", "#e0a4c6");
		for (var i of document.getElementsByClassName("svg")) {
			console.log(i)
			i.setAttribute("fill", "#1c1a1e")
		}
	}

	else if (rootStyle.getPropertyValue("--theme") == "light") {
		root.style.setProperty("--theme", "dark");
		root.style.setProperty("--background-1", "#1c1a1e");
		root.style.setProperty("--background-2", "#221f23");
		root.style.setProperty("--foreground", "#f7fff7");
		root.style.setProperty("--button", "#38B863");
		for (var i of document.getElementsByClassName("svg")) {
			i.setAttribute("fill", "#f7fff7")
		}
	}
}