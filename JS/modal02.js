// JavaScript Document
// Get the modal
var modal02 = document.getElementById("Modal02");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal02Button = document.getElementById("Modal02Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
modal02Button.onclick = function() {
	document.body.style.overflow = "hidden";
	modal02.style.display = "block";
	if(!sessionStorage.getItem('modal')){
		sessionStorage.setItem('modal', '1');
		console.log("modal02 | true");
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	document.body.style.overflow = "auto";
	modal02.style.display = "none";
	if(sessionStorage.getItem('modal')){
		sessionStorage.removeItem('modal');
		console.log("modal02 | remove");
	}
}