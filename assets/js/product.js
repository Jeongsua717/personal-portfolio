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
        dropdownToggle.removeAttribute('data-bs-toggle');
        dropdownToggle.removeAttribute('role');
        dropdownToggle.removeAttribute('aria-expanded');

        const dropdownMenu = item.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.style.display = 'none';
        }
      } else {
        // 데스크톱 화면일 때: 드롭다운 기능 활성화 (원래대로 복원)
        if (originalDataToggle === 'dropdown') {
          dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
          dropdownToggle.setAttribute('role', originalRole || 'button');
          dropdownToggle.setAttribute(
            'aria-expanded',
            originalAriaExpanded || 'false'
          );

          const dropdownMenu = item.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.style.display = '';
          }
        }
      }
    });
  }

  // 페이지 로드 시 드롭다운 기능 설정
  handleDropdowns();

  // 창 크기가 변경될 때마다 드롭다운 기능 재설정
  window.addEventListener('resize', handleDropdowns);
});
