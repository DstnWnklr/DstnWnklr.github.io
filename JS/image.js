var preview = document.getElementById("previewFotoPopup");
var previewInner = document.getElementById("previewFotoPopupInner");

function showFotoPopup(fotoPfad) {
    body.style.overflow = 'hidden';
    preview.style.display = 'block';
    previewInner.style.backgroundImage = 'url('+fotoPfad+')';
    previewInner.style.backgroundRepeat = "no-repeat";
    previewInner.style.backgroundPosition = "center";
    previewInner.style.backgroundSize = 'contain, auto';
}

function closeFotoPopup() {
    preview.style.display = 'none';

    if(sessionStorage.getItem('modal')) {
        console.log("bin im Modal");
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
        console.log("bin nicht im Modal");
    }
}