document.addEventListener('DOMContentLoaded', function () {
  // AOS 초기화
  AOS.init({
    offset: 300,
    duration: 800,
    once: true,
  });

  // Swiper 인스턴스 초기화 (mySwipers)
  let swipers = new Swiper('.mySwipers, .main_kv', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 800,
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      1280: { slidesPerView: 1 },
      1400: { slidesPerView: 1 },
      1580: { slidesPerView: 1 },
    },
  });

  // Swiper 인스턴스 초기화 (mySwiper)
  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

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
  // --- 스크롤 이벤트: 헤더 배경색 변경 ---
  window.addEventListener('scroll', function () {
    // 햄버거 메뉴가 열려있지 않고, 데스크톱 드롭다운 메뉴도 활성화되어 있지 않을 때만 스크롤 효과 작동
    if (
      navbarCollapse &&
      !navbarCollapse.classList.contains('show') &&
      !mainHeader.classList.contains('mega-menu-active')
    ) {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 80) {
        if (headerBg) {
          headerBg.classList.remove('transparent-navbar');
          headerBg.classList.add('bg-nav');
        }
      } else {
        if (headerBg) {
          headerBg.classList.remove('bg-nav');
          headerBg.classList.add('transparent-navbar');
        }
      }
    }
  });
});
