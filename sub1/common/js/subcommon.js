 //전체 약품검색
 $('#btn1').click(function(){
    var pname = $('#text').val();  //베이스
    if(pname){  //검색어를 입력했으면...
      location.href = 'https://flxmf1122.mycafe24.com/sub3/sub3_3.html?pname='+  pname;
    }
    else{   //검색어를 입력하지 않았다면...
       alert('검색어를 입력하세요');
     }
 });