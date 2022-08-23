// JavaScript Document
// Get the modal
var modal03 = document.getElementById("Modal03");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal03Button = document.getElementById("Modal03Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
modal03Button.onclick = function() {
	document.body.style.overflow = "hidden";
	modal03.style.display = "block";
	if(!sessionStorage.getItem('modal')){
		sessionStorage.setItem('modal', '2');
		console.log("modal03 | true");
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	document.body.style.overflow = "auto";
	modal03.style.display = "none";
	if(sessionStorage.getItem('modal')){
		sessionStorage.removeItem('modal');
		console.log("modal03 | remove");
	}
}