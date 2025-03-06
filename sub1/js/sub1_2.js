// DONE: 각 .slideMenu 클릭 시 해당 boxMove(con$)로 이동
$(".link").click(function(event){
  console.log(".link");
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
});

  
  let slideMenuTop = $(".slideMenu").offset().top;
  
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop(); // 현재 스크롤 위치
    let headerHeight = $("#headerArea").outerHeight();



    // DONE: 스크롤이 slideMenuTop 닿으면 .slideMenu.navOn & header 숨기기
    if (scroll >= slideMenuTop) {
      $(".slideMenu").addClass("navOn");
      $(".boxMove:eq(0)").addClass("on");
      $("#headerArea").hide();
    } else {
      $(".slideMenu").removeClass("navOn");
      $(".boxMove:eq(0)").removeClass("on");
      $("#headerArea").slideDown();
    }
  
    // DONE: Scroll Spy
    $(".boxMove").each(function (idx) {
      let sectionTop = $(this).offset().top - headerHeight - 20;
      let sectionBottom = sectionTop + $(this).outerHeight();
  
      if (scroll >= sectionTop && scroll < sectionBottom) {
        $(".slideMenu li a").removeClass("spy");
        $(`.slideMenu li:eq(${idx}) a`).addClass("spy");
      }
    });
  });
  