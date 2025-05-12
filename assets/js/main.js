const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNavUser');
    navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
    });
    const navLinks = document.querySelectorAll('#navbarNavUser .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
        });
    });
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});
window.addEventListener('scroll', function() {
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