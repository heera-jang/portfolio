
  //겔러리 오버 처리
  $('.gallery_box div').mouseenter(function(){
    $('.gallery_box div').css('filter','brightness(50%) grayscale(100%)');
    $(this).css('filter','brightness(100%)  grayscale(0)');
  });

  $('.gallery_box div').mouseleave(function(){
    $('.gallery_box div').css('filter','brightness(100%)  grayscale(0)');
  });




  //행성들 swiper
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 200,
      modifier: 1,
      slideShadows : false,
    },




  });


 //topMove 버튼 transition 효과주기
  $('#footerArea .top .topMove img').mouseenter(function(){
    $('#footerArea .top .topMove img').css('transform','rotate(-40deg)');
    $('#footerArea .top .topMove img').css('transform-origin','50% 50%');
  });

  $('#footerArea .top .topMove img').mouseleave(function(){
    $('#footerArea .top .topMove img').css('transform','rotate(0deg)');
  });

//   $(window).on('scroll',function(){
//     let scroll = $(window).scrollTop();  
//     let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
//     //console.log(scrollBottom);
        
//         if(scroll>600){
//             $('#headerArea').css({'background':'rgba(0,0,0,.8)'});
//             $('.moveTop').fadeIn('slow');
//             $('.darkM').fadeIn('slow');
//             up_down = 'down';
//         }else{
//             if(on_off==false){
//                 $('#headerArea').css({'background':'none','backdrop-filter':'none','box-shadow':'none'});
//                 $('.moveTop').fadeOut('fast');
//                 $('.darkM').fadeOut('fast');
//             }
//             up_down = 'up';
//         }; 
        
// });

  // dark mode

  $('.darkM').on('click', function() {
    $('body').toggleClass('dark-mode');
    $(this).toggleClass('dark');
    $('content').toggleClass('dark-mode');
    $('.rotated_one_conic_box, .rotated_one_conic_box_demo').toggleClass('dark');
    $('.morebtn').toggleClass('dark');
    $('.about').toggleClass('dark');
    $('.swiper1').toggleClass('dark');
    $('.show').toggleClass('dark');
    $('#footerArea').toggleClass('dark');
    
    if ($('body').hasClass('dark-mode')) {
        $('.img1 img').attr('src', './images/about1_d.jpg');
        $('.show').css({'background':'url(./images/show_back_dark.png) bottom center no-repeat','background-size':'cover'});
    } else {
        $('.img1 img').attr('src', './images/about1.jpg');
        $('.show').css({'background':'url(./images/show_back_group.png) bottom center no-repeat','background-size':'cover'});
    }
});
