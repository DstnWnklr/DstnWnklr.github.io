const subMenuButton = document.querySelector('.arrow');
const subNavTitle = document.getElementsByClassName("sub-nav-mobil-title-text")[0];
const subMenuMobileSlider = document.querySelector('.sub-nav-grid-wrapper-slider');
const subNavGridWrapperMobileMenu = document.querySelector('.sub-nav-grid-wrapper-mobile-menu');
const subNavGridWrapperMobil = document.querySelector('.sub-nav-grid-wrapper-mobil');

/* bei einem Klick wird die 'open' Klasse hinzugefügt */
[subMenuButton, subNavTitle].forEach((element) => {
  element.addEventListener('click', () => {
    subMenuMobileSlider.classList.toggle('-open');
    subNavGridWrapperMobileMenu.classList.toggle('-open');
    subMenuButton.classList.toggle('-open');
    subNavGridWrapperMobil.classList.toggle('-open');
  });
});