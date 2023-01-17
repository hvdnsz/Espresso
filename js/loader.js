var loader;

// rekurziv fade out
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        // loader.style.opacity = opacity;
        $('#loader').css('opacity', opacity)
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    $('body *').show()
    $('#loader').hide()
}

document.addEventListener("DOMContentLoaded", function() {
    $('body *').hide()
    $('#loader').show()
    loadNow(4);
});