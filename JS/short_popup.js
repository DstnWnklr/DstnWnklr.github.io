var popupBody = document.querySelector('body');
var popup = document.createElement("div"); 
var popupHeadlineContainer = document.createElement("div");
var popupTextContainer = document.createElement("div");
var contentWrapper = document.getElementsByClassName("content-wrapper")[0];
var subNavContainMobil = document.getElementsByClassName("sub-nav-contain-mobil")[0];
var modalContent;


// diese Funktion ist zur Erstellung von Popup Fenstern vorhanden
// es bekommt aus der HTML-Datei eine Überschrift und den eigentlichen Text übergeben
function popupContent(popupTextHeadline, popupText, elt) {
	// wir stylen das popup Fenster
	popup.style.cssText= 'display: inline-block;';
	popupBody.appendChild(popup);

	// damit man den Body nicht mehr scrollen kann, wenn das Popup geöffnet ist
	//popupBody.style.overflow = "hidden";

	// wir definieren den Button
	var button = document.createElement("BUTTON");
	button.style.cssText= 'cursor: pointer; float:right; width:20px; margin-left: auto; background: none; border: none;';
	button.addEventListener("click", (e) => {
		// wichtig, da wir die 'onclick' Funktion ansonsten zum Parent Element durchreichen würden
		e.stopPropagation();
		removeContent();
	});
	button.innerHTML = '<span class="closePopup">&times;</span>';

	// wir nutzen den erstellten Div Container um die Überschrift und den Button hinzuzufügen 
	popupHeadlineContainer.innerHTML = "<h3>" + popupTextHeadline + "</h3>";
	popupHeadlineContainer.style.cssText= 'width: 100%; display: flex; margin-bottom: 20px;'
	popupHeadlineContainer.appendChild(button);

	// wir nutzen den erstellten Div Container für den Fließtext
	popupTextContainer.innerHTML = "<p>" + popupText + "</p>";
	popupTextContainer.style.cssText= 'width: 100%';

	// beide Div Container werden dem popup hinzugefügt
	popup.appendChild(popupHeadlineContainer);
	popup.appendChild(popupTextContainer);

	// letzte Anpassungen am Popup
	popup.style.backgroundColor = "#8B914B";
	popup.style.color = "#f2f2f2";
	popup.style.padding = "15px";
	popup.style.fontSize = "15px";

	// Popup wird sichtbar gemacht
	popup.classList.add('displayPopup');


	console.log(popup.clientHeight);
	console.log(elt.getBoundingClientRect().top);


	// diese Schleife sorgt dafür, dass das PopupFenster nie unter dem Content-Wrapper angezeigt wird
	if ((((elt.offsetTop + popup.clientHeight) > contentWrapper.clientHeight) || ((elt.getBoundingClientRect().bottom + popup.clientHeight) > subNavContainMobil.getBoundingClientRect().top)) && (elt.getBoundingClientRect().top) > popup.clientHeight) {
		popup.style.top = (elt.offsetTop - popup.clientHeight) + 'px';
	} else {
		popup.style.top = (elt.offsetTop + 30) + 'px';
	}
	
	// diese Schleife sorgt dafür, dass das PopupFenster nie rechts vom Content-Wrapper angezeigt wird
	if(window.innerWidth < 500) {
		popup.style.left = ((window.innerWidth - popup.clientWidth) / 2)+ 'px';
	} else if ((elt.offsetLeft + popup.clientWidth) > (contentWrapper.offsetLeft + contentWrapper.clientWidth)) {
		popup.style.right = (contentWrapper.offsetLeft) + 'px';
		popup.style.left = 'auto';
	} else {
		popup.style.left = elt.offsetLeft + 'px';
	}

	popup.style.animation = 'popupFadeIn .8s'
}

// diese Funktion ist zum entfernen des Pupup Fensters vorhanden
// nutzt die hinzugefügten animationen um nach 0.8s den Container vom Body-Element zu entfernen
function removeContent() {
	popup.style.animation = 'popupFadeOut .8s'
	popupBody.style.overflow = "auto";

	setTimeout(() => {
		popupBody.removeChild(popup);
	}, 750);
}

// diese Funktion ist für das Popup im Modal vorgesehen
function popupContentModal(popupTextHeadline, popupText, elt) {
	var modalContentNumber;
	for(i = 0; i <= sessionStorage.length; i++) {
		console.log(sessionStorage.getItem('modal'));
		modalContentNumber = parseInt(sessionStorage.getItem('modal'), 10);
	}
	modalContent = document.getElementsByClassName("modal-content")[modalContentNumber];
	// https://developer.mozilla.org/de/docs/Web/API/Window/sessionStorage

	// wir stylen das popup Fenster
	popup.style.cssText= 'display: inline-block;';
	modalContent.appendChild(popup);
	modalContent.style.overflow = "hidden";

	// wir definieren den Button
	var button = document.createElement("BUTTON");
	button.style.cssText= 'cursor: pointer; float:right; width:20px; margin-left: auto; background: none; border: none;';
	button.addEventListener("click", (e) => {
		// wichtig, da wir die 'onclick' Funktion ansonsten zum Parent Element durchreichen würden
		e.stopPropagation();
		removeContentModal();
	});
	button.innerHTML = '<span class="closePopup">&times;</span>';

	// wir nutzen den erstellten Div Container um die Überschrift und den Button hinzuzufügen 
	popupHeadlineContainer.innerHTML = "<h3>" + popupTextHeadline + "</h3>";
	popupHeadlineContainer.style.cssText= 'width: 100%; display: flex; margin-bottom: 20px;'
	popupHeadlineContainer.appendChild(button);

	// wir nutzen den erstellten Div Container für den Fließtext
	popupTextContainer.innerHTML = "<p>" + popupText + "</p>";
	popupTextContainer.style.cssText= 'width: 100%';

	// beide Div Container werden dem popup hinzugefügt
	popup.appendChild(popupHeadlineContainer);
	popup.appendChild(popupTextContainer);

	// letzte Anpassungen am Popup
	popup.style.backgroundColor = "#8B914B";
	popup.style.color = "#f2f2f2";
	popup.style.padding = "15px";
	popup.style.fontSize = "15px";

	// Popup wird sichtbar gemacht
	popup.classList.add('displayPopup');

	if((elt.getBoundingClientRect().top + popup.clientHeight) >= modalContent.getBoundingClientRect().bottom) {
		popup.style.top = ((elt.getBoundingClientRect().top - popup.clientHeight) - 7) + 'px';
	} else {
		popup.style.top = (elt.getBoundingClientRect().top + 20) + 'px';
	}

	if(window.innerWidth < 500) {
		popup.style.left = ((window.innerWidth - popup.clientWidth) / 2)+ 'px';
	} else {
		popup.style.left = (elt.getBoundingClientRect().left) + 'px';
	}

	popup.style.animation = 'popupFadeIn .8s'
}

function removeContentModal() {
	popup.style.animation = 'popupFadeOut .8s'
	modalContent.style.overflow = "auto";

	setTimeout(() => {
		modalContent.removeChild(popup);
	}, 750);
}