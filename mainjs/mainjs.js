//메인 비주얼 영역 처리코드

// JavaScript Document

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#fff'); //첫번째 불켜
    $('.btn1').css('width','200px'); // 버튼의 너비 증가
    $('.btn1').addClass('on');

    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').css('top',420).css('opacity',1);
 
    function gallery_ch(){
      $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
	    $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  

      $('.mbutton').css('background','rgba(255,255,255,.5)'); //버튼 모두 불꺼
      $('.mbutton').css('width','20px');
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','200px');
      
      $('.gallery li span').css('top',500).css('opacity',0);
      $('.gallery .link'+cnt).find('span').css('top',420).css('opacity',1);
    }

    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
      gallery_ch();
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시 //함수 안에 클릭안 매개변수가 담긴다.
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     


    cnt = $(this).index('.mbutton')+1; 
    console.log(cnt);

      gallery_ch();

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-solid fa-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   //중지!
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
		   onoff=true; //동작!
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    gallery_ch();


    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
    }
  });


    //반복되는 문법이면, 1번스타일의 함수만들어서 콜! 부르기







//상품 갤러리 영역 처리코드
$(document).ready(function() {
  var position=0;  //최초위치
  var movesize=1; //이동 크기
  var timeonoff;
  
  $('.product_bottom ul').after($('.product_bottom ul').clone()); //복제
  // $('가져다 놓을 태그').after('기준태그');
  
  function partnerMove(){
       position-=movesize;  // 150씩 감소
       $('.product_bottom').css('left',position);
       
        if(position < -1950){
              $('.product_bottom').css('left',0);
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

//R&D영역 처리코드
// li에 마우스가 올라갈 때
$('.navi li').mouseenter(function() {
  var imgPath = $(this).attr('data-image');
  $('.photo').css({ 
      'background-image':'url('+ imgPath +')' 
  });
});



//연구개발 영역 처리코드
  var management = [
      {
          imgsrc:'management1.jpg',
          title:'ESG 철학', 
          text:'동화약품은 1897년 창립된 국내 최초 제약사입니다.&ldquo;민족이 합심하면 잘 살수 있다.&rdquo;는 정신 아래 국민의 안전과 건강을 최우선으로 생각하고 있습니다. 최장수 제약사로 사회적 책임을 다하는 신뢰할 수 있는 기업이 되겠습니다. 존중과 배려로 사회적 가치를 창출하고, 에너지 전환시대를 맞아 &lsquo;ESG경영&rsquo;을 더욱 강화하겠습니다.',
          link:'./sub4/sub4_1.html',
      },
      {
          imgsrc:'management2.jpg',
          title:'환경 경영', 
          text:'동화약품은 환경경영시스템 국제표준을 획득하여 환경에 관한 법률과 규범을 선도적으로 준수하고 환경보호를 이루고자 다음과 같이 환경기본방침을 수립하여 환경경영활동을 적극적으로 수행하고 있습니다.',
          link:'./sub4/sub4_2.html',
      },
      {
          imgsrc:'management3.jpg',
          title:'인권 경영', 
          text:'동화약품은 도전정신과 진취적인 사고로 새로운 기회를 개척하며, 창의적이고 유연한 사고로 변화와 혁신을 이끌어갑니다. 전문성을 바탕으로 적극적으로 행동하고, 긍정적인 태도로 세상에 가치를 더하는 인재를 지향합니다.', 
          link:'./sub4/sub4_3.html',
      },
      {
          imgsrc:'management4.jpg',
          title:'윤리 경영', 
          text:'동화정신에 내포되어 있는 봉사정신과 정도경영의 DNA는 127년간 우리 동화약품의 문화 속에 살아 숨쉬고 있으며 우리 모두와 함께 하고 있습니다. 우리의 소중한 자산인 윤리경영을 다 함께 실천하면서 임직원 모두가 한 단계 더 도약하고 성장하는 한 해가 되길 기대합니다.',  
          link:'./sub4/sub4_4.html',
      },
    ];


  $('.contlist img').attr('src','./images/'+management[0].imgsrc);
  $('.contlist dl dt').html(management[0].title);
  $('.contlist dd:eq(0)').html(management[0].text);
  $('.contlist dd:eq(1) a').attr('href','/sub2/sub2_'+management[0].link);

  $('.tab_menu ul li:eq(0)').addClass('active');
  $('.management_content .tab_menu li h4').addClass('active');

  $('.tab_menu ul li').click(function(e){
      e.preventDefault();
    
      var ind = $(this).index('.tab_menu ul li');  // 0~3

      $('.tab_menu ul li').removeClass('active');
      $(this).addClass('active');

      $('.management_content .tab_menu li h4').removeClass('active');
      $(this).find('h4').addClass('active');

      $('.contlist img').attr('src','./images/management'+(ind+1)+'.jpg');
      $('.contlist img').hide().fadeIn('fast');
      $('.contlist dl dt').html(management[ind].title);
      $('.contlist dd:eq(0)').html(management[ind].text);
      $('.contlist dd:eq(1) a').attr('href','./sub4/sub4_'+(ind+1)+'.html');

  });


