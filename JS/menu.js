const button = document.querySelector('.navMenuMobile');
const menu = document.querySelector('.navMenuMobileSlider');
const body = document.getElementsByTagName("body")[0];
const menuHamburger = document.getElementById("hamburgerID");

/* bei einem Klick wird die 'open' Klasse hinzugefügt */
button.addEventListener('click', () => {
  menu.classList.toggle('-open');
  body.classList.toggle('bodyOverflow');
  menuHamburger.classList.toggle('openHamburgerMenu');
})

/* Wenn der Nutzer auf den Button klickt wird die 'show' Klasse an das ID Objket gehangen */
function functionFirstDropdown() {
  document.getElementById("firstDropdownId").classList.toggle("show");

  document.getElementById("secondDropdownId").classList.remove("show");
  document.getElementById("thirdDropdownId").classList.remove("show");
  document.getElementById("fourthDropdownId").classList.remove("show");
}

function functionSecondDropdown() {
  document.getElementById("secondDropdownId").classList.toggle("show");

  document.getElementById("firstDropdownId").classList.remove("show");
  document.getElementById("thirdDropdownId").classList.remove("show");
  document.getElementById("fourthDropdownId").classList.remove("show");
}

function functionThirdDropdown() {
  document.getElementById("thirdDropdownId").classList.toggle("show");

  document.getElementById("firstDropdownId").classList.remove("show");
  document.getElementById("secondDropdownId").classList.remove("show");
  document.getElementById("fourthDropdownId").classList.remove("show");
}

function functionFourthDropdown() {
  document.getElementById("fourthDropdownId").classList.toggle("show");

  document.getElementById("firstDropdownId").classList.remove("show");
  document.getElementById("secondDropdownId").classList.remove("show");
  document.getElementById("thirdDropdownId").classList.remove("show");
}

/* schließt das Dropdown-Menu, wenn der Benutzer an den Bildschirmrand klickt */
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnMenu')) {
    var dropdowns = document.getElementsByClassName("dropdownMenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}