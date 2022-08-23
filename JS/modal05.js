// JavaScript Document
// Get the modal
var modal05 = document.getElementById("Modal05");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal05Button = document.getElementById("Modal05Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal 
modal05Button.onclick = function() {
	document.body.style.overflow = "hidden";
	modal05.style.display = "block";
	if(!sessionStorage.getItem('modal')){
		sessionStorage.setItem('modal', '4');
		console.log("modal05 | true");
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	document.body.style.overflow = "auto";
	modal05.style.display = "none";
	if(sessionStorage.getItem('modal')){
		sessionStorage.removeItem('modal');
		console.log("modal05 | remove");
	}
}