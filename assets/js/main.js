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

  // 네비게이션 토글 버튼 기능
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

  // --- 여기부터 모바일 드롭다운 메뉴 비활성화/활성화 기능 추가 ---
  function handleDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown'); // 드롭다운을 포함하는 nav-item
    const breakpoint = 991.98; // 모바일/데스크톱 기준 (CSS 미디어 쿼리와 동일)

    dropdownItems.forEach((item) => {
      const dropdownToggle = item.querySelector(
        '.nav-link[data-bs-toggle="dropdown"]'
      ); // 드롭다운 토글 링크
      if (!dropdownToggle) return; // 드롭다운 토글이 없으면 건너뛰기

      // 원래 속성 저장 (나중에 복원하기 위해)
      const originalDataToggle = dropdownToggle.getAttribute('data-bs-toggle');
      const originalRole = dropdownToggle.getAttribute('role');
      const originalAriaExpanded = dropdownToggle.getAttribute('aria-expanded');

      if (window.innerWidth <= breakpoint) {
        // 모바일 화면일 때: 드롭다운 기능 비활성화
        // data-bs-toggle 속성을 제거하여 Bootstrap 드롭다운 기능 중지
        dropdownToggle.removeAttribute('data-bs-toggle');
        dropdownToggle.removeAttribute('role');
        dropdownToggle.removeAttribute('aria-expanded');

        // Bootstrap 드롭다운 인스턴스가 있다면 제거 (선택 사항, 필요시 주석 해제)
        // const dropdownInstance = bootstrap.Dropdown.getInstance(dropdownToggle);
        // if (dropdownInstance) {
        //   dropdownInstance.dispose();
        // }

        // 드롭다운 메뉴 자체를 숨김 (CSS에서도 display: none 처리하는 것이 좋음)
        const dropdownMenu = item.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.style.display = 'none';
        }
      } else {
        // 데스크톱 화면일 때: 드롭다운 기능 활성화 (원래대로 복원)
        if (originalDataToggle === 'dropdown') {
          // 원래 'dropdown'이었다면 복원
          dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
          dropdownToggle.setAttribute('role', originalRole || 'button');
          dropdownToggle.setAttribute(
            'aria-expanded',
            originalAriaExpanded || 'false'
          );

          // 드롭다운 메뉴 스타일 초기화 (CSS에서 처리되도록)
          const dropdownMenu = item.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.style.display = ''; // 인라인 스타일 제거
          }

          // Bootstrap 드롭다운 인스턴스 다시 초기화 (필요시 주석 해제)
          // new bootstrap.Dropdown(dropdownToggle);
        }
      }
    });
  }

  // 페이지 로드 시 드롭다운 기능 설정
  handleDropdowns();

  // 창 크기가 변경될 때마다 드롭다운 기능 재설정
  window.addEventListener('resize', handleDropdowns);
});
