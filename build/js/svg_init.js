$(function(){

    if ($("#liter_eji_svg") != 0) {
     
        var eji = Raphael('liter_eji_svg', "100%", "100%"),
        attributes = {
                'stroke-width': 0,
                'stroke-linejoin': 'round'
            },

        arr = new Array();

        eji.setViewBox(0, 0, 1200, 800);
         
        for (var country in paths) {
            var obj = eji.path(paths[country].path);
            obj.attr(attributes);
            obj.attr({fill : paths[country].color});
            arr[obj.id] = country;     

            obj.hover(function(){
                $(".floor_label").show();
                $(".floor_label_num").html(paths[arr[this.id]].floor);
            }, function(){
                $(".floor_label").hide();
            }); 

            obj.click(function() {
                $(".popup_caller").click();
                $(".popup_caller").magnificPopup({
                    type: 'inline',
                    preloader: false,
                    removalDelay: 300,
                    mainClass: 'my-mfp-zoom-in',
                    overflowY: "auto",
                });

                var swiperbigplan = new Swiper('.swiper-bigplan', {
                    scrollbar: '.swiper-bigplan-scrollbar',
                    slidesPerView: "auto",
                    grabCursor: true,
                    scrollbarHide: false,
                    scrollbarDraggable: true,

                    onReachBeginning: function () {
                        $(".fader_after").show();
                        $(".fader_before").hide();
                    },
                    onReachEnd: function () {
                        $(".fader_before").show();
                        $(".fader_after").hide();
                      
                    }
                });
            });

        }

    };


    if ($(".plan") != 0) {
     
        var eji_floor = Raphael('eji_floor15_svg', "100%", "100%"),
        attributes = {
                'stroke-width': 0,
                'stroke-linejoin': 'round'
            },

        arr_floor = new Array();

        eji_floor.setViewBox(0, 0, 2235, 820);
         
        for (var floor_num in floors) {
            var objfloor = eji_floor.path(floors[floor_num].path);
            objfloor.attr(attributes);
            objfloor.attr({fill : floors[floor_num].color});
            arr_floor[objfloor.id] = floor_num;     

            objfloor.hover(function(){
                $(".app_label").show();
                $(".app_label__rooms span").html(floors[arr_floor[this.id]].apartment);
                $(".app_label__sq span").html(floors[arr_floor[this.id]].square);
            }, function(){
                $(".app_label").hide();
            }); 

        }
    }
             
});