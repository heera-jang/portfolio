	window.onload = function(){
		var swiper = new Swiper('.swiper-container', {
			pagination: {
              el: '.swiper-pagination',
            },
					 slidesPerView: 'auto',
					 paginationClickable: true,
					 spaceBetween: 0,
					 freeMode: true,
			navigation: {
        		nextEl: '.swiper-button-next',
        		prevEl: '.swiper-button-prev',
      		}
		 });
	};
