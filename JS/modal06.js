// JavaScript Document
// Get the modal
var modal06 = document.getElementById("Modal06");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal06Button = document.getElementById("Modal06Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 
modal06Button.onclick = function() {
	document.body.style.overflow = "hidden";
	modal06.style.display = "block";
	if(!sessionStorage.getItem('modal')){
		sessionStorage.setItem('modal', '5');
		console.log("modal06 | true");
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	document.body.style.overflow = "auto";
	modal06.style.display = "none";
	if(sessionStorage.getItem('modal')){
		sessionStorage.removeItem('modal');
		console.log("modal06 | remove");
	}
}