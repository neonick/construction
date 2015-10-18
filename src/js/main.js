/*
    Custom scripts
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
//= ../../bower_components/Swiper/dist/js/swiper.jquery.min.js

$(document).ready(function () {

    
    
    if ($(".managers").width != 0) {
	    var swiper = new Swiper('.swiper-managers', {
	            slidesPerView: 5,
	            paginationClickable: true,
	            spaceBetween: 0,
	            paginationClickable: true
	        });

	   	$('.swiper-slide').click(function(e) {
		    $(".swiper-slide").removeClass('swiper-slide-active');
		    $(this).addClass('swiper-slide-active');
		});
    }
   

    //= parts/_init_gmaps.js

})
