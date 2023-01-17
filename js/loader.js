var preloader = $('#preloader')
var content = $('header, main')

// rekurziv fade out
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        // loader.style.opacity = opacity;
        preloader.css('opacity', opacity)
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    content.show()
    preloader.hide()
}

document.addEventListener("DOMContentLoaded", function() {
    content.hide()
    $('#preloader *').show()
    loadNow(3.7);
});