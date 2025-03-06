  //겔러리 오버 처리
  $('.grid .grid-image-item').mouseenter(function(){
    $('.grid .grid-image-item').css('filter','brightness(50%) grayscale(100%)');
    $(this).css('filter','brightness(100%)  grayscale(0)');
  });

  $('.grid .grid-image-item').mouseleave(function(){
    $('.grid .grid-image-item').css('filter','brightness(100%)  grayscale(0)');
  });