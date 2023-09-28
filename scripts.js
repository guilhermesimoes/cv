function printCv() {
    window.print();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, "", window.location.pathname);
    return false;
}

function onIntersection(entries) {
    var entry = entries[0];
    goTopButton.classList.toggle('opaque', !entry.isIntersecting);
}

var goTopButton = document.querySelector('.js-gotop-button');
var printButton = document.querySelector('.js-print-button');
var skillsHeader = document.querySelector('#summary');

printButton.addEventListener('click', printCv);
goTopButton.addEventListener('click', scrollToTop);
var observer = new IntersectionObserver(onIntersection);
observer.observe(skillsHeader);
