$(function() {

	if ($("#liter_eji_svg") != 0) {

		var eji = Raphael('liter_eji_svg', "100%", "100%"), attributes = {
			'stroke-width' : 0,
			'stroke-linejoin' : 'round'
		}, arr = new Array();
	
		eji.setViewBox(0, 0, 1200, 800);

		for (var country in paths) {
			var obj = eji.path(paths[country].path);
			
			obj.attr(attributes);
			obj.attr({
				fill : paths[country].color 
			});

			arr[obj.id] = country;
			
			/* добавляем data-атрибуты для path, которые потом будем передавать в запросе */
			$(obj).data("liter", paths[country].liter);
			$(obj).data("floor", paths[country].floor);

			obj.hover(function() {
				$(".floor_label").show();
				$(".floor_label_num").html(paths[arr[this.id]].floor);
			}, function() {
				$(".floor_label").hide();
			});

			obj.click(function() {
				$("#response_popup").load( 'get_flats.html' , function (){ 
					// get_flats_liter2.html
					// get_flats_cinema.html
					$(".popup_caller").magnificPopup({
						type : 'inline',
						preloader : false,
						removalDelay : 300,
						mainClass : 'my-mfp-zoom-in',
						overflowY : "scroll",
                        close: function() {
                            $("#response_popup").empty();
                        }
					});
					$(".popup_caller").click();
				} );
				
				//load потому что мы не на сервере, при переносе на сервак лучше бы заменить на это
				/*$.get('get_flats.php [или какой угодно удобный путь к скрипту, важно лишь то, что он вернет]', $(this).data(), function(innerHTML){
					$("#response_popup").html(innerHTML);
					$(".popup_caller").magnificPopup({
						type : 'inline',
						preloader : false,
						removalDelay : 300,
						mainClass : 'my-mfp-zoom-in',
						overflowY : "scroll",
                        close: function() {
                            $("#response_popup").empty();
                        }
					});
					$(".popup_caller").click();
				});*/
			});

		}

		if ($(".mob_floor_selector") != 0) {

			$(".mob_floor_selector__item").click(function() {
				$("#response_popup").load( 'get_flats.html' , function (){ 
					$(".popup_caller").magnificPopup({
						type : 'inline',
						preloader : false,
						removalDelay : 300,
						mainClass : 'my-mfp-zoom-in',
						overflowY : "scroll",
	                    close: function() {
	                        $("#response_popup").empty();
	                    }
					});
					$(".popup_caller").click();
				} );
				
				//load потому что мы не на сервере, при переносе на сервак лучше бы заменить на это
				/*$.get('get_flats.php [или какой угодно удобный путь к скрипту, важно лишь то, что он вернет]', $(this).data(), function(innerHTML){
					$("#response_popup").html(innerHTML);
					$(".popup_caller").magnificPopup({
						type : 'inline',
						preloader : false,
						removalDelay : 300,
						mainClass : 'my-mfp-zoom-in',
						overflowY : "scroll",
	                    close: function() {
	                        $("#response_popup").empty();
	                    }
					});
					$(".popup_caller").click();
				});*/
			});

		}

	};

}); 