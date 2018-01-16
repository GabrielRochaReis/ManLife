
	function sun(){
		document.querySelector("#sun").setAttribute("class","halfday");
		setTimeout(function() { document.querySelector("#sun").setAttribute("class","night"); }, 12000);
		setTimeout(function() { night() }, 240000);
	}

	function night(){
		document.querySelector("#sky").setAttribute("class","night");
		document.querySelector("#moon").setAttribute("class","night");
	}

	function newday(){
		document.querySelector("#sun").setAttribute("class","day");
		document.querySelector("#sky").setAttribute("class","day");
		document.querySelector("#moon").setAttribute("class","day");
		sun();

	}
	newday()
setInterval(function() {
	newday()
}, 48000)