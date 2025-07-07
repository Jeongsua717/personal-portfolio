document.addEventListener('DOMContentLoaded', () => {
  // AOS 초기화
  AOS.init({
    offset: 300,
    duration: 800,
    once: true,
  });

  // Swiper 인스턴스 초기화
  let swipers = new Swiper('.mySwipers, .main_kv', {
    slidesPerView: 1, // 기본적으로 1개의 슬라이드 표시
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 800,

    // --- 여기부터 반응형 breakpoints 추가! ---
    breakpoints: {
      // 화면 너비가 0px 이상일 때 (모든 모바일 포함)
      0: {
        slidesPerView: 1, // 1개 슬라이드
        // 필요한 경우 여기에 다른 옵션 추가 (예: spaceBetween)
      },
      // 화면 너비가 576px 이상일 때 (sm)
      576: {
        slidesPerView: 1,
      },
      // 화면 너비가 768px 이상일 때 (md)
      768: {
        slidesPerView: 1,
      },
      // 화면 너비가 992px 이상일 때 (lg)
      992: {
        slidesPerView: 1,
      },
      // 화면 너비가 1200px 이상일 때 (xl)
      1280: {
        slidesPerView: 1,
      },
      // 화면 너비가 1400px 이상일 때 (xxl)
      1400: {
        slidesPerView: 1,
      },
      // 화면 너비가 1580px 이상일 때 (xxxl)
      1580: {
        slidesPerView: 1,
      },
    },
    // --- 반응형 breakpoints 추가 끝 ---
  });

  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 내비게이션바 요소 선택
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNavUser');

  // 햄버거 버튼 클릭 이벤트: 메뉴 토글
  navbarToggler.addEventListener('click', function () {
    // Bootstrap의 collapse 플러그인이 `aria-expanded`와 `show` 클래스를 자동으로 관리합니다.
    // 여기서는 Bootstrap의 기본 동작을 신뢰합니다.
    // 만약 Bootstrap JS가 제대로 작동하지 않는다면, 아래 라인의 주석을 해제하여 수동으로 'show' 클래스를 토글할 수 있습니다.
    // navbarCollapse.classList.toggle('show');
  });

  // 메뉴 링크 클릭 시 메뉴 닫기
  const navLinks = document.querySelectorAll('#navbarNavUser .nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // 메뉴가 열려있을 때만 닫기 시도
      if (navbarCollapse.classList.contains('show')) {
        // Bootstrap의 collapse 플러그인이 메뉴를 닫도록 트리거
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
        // aria-expanded 속성도 false로 설정 (Bootstrap이 자동으로 하겠지만 명시적으로)
        navbarToggler.setAttribute('aria-expanded', false);
      }
    });
  });

  // 메뉴 외부 클릭 시 메뉴 닫기
  document.addEventListener('click', function (event) {
    // 클릭된 요소가 navbarToggler 또는 navbarCollapse 내부에 포함되지 않는 경우
    const isClickInsideNavbar =
      navbarCollapse.contains(event.target) ||
      navbarToggler.contains(event.target);
    const isMenuOpen = navbarCollapse.classList.contains('show');

    // 메뉴가 열려있고, 클릭이 내비게이션 영역 밖에서 발생했을 때
    if (!isClickInsideNavbar && isMenuOpen) {
      // Bootstrap의 collapse 플러그인이 메뉴를 닫도록 트리거
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
      // aria-expanded 속성도 false로 설정
      navbarToggler.setAttribute('aria-expanded', false);
    }
  });

  // jQuery를 사용한 데스크톱 메가 메뉴 및 스크롤 효과 (기존 코드 유지)
  // $(document).ready(function() { 대신 DOMContentLoaded 안에서 바로 실행)
  let closeTimer;

  function closeMegaMenu() {
    $('.navbar .dropdown').removeClass('show');
    $('.navbar .dropdown-menu').removeClass('show');
    $('.navbar').removeClass('menu-open');
  }

  $('.navbar .dropdown').hover(
    function () {
      // 768px 초과 (데스크톱)에서만 작동하도록 조건 추가
      if (window.innerWidth > 768) {
        clearTimeout(closeTimer);
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
        $('.navbar').addClass('menu-open');
      }
    },
    function () {
      if (window.innerWidth > 768) {
        closeTimer = setTimeout(closeMegaMenu, 250);
      }
    }
  );

  $('.navbar .dropdown-menu').hover(
    function () {
      if (window.innerWidth > 768) {
        clearTimeout(closeTimer);
      }
    },
    function () {
      if (window.innerWidth > 768) {
        closeTimer = setTimeout(closeMegaMenu, 250);
      }
    }
  );

  $(window).scroll(function () {
    // 햄버거 메뉴가 열려있지 않을 때만 스크롤 효과 작동
    if (!navbarCollapse.classList.contains('show')) {
      if ($(this).scrollTop() > 50) {
        $('.transparent-navbar')
          .removeClass('transparent-navbar')
          .addClass('bg-nav');
      } else {
        $('.bg-nav').removeClass('bg-nav').addClass('transparent-navbar');
      }
    }
  });
});
