//모든 페이지 공통 js





//헤더, 푸터 불러오기 (load) - 먼저 불러와 둔 뒤, 아래 클릭 코드는 document에 걸어 두었기 때문에 나중에 생긴 버튼도 작동함
$('#headerArea').load('./common/header.html');
$('#footerArea').load('./common/footer.html');

//센드위치메뉴 열고 닫기 처리코드

   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(document).on('click', '.menu_ham', function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       
       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //네비의 높이를 전체 전체 페이지의 높이로...

      if(op==false){  //메뉴가 닫혀있는 상태에서 클릭했냐??
        $('#headerArea .modal').show();
        $("#gnb").animate({right:0,opacity:1}, 'fast');  //네비가 우측에서 날라온다
        $('#headerArea').addClass('mn_open');  //닫기버튼 모양
        $('.ham').addClass('active');  //햄버거 -> X 애니메이션
        op=true;  //상태->열림!
      }else{  //true -> 메뉴가 열려있는 상태에서 클릭했냐??
        $('#headerArea .modal').hide();
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast'); //네비를 우측으로 보낸다(메뉴닫기)
        $('#headerArea').removeClass('mn_open'); //열기버튼 모양
        $('.ham').removeClass('active'); //X -> 햄버거 애니메이션
        op=false;//상태->닫기!
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false]; //가정법 false(서브닫힘) , true(열림)
    var arrcount=onoff.length;  // 배열의 개수 6
    
    //console.log(arrcount);
    
    $(document).on('click', '#gnb .depth1 h3 a', function(e){  //1depth메뉴를 클릭하면
      e.preventDefault();
        
      var ind=$(this).parents('.depth1').index();  // 0~5
      //var ind=$(this).index('#gnb .depth1 h3 a');
        
      //console.log(ind);
        
       if(onoff[ind]==false){  //각각의 1depth메뉴의 서브가 닫혀있냐??
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
         for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 배열값을 false
         onoff[ind]=true;  //자신의 대한 배열만 true로 변경
           
         $('.depth1 .icon').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');   // 모든 메뉴가 닫혀있다 (+)
         $(this).find('.icon').html('<span class="material-symbols-outlined">keyboard_arrow_up</span>');   //자신만 메뉴가 열려있다 (-)
            
       }else{ //true -> 각각의 1depth메뉴의 서브가 열려있냐??
         $(this).parents('.depth1').find('ul').slideUp('fast'); //지 서브를 닫아라~~
         onoff[ind]=false;  // true->false 
           
         $(this).find('.icon').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');     // 모든 메뉴가 닫혀있다 (+)
       }
    });  
    
    
 //헤더영역 배경색상 스크롤 처리 + top메뉴 나타나기

   $(window).on('scroll',function(){//스크롤의 거리가 발생하면
      var vh = $('.visual').height();  //비주얼의 높이 (스크롤할 때마다 새로 잼)
      var hh = $('#headerArea').height(); //헤더의 높이
      var scroll = $(window).scrollTop();  //스크롤의 거리

       if(scroll>vh-hh){ //스크롤이 비주얼 보다 아래로 내려올 때
            $('#headerArea').css('background','rgba(255,255,255,1)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.3)');
            $('#footerArea .top_move').fadeIn('fast');
        }else{
            $('#headerArea').css('background','rgba(255,255,255,.8)').css('box-shadow','none');
            $('#footerArea .top_move').fadeOut('fast');
        } 
   });

   //top버튼 클릭 시 상단으로 부드럽게 이동
   $(document).on('click', '.top_move', function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},700); //스크롤을 부드럽게 목표지점까지 이동시키는 코드
  });