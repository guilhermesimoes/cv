$(document).ready(function() {
    setBottomPadding();
});

function setBottomPadding() {
    document.body.style.paddingBottom = 0.2 * $(window).height() + "px";
}

$(".js-print-button").click(function() {
    window.print();
});

/* Smooth scroll to target */
$(".js-header-link").click(function() {
    var target = this.getAttribute("href");

    $.scrollTo(target, {
        duration: 250,
        easing: "linear",
        onAfter: function() {
            window.location.hash = target;
        }
    });
    return false;
});

/* Smooth scroll to top */
$(".js-gotop-button").click(function() {
    $.scrollTo(0, {
        duration: 500,
        easing: "linear",
        onAfter: function() {
            history.replaceState(null, "", window.location.pathname);
        }
    });
});

/* Display scroll to top button when necessary */
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".js-gotop-button").fadeIn();
    } else {
        $(".js-gotop-button").fadeOut();
    }
});
