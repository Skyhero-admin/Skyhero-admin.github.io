function openMyself(){
	if (max.matches){
		document.getElementById("myself").style.visibility="visible";

		document.getElementById("close").style.visibility="visible";
	}
	else if (min.matches){
		document.getElementById("myself").style.visibility="visible";

		document.getElementById("close").style.visibility="hidden";

	}
}
function closeMyself() {
	if(max.matches){

	 	document.getElementById("myself").style.visibility="hidden";
	 	document.getElementById("close").style.visibility="hidden";
	}
}

var max=window.matchMedia("(max-width:1000px)")
var min=window.matchMedia("(min-width:1000px)")

