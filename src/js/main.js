/*
    Custom scripts
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
//= ../../bower_components/Swiper/dist/js/swiper.jquery.min.js
//= ../../bower_components/ion.rangeslider/js/ion.rangeSlider.min.js
//= ../../bower_components/fotorama/fotorama.js
//= modernizr-custom.js

$(document).ready(function () {


	// range sliders
	$(".js-price-slider").ionRangeSlider({
	    type: "double",
	    prettify_enabled: true, 
	    min: 1000000,
	    max: 20000000,
	    from: 5000000,
	    to: 16000000,
	    step: 500000,
	    postfix: ' р.'
	});

	$(".js-square-slider").ionRangeSlider({
	    type: "double",
	    min: 50,
	    max: 200,
	    from: 100,
	    to: 150,
	    postfix: ' м²'
	});

	$(".js-floor-slider").ionRangeSlider({
	    min: 1,
	    max: 5,
	    from: 1,
	    grid: true,
	    grid_num: 4,
	    hide_min_max: true,
	    hide_from_to: true
	});

    
    // slider for managers
    if ($(".managers").width != 0) {

    	$nSlides = 1;

    	if ($(window).width() >= 450) {
    		$nSlides = 2;
    	}

    	if ($(window).width() >= 768) {
    		$nSlides = 3;
    	}

    	if ($(window).width() >= 980) {
    		$nSlides = 4;
    	}

    	if ($(window).width() >= 1200) {
    		$nSlides = 5;
    	}

	    var swiper = new Swiper('.swiper-managers', {
	            paginationClickable: true,
	            slidesPerView: $nSlides,
	            spaceBetween: 0,
	        });

	   	$('.swiper-slide').click(function(e) {
		    $(".swiper-slide").removeClass('swiper-slide-active');
		    $(this).addClass('swiper-slide-active');
		});
    }

    // big_slider_object
    var swiper = new Swiper('.big_slider_object', {
        pagination: '.big_slider_object__pagination',
        paginationClickable: true,
        prevButton: '.big_slider_object__prev',
        nextButton: '.big_slider_object__next'
    });
   

    //= parts/_init_gmaps.js

})
