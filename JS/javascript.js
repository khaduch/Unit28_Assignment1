jQuery(document).ready(function($) {
    $('.type-it').typeIt({
        content: 'Hi, my name is Liam Docherty.'
    });
});

const nav = document.querySelector('nav');

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;

//     if (scrollY < 100) {
//         nav.classList.remove('scrolled-nav');
//     } else {
//         nav.classList.add('scrolled-nav');
//     }
// });
// initialize the smooth scroll code
var scroll = new SmoothScroll('a[href*="#"]');
