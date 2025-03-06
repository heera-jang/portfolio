  //동화 텍스트 슬라이드 처리코드
  $(document).ready(function() {
    var position=0;  //최초위치
    var movesize=1; //이동 크기
    var timeonoff;
    
    $('.textslide p').after($('.textslide p').clone()); //복제
    // $('가져다 놓을 태그').after('기준태그');
    
    function partnerMove(){
         position-=movesize;  // 150씩 감소
         $('.textslide').css('left',position);
         
          if(position < -1720){
                $('.textslide').css('left',0);
                position=0;
          } 
         
    };
  
      timeonoff= setInterval(partnerMove, 10);
     
        $('.product_bottom').hover(function(){
         clearInterval(timeonoff);
     },function(){
         timeonoff= setInterval(partnerMove, 10);	
     }); //마우스엔터시 멈추고 살짝 커지기
     
  
  });




