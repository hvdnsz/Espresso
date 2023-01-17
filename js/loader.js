var loader;

// rekurziv fade out
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        // loader.style.opacity = opacity;
        $('#preloader').css('opacity', opacity)
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    $('body *').show()
    $('#preloader').hide()
}

document.addEventListener("DOMContentLoaded", function() {
    $('body *').hide()
    $('#preloader').show()
    $('#preloader *').show()
    loadNow(4);
});