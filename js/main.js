//index페이지에서 사용되는 js

//스플래시 스크린 처리코드
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  // 스플래시가 있는 페이지(index)이면서, 방문 기록('splashVisited')이 없는 '첫 방문자'일 때만 실행합니다.
  if (splash && !sessionStorage.getItem('splashVisited')) {
    
    // 1. 숨겨져 있던 스플래시 스크린을 화면에 표시합니다.
    splash.classList.add('active');

    // 2. 1초(1000ms) 후에 페이드 아웃 애니메이션을 실행합니다.
    setTimeout(() => {
      splash.classList.add('fade-out');
      // 3. 다음 방문 시에는 뜨지 않도록 세션에 기록을 저장합니다.
      sessionStorage.setItem('splashVisited', 'true');
    }, 1000);
  }
  // 이미 방문한 사용자는 아무런 클래스도 추가되지 않으므로 
  // CSS의 기본값인 display: none 상태가 유지되어 깜빡이지 않습니다.
});


//메인 비주얼 슬라이드
var visualSwiper = new Swiper('.visual .swiper-container', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.visual .swiper-pagination', clickable: true }
});

//ESG 카드 슬라이드 (양옆 카드가 살짝 보이게)
var esgSwiper = new Swiper('.esg .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 12,
    loop: true
});

//기관소개 갤러리 (작은 사진을 누르면 큰 사진이 바뀜)
//작은 사진 스와이퍼를 먼저 만들어야 큰 사진 스와이퍼가 연결할 수 있음
var aboutThumbs = new Swiper('.about .gallery-thumbs', {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});
var aboutGallery = new Swiper('.about .gallery', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.about .swiper-button-next',
        prevEl: '.about .swiper-button-prev'
    },
    thumbs: { swiper: aboutThumbs }
});