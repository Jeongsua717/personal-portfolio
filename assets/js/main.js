document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        offset: 300,
        duration: 800,
        once: true
    });
});


let swipers = new Swiper('.mySwipers , .main_kv', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 800,
});






const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNavUser');
navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});
const navLinks = document.querySelectorAll('#navbarNavUser .nav-link');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navbarCollapse.classList.remove('show');
    });
});
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

$(document).ready(function() {
    let closeTimer; 

    function closeMegaMenu() {
        $('.navbar .dropdown').removeClass('show'); 
        $('.navbar .dropdown-menu').removeClass('show');
        $('.navbar').removeClass('menu-open');
    }

    $('.navbar .dropdown').hover(
        function() { 
            clearTimeout(closeTimer);
            $(this).addClass('show');
            $(this).find('.dropdown-menu').addClass('show');
            $('.navbar').addClass('menu-open');
        },
        function() { 
            closeTimer = setTimeout(closeMegaMenu, 250); 
        }
    );

    $('.navbar .dropdown-menu').hover(
        function() {
             clearTimeout(closeTimer);
        },
        function() {
            closeTimer = setTimeout(closeMegaMenu, 250);
        }
    );

    $(window).scroll(function() {
        if (!$('.navbar').hasClass('menu-open')) {
            if ($(this).scrollTop() > 50) {
                $('.transparent-navbar').removeClass('transparent-navbar').addClass('bg-nav');
            } else {
                $('.bg-nav').removeClass('bg-nav').addClass('transparent-navbar');
            }
        }
    });
});
