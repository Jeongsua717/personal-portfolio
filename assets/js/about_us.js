document.addEventListener('DOMContentLoaded', () => {
             AOS.init({
                 duration: 800
             });
        });

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    let scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        navbar.classList.add('scrolled-navbar');
        navbar.classList.remove('transparent-navbar');
    } else {
        navbar.classList.remove('scrolled-navbar');
        navbar.classList.add('transparent-navbar');
    }
});
