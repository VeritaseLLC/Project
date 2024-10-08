document.getElementById("menuIcon").addEventListener("click", function() {
    const headerLinks = document.getElementById("header-right");
    headerLinks.classList.toggle("active"); 
});





$(document).ready(function() {
    var $contentDiv = $('#about-section-dotted-line');

    $(window).scroll(function() {
        // Check if the user has scrolled down 300 pixels
        if ($(this).scrollTop() > 100) {
            if ($contentDiv.is(':hidden')) {
                $contentDiv.fadeIn(); // Fade in the content
            }
        } else {
            if ($contentDiv.is(':visible')) {
                $contentDiv.fadeOut(); // Fade out the content
            }
        }
    });
});