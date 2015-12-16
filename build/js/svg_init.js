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
                $(".popup_caller").magnificPopup({
                    type: 'inline',
                    preloader: false,
                    removalDelay: 300,
                    mainClass: 'my-mfp-zoom-in',
                    overflowY: "auto",
                });
                $(".popup_caller").click();
            });

        }

    };


    if ($(".plan") != 0) {
     
        var eji_floor = Raphael('eji_1_1', "100%", "100%"),
        attributes = {
                'stroke-width': 0,
                'stroke-linejoin': 'round'
            },

        arr_floor = new Array();

        eji_floor.setViewBox(0, 0, 1174, 721);
         
        for (var floor_num in floors) {
            var objfloor = eji_floor.path(floors[floor_num].path);
            objfloor.attr(attributes);
            objfloor.attr({fill : floors[floor_num].color});
            arr_floor[objfloor.id] = floor_num;   

            objfloor.click(function() {
                window.open(floors[arr_floor[this.id]].link);
            });   
        }


        var eji_floor2 = Raphael('eji_1_2', "100%", "100%"),
        attributes = {
                'stroke-width': 0,
                'stroke-linejoin': 'round'
            },

        arr_floor2 = new Array();

        eji_floor2.setViewBox(0, 0, 1174, 721);
         
        for (var floor_num in floors2) {
            var objfloor = eji_floor2.path(floors2[floor_num].path);
            objfloor.attr(attributes);
            objfloor.attr({fill : floors2[floor_num].color});
            arr_floor2[objfloor.id] = floor_num;  

            objfloor.click(function() {
                window.open(floors2[arr_floor2[this.id]].link);
            }); 
        }
    }
             
});