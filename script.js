function openMyself(){
		document.getElementById("myself").style.visibility="visible";
		document.getElementById("close").style.visibility="visible";
}
function closeMyself() {
	 	document.getElementById("myself").style.visibility="hidden";
	 	document.getElementById("close").style.visibility="hidden";
}

function checkScreenWidth() {
	if(screen && screen.width < 480)
	 {
		 closeMyself();
	 }
	 else
	 {
		 openMyself();
	 }
}