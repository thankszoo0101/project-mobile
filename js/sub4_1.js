// 정보공개 업무처리절차 확대보기 팝업

// '확대보기'를 누르면
$('.guide_btn').click(function(e){
    e.preventDefault();                          // a 태그가 맨 위로 튀는 것 막기

    $('.guide_modal').fadeIn('fast');            // 어두운 판 열기
    $('.guide_popup').fadeIn('slow');            // 팝업창 열기
});

// 닫기 버튼이나 어두운 판을 누르면 닫기
$('.guide_close, .guide_modal').click(function(e){
    e.preventDefault();
    $('.guide_modal').fadeOut('fast');
    $('.guide_popup').fadeOut('fast');
});