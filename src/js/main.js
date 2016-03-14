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


	$('.neo_input').bind("change keyup input click", function() {
		if ($(this).hasClass("phone")) {
			return false;
		};

	    if (this.value.match(/[^а-яА-Яa-zA-Z -]/g)) {
	        this.value = this.value.replace(/[^а-яА-Яa-zA-Z -]/g, '');
	    }
	});


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
	    postfix: ' млн. р.',
	    hide_min_max: true,
    	hide_from_to: false
	});

	$(".js-price-slider").on("change", function (data) {
		$(this).closest(".search_form__block").next(".btn").addClass("active");	
	});

	$(".js-square-slider").ionRangeSlider({
	    type: "double",
	    postfix: ' м²',
	    hide_min_max: true,
    	hide_from_to: false
	});

	$(".js-square-slider").on("change", function (data) {
        $(this).closest(".search_form__block").next(".btn").addClass("active"); 
    });

	$(".js-floor-slider").ionRangeSlider({
		type: "double",
	    hide_min_max: true,
	    hide_from_to: true,
	    to_fixed: true,
	});

	$(".js-floor-slider").on("change", function (data) {
        $(this).closest(".search_form__block").next(".btn").addClass("active"); 
    });


   	$('.one_manager').click(function(e) {
	    $(".one_manager").removeClass('active');
	    $(this).addClass('active');
	}); 

    if ($(".one_manager").length !=0) {

        var winW = $(window).width();
        var manL = $(".one_manager").length;

        if (winW < 768) {
            $(".one_manager").hide();
            $(".one_manager").eq(0).show().addClass("active");
        }

        else if (winW >= 768 && winW < 1200) {
            if (manL > 3) {
                $(".one_manager").eq(3).hide();
                $(".one_manager").eq(4).hide();
                $(".one_manager").eq(1).addClass("active");
            } 
            else {         
                if (manL == 1) {
                    $(".one_manager").eq(0).addClass("active");
                }
                if (manL == 2) {
                    $(".one_manager").eq(0).addClass("active");
                }
                if (manL == 3) {
                    $(".one_manager").eq(1).addClass("active");
                }
            }
        }

        else if (winW >= 1200) {
            if (manL == 1) {
                $(".one_manager").eq(0).addClass("active");
            }
            if (manL == 2) {
                $(".one_manager").eq(0).addClass("active");
            }
            if (manL == 3) {
                $(".one_manager").eq(1).addClass("active");
            }
            if (manL == 4) {
                $(".one_manager").eq(0).addClass("active");
            }
            if (manL == 5) {
                $(".one_manager").eq(2).addClass("active");
            }
        }
    }
  

    // big_slider_object
    var swiper = new Swiper('.big_slider_object', {
        pagination: '.big_slider_object__pagination',
        paginationClickable: true,
        prevButton: '.big_slider_object__prev',
        nextButton: '.big_slider_object__next',
        loop: true
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

    function hide_small_menu() {
		var window_top = $(window).scrollTop();

		if (window_top > 500)
			$('.secondary_menu').addClass('is-hidden')
		else
			$('.secondary_menu').removeClass('is-hidden')
    };

    // hide menu
    function hide_menu() {
		var window_top = $(window).scrollTop();      

    	if (window_top > 100) {
    		$('.object_menu').addClass('is-hidden');
    		$('.big_slider_object__prev').addClass('short');
    	}
    	else {

            if ($(window).width() > 768) {
                $('.object_menu').removeClass('is-hidden');
                $('.big_slider_object__prev').removeClass('short');
            }

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
        
            $(window).scroll(hide_menu);
            hide_menu();
        
    });

     $(function() {
        if ($(window).width() > 768) {
            $(window).scroll(hide_small_menu);
            hide_small_menu();
        }
    });



    $(function() {
        if ($(window).width() < 768) {
            $('.object_menu').addClass('is-hidden');
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

    $(".js-open-ok-popup").magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        overflowY: "auto",
        alignTop: false
    });

    $(".js-open-ipoteka-popup").magnificPopup({
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


    $('.gallery-item').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom dinamic_popup',
        gallery: {
          enabled:true
        },
        image: {
            verticalFit: true
        },
        alignTop: false
    });  

    $(".js-open-view").click(function(e) {
        e.preventDefault();
        $('.gallery-item').magnificPopup('open');
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