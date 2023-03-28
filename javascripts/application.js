function printCv() {
    window.print();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    history.replaceState(null, "", window.location.pathname);

    return false;
}

function scrollToTarget(event) {
    event.preventDefault();

    var target = this.getAttribute('href');

    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
    });

    history.replaceState(null, "", target);
}

function onIntersection(entries) {
    var entry = entries[0];
    goTopButton.classList.toggle('opaque', !entry.isIntersecting);
}

var goTopButton = document.querySelector('.js-gotop-button');
var printButton = document.querySelector('.js-print-button');
var headerLinks = document.querySelectorAll('.js-header-link');
var skillsHeader = document.querySelector('#summary');

printButton.addEventListener('click', printCv);
goTopButton.addEventListener('click', scrollToTop);
for (var i = 0, len = headerLinks.length; i < len; i++) {
    headerLinks[i].addEventListener('click', scrollToTarget);
}

var observer = new IntersectionObserver(onIntersection, {
  root: null,   // default is the viewport
  threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
});
observer.observe(skillsHeader);
