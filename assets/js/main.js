document.addEventListener('DOMContentLoaded', function () {
  // AOS 초기화
  AOS.init({
    offset: 300,
    duration: 800,
    once: true,
  });

  // Swiper 인스턴스 초기화 (mySwipers)
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

    // 반응형 breakpoints
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

  // 네비게이션바 핵심 요소 선택
  const navbarCollapse = document.getElementById('main_nav'); // HTML의 실제 ID가 'main_nav'인지 다시 확인해주세요.
  const headerBg = document.querySelector('header .bg');

  // Bootstrap JavaScript가 로드되지 않았다면 경고 메시지를 표시하고 스크립트 실행을 중단합니다.
  if (typeof bootstrap === 'undefined') {
    console.warn(
      'Bootstrap JavaScript가 로드되지 않았습니다. 헤더 스크롤 효과 및 메뉴 토글 시 배경색 변경이 정상 작동하지 않을 수 있습니다.'
    );
    // Bootstrap이 없으면 navbarCollapse.classList.contains('show')가 에러날 수 있으므로,
    // 이 경우 스크롤 효과를 아예 중단하거나 다른 방식으로 처리해야 합니다.
    return; // Bootstrap 없으면 더 이상 스크립트 실행하지 않음
  }

  // --- 여기부터 햄버거 메뉴 토글 시 배경색 변경 로직 추가 ---

  // 메뉴가 열리기 시작할 때 (show.bs.collapse 이벤트)
  navbarCollapse.addEventListener('show.bs.collapse', function () {
    if (headerBg) {
      // headerBg 요소가 존재하는지 확인
      headerBg.classList.remove('transparent-navbar'); // 투명 클래스 제거
      headerBg.classList.add('bg-nav'); // 불투명 배경 클래스 추가
    }
  });

  // 메뉴가 닫히기 시작할 때 (hide.bs.collapse 이벤트)
  navbarCollapse.addEventListener('hide.bs.collapse', function () {
    if (headerBg) {
      // headerBg 요소가 존재하는지 확인
      // 메뉴가 닫힐 때는 현재 스크롤 위치에 따라 배경색을 다시 결정합니다.
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 80) {
        // 스크롤이 80px 이상 내려가 있다면
        headerBg.classList.remove('transparent-navbar');
        headerBg.classList.add('bg-nav');
      } else {
        // 스크롤이 80px 미만 (맨 위)이라면
        headerBg.classList.remove('bg-nav');
        headerBg.classList.add('transparent-navbar');
      }
    }
  });

  // --- 햄버거 메뉴 토글 시 배경색 변경 로직 추가 끝 ---

  // 스크롤 이벤트: 헤더 배경색 변경
  // 헤더가 투명하다가 스크롤 시 배경색을 띄우는 효과를 구현합니다.
  window.addEventListener('scroll', function () {
    // 햄버거 메뉴가 열려있지 않을 때만 스크롤 효과가 작동하도록 합니다.
    // (메뉴가 열려있을 때는 위 'show.bs.collapse' 이벤트 리스너가 배경색을 처리하기 때문에 충돌 방지)
    if (navbarCollapse && !navbarCollapse.classList.contains('show')) {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 80) {
        // 스크롤 위치가 80px 이상일 때
        if (headerBg) {
          headerBg.classList.remove('transparent-navbar');
          headerBg.classList.add('bg-nav');
        }
      } else {
        // 스크롤 위치가 80px 미만일 때 (다시 맨 위로 올라왔을 때)
        if (headerBg) {
          headerBg.classList.remove('bg-nav');
          headerBg.classList.add('transparent-navbar');
        }
      }
    }
  });
}); // DOMContentLoaded 이벤트 리스너 끝
