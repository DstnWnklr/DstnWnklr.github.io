// JavaScript Document
// Get the modal
var modal04 = document.getElementById("Modal04");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal04Button = document.getElementById("Modal04Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
modal04Button.onclick = function() {
	document.body.style.overflow = "hidden";
	modal04.style.display = "block";
	if(!sessionStorage.getItem('modal')){
		sessionStorage.setItem('modal', '3');
		console.log("modal04 | true");
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	document.body.style.overflow = "auto";
	modal04.style.display = "none";
	if(sessionStorage.getItem('modal')){
		sessionStorage.removeItem('modal');
		console.log("modal04 | remove");
	}
}