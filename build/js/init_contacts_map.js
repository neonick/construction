// initialize Google map
function initialize() {
    var pos = new google.maps.LatLng(45.016687, 39.109758);
    var pos2 = new google.maps.LatLng(45.039188, 39.010475);
    var pos3 = new google.maps.LatLng(45.015846, 39.035264);

    var centr = new google.maps.LatLng(45.049434, 38.956139);

    var mapOptions = {
        center: centr,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scrollwheel: false,
        rotateControl: true,
        styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#cdd1bf"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"color":"#514b3c"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"color":"#e8e3e3"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"color":"#141111"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"hue":"#ffd500"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#efede8"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#cdd2bf"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text","stylers":[{"color":"#414040"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.fill","stylers":[{"color":"#373131"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.stroke","stylers":[{"color":"#875656"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#9f9f9f"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#686868"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#f1efef"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"},{"hue":"#00e7ff"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text","stylers":[{"color":"#e3dddd"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text.fill","stylers":[{"color":"#373535"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"on"},{"saturation":"79"},{"lightness":"-8"},{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#bbcecf"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#f0eded"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
    };

    var map = new google.maps.Map(document.getElementById("offices_map"), mapOptions);
    map.setTilt(45);

    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: '',
        icon: '/local/templates/.default/markup/build/i/map_icon_1.png'
    });

    var marker2 = new google.maps.Marker({
        position: pos2,
        map: map,
        title: '',
        icon: '/local/templates/.default/markup/build/i/map_icon_2.png'
    });

    var marker3 = new google.maps.Marker({
        position: pos3,
        map: map,
        title: '',
        icon: '/local/templates/.default/markup/build/i/map_icon_3.png'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
