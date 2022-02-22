let root = document.documentElement;
			let rootStyle = getComputedStyle(root)

			const pages = ["home", "socials", "aboutme", "stuffimade"]
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			
			function show(shown) {
				for(let i = 0; i < pages.length; i++) {
					document.getElementById(pages[i]).style.display = "none";
				}
				document.getElementById(shown).style.display = "block";
			};

			function showpage(){
				if(urlParams.get('page')) {
					var page = urlParams.get('page')
					show(page)
				} else {
					show("home")
				}
			}

			function switchtheme() {
				if (rootStyle.getPropertyValue("--theme") == "dark") {
					root.style.setProperty("--theme", "light");
					root.style.setProperty("--background-1", "#f7fff7");
					root.style.setProperty("--background-2", "#fff");
					root.style.setProperty("--foreground", "#1c1a1e");
					root.style.setProperty("--button", "#e0a4c6");
					root.style.setProperty("--secondary", "#EF476F");
					for (var i of document.getElementsByClassName("svg")) {
						i.setAttribute("fill", "#1c1a1e")
					}
				}

				else if (rootStyle.getPropertyValue("--theme") == "light") {
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
				showpage()
			}