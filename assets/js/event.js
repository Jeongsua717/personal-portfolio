document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('main_nav');

  navbarToggler.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    } else {
      navbarCollapse.classList.add('show');
      navbarToggler.setAttribute('aria-expanded', 'true');
    }
  });
});
