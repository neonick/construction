/*
    Custom scripts
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
//= ../../bower_components/Swiper/dist/js/swiper.jquery.min.js
//= ../../bower_components/ion.rangeslider/js/ion.rangeSlider.min.js
//= ../../bower_components/fotorama/fotorama.js
//= modernizr-custom.js
//= desvg.js


window.addEventListener('load', function(){
	deSVG('.js-replace-svg', true);
});



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


    // fix header
    function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var winHeight = $(window).height();

		if (window_top > 0)
			$('.js-sticky-header').addClass('is-fixed')
		else
			$('.js-sticky-header').removeClass('is-fixed')
    	};

    // hide menu
    function hide_menu() {
		var window_top = $(window).scrollTop();

    	if (window_top > 800) {
    		$('.object_menu').addClass('is-hidden')
    	}
    	else {
    		$('.object_menu').removeClass('is-hidden')
    	};
    };

    $(function() {
        if ($(window).width() > 768) {
            $(window).scroll(sticky_relocate);
            sticky_relocate();
        }
    });

     $(function() {
        if ($(window).width() > 768) {
            $(window).scroll(hide_menu);
            hide_menu();
        }
    });



    // mobile menu
    $(document).on("click", ".js-open-mobile-menu", function() {
     	if ($(this).hasClass("is-opened")) {
     		$(".main_menu").removeClass("is-opened");
     		$(this).removeClass("is-opened");
     	}
     	else {
     		$(".main_menu").addClass("is-opened");
     		$(this).addClass("is-opened"); 
     	}
    });




    video_resize();

    //= parts/_init_gmaps.js

});


$(window).resize(function(){
	video_resize();
});

function video_resize()
{
	if ( ($(".full_block ").width() / 16 * 9) > $(".full_block ").height() ) // horizontal
	{
		// $(".static-poster").css("background-size", "100% auto");
		$(".bg_video").css({
			width : "100%",
			height : "auto"
		});
	}
	else //vertical
	{
		// $(".static-poster").css("background-size", "auto 100%");
		$(".bg_video").css({
			width : "auto",
			height : "100%"
		});
	}
}