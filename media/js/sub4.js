const btnTab = document.querySelector(".tab_menu");
const tabContents = document.querySelectorAll(".tab-content");

btnTab.addEventListener("click", function (e) {
    e.preventDefault();

    if(e.target.dataset.id){ //클릭한 태그가 data-id를 가지고 있으면...
        for (let i = 0; i < e.currentTarget.children.length; i++) {
            e.currentTarget.children[i].firstChild.classList.remove("current");
            tabContents[i].classList.remove("show");
        }
        e.target.classList.add("current");
        tabContents[e.target.dataset.id].classList.add("show");
    }
});

//e.target은 내가 콕! 찍어서 클릭한 대상을 말하고, 
//e.currentTarget은 이벤트 리스너가 달려 있는 대상을 말합니다.

//html 태그에 추가된 data- 형식은 개발편의를 위해 임시로 데이터를 담아 놓을 수 있는 변수 같은 거라 보면 됩니다.
//작성할 때는 data-id="0"이라고 적고, 사용하 때는 elem(엘리먼트).dataset.id 형태로 사용하면 됩니다.

