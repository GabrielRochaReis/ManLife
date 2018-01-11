

	function sun(){
		let sun = document.querySelector("#sun");
		setTimeout(function() { sun.setAttribute("style","transition:top 4s, left 6s;top:0;left:50vw;"); }, 1);
		setTimeout(function() { sun.setAttribute("style","transition:top 9s, left 6s;top:474px;left:90vw;"); }, 6000);
		setTimeout(function() { night() }, 12000);
	}

	function night(){
		let sky = document.querySelector("#sky");
		sky.setAttribute("style","transition:background-color 1s;background-color:black;");
		let moon = document.querySelector("#moon");
		moon.setAttribute("style","transition:display 1s;display:inline;");
	}

	function newday(){
		document.querySelector("#sun").setAttribute("style","top: 474px;left: 0px;");
		document.querySelector("#sky").setAttribute("style","transition:background-color 1s;background-color:rgba(135, 206, 235, 0.2);");
		document.querySelector("#moon").setAttribute("style","");
		sun();

	}
	newday()
setInterval(function() {
	newday()
}, 24000)