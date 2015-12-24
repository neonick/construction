/*
    Custom scripts
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
//= ../../bower_components/Swiper/dist/js/swiper.jquery.min.js
//= ../../bower_components/ion.rangeslider/js/ion.rangeSlider.min.js
//= ../../bower_components/fotorama/fotorama.js
//= ../../bower_components/skrollr/dist/skrollr.min.js
//= ../../bower_components/jquery.scrollTo/jquery.scrollTo.min.js
//= ../../bower_components/raphael/raphael-min.js
//= ../../bower_components/tabslet/jquery.tabslet.min.js
//= ../../bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js

//= modernizr-custom.js
//= scrollyeah.min.js

$(document).ready(function () {


	$(".phone").mask("(999) 999-99-99");

	$(".js-scroll-next").click(function() {
        $('body').scrollTo($(".geometry"), 500);
    });




    var groups = {};
    $('.dinamic__grid').each(function() {
      var id = parseInt($(this).attr('data-group'), 10);
      if(!groups[id]) {
        groups[id] = [];
      } 
      groups[id].push( this );
    });


    $.each(groups, function() {
      
    	$(this).magnificPopup({
    		delegate: 'a', 
    		type: 'image',
    		closeOnContentClick: true,
    		closeBtnInside: false,
    		fixedContentPos: true,
    		mainClass: 'mfp-no-margins mfp-with-zoom dinamic_popup',
    		gallery: {
    			enabled: true,
    			navigateByImgClick: true,
    			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    		},
    		image: {
    			verticalFit: true
    		},
    		zoom: {
    			enabled: true,
    			duration: 300
    		}
    	});
      
    });


	


	function getPosition(e) {
	  var posx = 0;
	  var posy = 0;

	  if (!e) var e = window.event;

	  if (e.pageX || e.pageY) {
	    posx = e.pageX;
	    posy = e.pageY;
	  }
	  else if (e.clientX || e.clientY) {
	    posx = e.clientX + document.body.scrollLeft
	      + document.documentElement.scrollLeft;
	    posy = e.clientY + document.body.scrollTop
	      + document.documentElement.scrollTop;
	  }
	  return {
	    x: posx,
	    y: posy
	  }
	}

	if ($(".floor_label") != 0) {
		document.addEventListener( "mousemove", function(e) {
		  var x = getPosition(e).x;
		  var y = getPosition(e).y;
		  $(".floor_label").css({top: y-40, left: x+10});
		});
	};

	if ($(".app_label") != 0) {
		document.addEventListener( "mousemove", function(e) {
		  var x = getPosition(e).x;
		  var y = getPosition(e).y;
		  $(".app_label").css({top: y-200, left: x-270});
		});
	};

	if ($(window).width() > 1200 && $(".geometry").length !=0 ) {

		skrollr.init({
			smoothScrolling: false,
			mobileDeceleration: 0.004
		});

	}


	// range sliders
	var min, max, min2, max2;

	$(".js-price-slider").ionRangeSlider({
	    type: "double",
	    prettify_enabled: true, 
	    min: 1,
	    max: 20,
	    from: 1,
	    to: 20,
	    step: 0.1,
	    postfix: ' млн. р.',
	    hide_min_max: true,
    	hide_from_to: false,
    	onChange: function (data) {
    	    min = data.min;
    	    max = data.max;
    	}
	});

	$(".js-price-slider").on("change", function (data) {
		var $this = $(this),
			value = $this.prop("value").split(";");
		
		if (value[0] > min || value[1] < max) { 
			$(this).closest(".search_form__block").next(".btn").addClass("active");
		}
		else {
			$(this).closest(".search_form__block").next(".btn").removeClass("active");
		}
	});

	$(".js-square-slider").ionRangeSlider({
	    type: "double",
	    min: 50,
	    max: 200,
	    from: 50,
	    to: 200,
	    postfix: ' м²',
	    hide_min_max: true,
    	hide_from_to: false,
    	onChange: function (data) {
    	    min2 = data.min;
    	    max2 = data.max;
    	}
	});

	$(".js-square-slider").on("change", function (data) {
		var $this = $(this),
			value = $this.prop("value").split(";");
		
		if (value[0] > min2 || value[1] < max2) { 
			$(this).closest(".search_form__block").next(".btn").addClass("active");
		}
		else {
			$(this).closest(".search_form__block").next(".btn").removeClass("active");
		}
	});

	$(".js-floor-slider").ionRangeSlider({
	    from: 0,
	    grid: true,
	    grid_num: 4,
	    hide_min_max: true,
	    hide_from_to: true,
	    values: [
	        "1+", "2+", "3+",
	        "4+", "ПХ"
	    ]
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
	            centeredSlides: true,
	            loop: true
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

    	if (window_top > 100) {
    		$('.object_menu').addClass('is-hidden');
    		$('.big_slider_object__prev').addClass('short');
    	}
    	else {
    		$('.object_menu').removeClass('is-hidden');
    		$('.big_slider_object__prev').removeClass('short');
    	};

	    $('.object_menu').hover(
		    function(){
		    	$('.object_menu').removeClass('is-hidden');
		    	$('.big_slider_object__prev').removeClass('short');
		    },
		    function(){
		      if (window_top > 100) {
		      	$('.object_menu').addClass('is-hidden');
		      	$('.big_slider_object__prev').addClass('short');
		      }
		});
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
    $(document).on("click", ".js-open-mobile-menu", function(e) {
    	e.preventDefault();
     	if ($(this).hasClass("is-opened")) {
     		$(".main_menu").removeClass("is-opened");
     		$(this).removeClass("is-opened");
     	}
     	else {
     		$(".main_menu").addClass("is-opened");
     		$(this).addClass("is-opened"); 
     	}
    });


    $(document).on("click", ".js-open_podbor_block", function(e) {
    	e.preventDefault();
     	if ($(this).hasClass("is-opened")) {
     		$(".liter_podbor_block").removeClass("is-opened");
     		$(this).removeClass("is-opened").text("Подобрать по параметрам");
     	}
     	else {
     		$(".liter_podbor_block").addClass("is-opened");
     		$(this).addClass("is-opened").text("Скрыть параметры"); 
     	}
    });


	$(".js-open-backcall").magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        overflowY: "auto",
        alignTop: false
    });


    $(".js-open-avail-popup").magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        overflowY: "auto",
        alignTop: false
    });

    $(".js-open-message-popup").magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        overflowY: "auto",
        alignTop: false
    });

    $(".js-open-question-popup").magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        overflowY: "auto",
        alignTop: false
    });

    $(".js-open-action-popup").magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        overflowY: "auto",
        alignTop: false
    });

    $('.js-open-apartment-details').magnificPopup({
		type: 'image',
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom dinamic_popup',
		image: {
			verticalFit: true
		},
		alignTop: false
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