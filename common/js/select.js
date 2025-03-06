
$('.family .arrow').toggle(function(){
    $('.family .aList').slideDown('slow');	
    $(this).children('span').html('<i class="fa-solid fa-xmark"></i>').animate(
        {rotate:"90deg"}, 500);	
},function(){   
    $('.family .aList').slideUp('fast');	
    $(this).children('span').html('<i class="fa-solid fa-xmark"></i>').animate(
        {rotate:"-45deg"}, 500);	
});



//tab키 처리
  $('.family .arrow').on('focus', function () {        
          $('.family .aList').slideDown('slow');	
   });
   $('.family .aList li:last a').on('blur', function () {        
          $('.family .aList').slideUp('fast');
   });

// top이동 버튼
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
   
   
    // $('.text').text(scroll);

    if(scroll>300){ //300이상의 거리가 발생되면
        $('.move_top').fadeIn('fast');  //top보여라~~~~
    }else{
        $('.move_top').fadeOut('normal');//top안보여라~~~~
    }
});
           
$('.move_top').click(function(e){
    e.preventDefault();
     //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({"scrollTop":0},1000);  // 해당 위치로 스크롤 탑 값을 부드럽게 이동시키는 코드.
 });

 
 //검색창 여닫기
 $('.top_menu ul li:eq(2) a').toggle(function(){
      $('.product_box').fadeIn('slow');
 },function(){
      $('.product_box').fadeOut('fast');
 }); 