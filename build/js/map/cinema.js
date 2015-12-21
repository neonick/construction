$(function () {
    var $map = $('#map');

    if ($map.length) {
        $map.data({
            name: 'СИНЕМА',
            api: '',
            radius: [0.05, 0.05],
            mainPoint: {"position": [45.016155, 39.03488], "icon": "cin"},
            categories: [
                {
                    "type": "category",
                    "name": "Больницы и поликлиники",
                    "keyword": "медицинские учреждения",
                    "icon": "hospital-building"
                },
                {
                    "type": "category",
                    "name": "Магазины",
                    "keyword": "продуктовыt магазины",
                    "icon": "market"
                },
                {
                    "type": "category",
                    "name": "Садики и школы",
                    "keyword": "общеобразовательные учреждения",
                    "icon": "school"
                },
                {
                    "type": "point",
                    "name": "Культовый кинотеатр",
                    "icon": "cinema",
                    "position": [45.011155, 39.03888]
                },
                {
                    "type": "point",
                    "name": "Кубанский Гос. Университет",
                    "icon": "university",
                    "position": [45.021155, 39.01588]
                },
                {
                    "type": "polyline",
                    "name": "Общественный транспорт",
                    "icon": "public-transport",
                    "items": [
                        [[45.019320, 39.028439], [45.016519, 39.041951], [45.023210, 39.043238]],
                        [[45.016519, 39.041951], [45.012329, 39.037154]]
                    ],
                    "options": {
                        "strokeColor": "#c259b5",
                        "strokeWidth": 3,
                        "strokeStyle": "6 3"
                    }
                },
                {
                    "type": "polyline",
                    "name": "Подъезды на автомобиле",
                    "icon": "car-access",
                    "items": [
                        [[45.017560, 39.036560], [45.016469, 39.036107], [45.016489, 39.035598]],
                        [[45.018380, 39.032910], [45.016749, 39.032287], [45.016729, 39.033631]]
                    ],
                    "options": {
                        "strokeColor": "#ef4446",
                        "strokeWidth": 3,
                        "strokeStyle": "3 3"
                    }
                }
            ]
        });
    }
});