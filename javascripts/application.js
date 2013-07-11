/* Smooth scroll */
$(".header-link, .current-section").click(function() {
    var target = $(this).attr("href");
    $.scrollTo(target, {
        duration: 250,
        easing: "linear",
        onAfter: function() {
            window.location.hash = target;
        }
    });
    return false;
});

/* Scroll to top */
$(".gotop").click(function() {
    $.scrollTo(0, {
        duration: 500,
        easing: "linear",
        onAfter: function() {
            window.location.hash = "";
        }
    });
    return false;
});

/* Display scroll to top button when necessary */
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".gotop").fadeIn();
    } else {
        $(".gotop").fadeOut();
    }
    return false;
});

/* Show shadow to indicate the user can scroll */
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $(".top-shadow").css({ "opacity": 1 });
    } else {
        $(".top-shadow").css({ "opacity": 0 });
    }
    if ($("body").height() - $("body").scrollTop() - $(window).height() > 50) {
        $(".bottom-shadow").css({ "opacity": 1 });
    } else {
        $(".bottom-shadow").css({ "opacity": 0 });
    }
    return false;
}).trigger('scroll');

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
