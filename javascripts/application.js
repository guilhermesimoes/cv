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

/* Based on: http://css-tricks.com/snippets/jquery/detect-first-visible-element/ */
var text, id, lastText, $current = $(".current-section");
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var first = false;
    lastText = text;
    $("h2 span").each(function() {
        var offset = $(this).offset();
        if (($(this).height() + offset.top) < (scrollTop + windowHeight) && first === false) {
            if (($(this).height() + offset.top) < scrollTop) {
                text = $(this).text();
                id = $(this).siblings(".header-link").attr("href");
            } else {
                text = "";
            }
        } else {
            first = false;
        }
    });
    if (lastText !== text && text !== "Summary") {
        if (text === "") {
            $current.fadeOut(function() { $(this).text(""); });
        } else {
            $current.attr('href', id).text(text);
            $current.fadeIn();
        }
    }
});
