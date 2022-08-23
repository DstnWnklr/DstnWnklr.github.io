// JavaScript Document
// Get the modal
var modal01 = document.getElementById("Modal01");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal01Button = document.getElementById("Modal01Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modal01Button.onclick = function() {
	document.body.style.overflow = "hidden";
	modal01.style.display = "block";
	if(!sessionStorage.getItem('modal')){
		sessionStorage.setItem('modal', '0');
		console.log("modal01 | true");
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	document.body.style.overflow = "auto";
	modal01.style.display = "none";
	if(sessionStorage.getItem('modal')){
		sessionStorage.removeItem('modal');
		console.log("modal01 | remove");
	}
}