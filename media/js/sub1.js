 //sub1 이미지 호버 처리
 $('#content .plane_box div').mouseenter(function(){
    $('#content .plane_box div ul li').css('display','block');
    $(this).css('transform','scale(1.1)');
  });

  $('#content .plane_box div').mouseleave(function(){
    $('#content .plane_box div ul li').css('display','none');
    $(this).css('transform','scale(1)')

  });