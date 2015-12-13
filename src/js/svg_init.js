$(function(){

    if ($(".full_block--liter") != 0) {
     
        var eji = Raphael('liter_eji', "100%", "100%"),
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
            });

        }

    }
             
});

