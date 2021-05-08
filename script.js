function openMyself(){
	if (max.matches){
		document.getElementById("myself").style.visibility="visible";

		document.getElementById("close").style.visibility="visible";
	}
	else{
		document.getElementById("myself").style.visibility="visible";

		document.getElementById("close").style.visibility="hidden";

	}
}
function closeMyself() {
	if (max.matches){

	 	document.getElementById("myself").style.visibility= "hidden";
	 	document.getElementById("close").style.visibility="hidden";

 }
 }

var max=window.matchMedia("(max-width:750px)")
var min=window.matchMedia("(min-width:750px)")

