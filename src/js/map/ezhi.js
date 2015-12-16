$(function () {
    var $map = $('#map');

    if ($map.length) {
        $map.data({
            name: 'ЕЖИ',
            api: '', // api ключ для API поиска организаций от Яндекс
            radius: [0.05, 0.05], // радиус поиска, в градусах
            mainPoint: {"position": [45.03867, 39.011], "icon": "ezhi"}, // основная точка
            categories: [ // категории
                {
                    "type": "category",
                    "name": "Аптеки",
                    "icon": "drugstore",
                    "items": [
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        },
                        {
                            "position": [45.036873, 39.010989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        }
                    ]
                },
                {
                    "type": "category",
                    "name": "Магазины",
                    "icon": "conveniencestore",
                    "items": [
                        {
                            "position": [45.032873, 39.034989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        }
                    ]
                },
                {
                    "type": "category",
                    "name": "Садики и школы",
                    "icon": "school",
                    "items": [
                        {
                            "position": [45.030873, 39.002989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        }
                    ]
                },
                {
                    "type": "category",
                    "name": "Заправки",
                    "icon": "fillingstation",
                    "items": [
                        {
                            "position": [45.031873, 39.023989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        }
                    ]
                },
                {
                    "type": "category",
                    "name": "Кафе",
                    "icon": "restaurant",
                    "items": [
                        {
                            "position": [45.037273, 39.000989],
                            "name": "Гастропаб - Дон Жуан",
                            "desc": "ул. Красная 162\n+7 (918) 362-85-76\nВремя работы: 9:00 - 05:00"
                        }
                    ]
                }
            ]
        });
    }
});