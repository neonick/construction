$(document).ready(function () {
    var $map = $('#map'),
        map,
        currentCategory,
        legendText = "<b>" + htmlDecode($map.data('name')) + "</b> РАСПОЛОЖЕН<br />в благоустроеном районе<br />с развитой инфраструктурой.",
        yandexIcons = {
            'drugstore': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/drugstore.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'conveniencestore': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/conveniencestore.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'school': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/school.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'fillingstation': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/fillingstation.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'restaurant': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/restaurant.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'university': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/university.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'market': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/market.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'hospital-building': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/hospital-building.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'cinema': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/cinema.png',
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            },
            'ezhi': {
                iconLayout: 'default#image',
                iconImageHref: '/local/templates/.default/markup/build/i/ezhi.png',
                iconImageSize: [81, 100],
                iconImageOffset: [-40.5, -79]
            },
            'cinema-building': {
                iconLayout: 'default#image',
                iconImageSize: [81, 100],
                iconImageOffset: [-40.5, -79]
            }
        },
        mainPoint = $map.data('mainPoint'),
        radius = $map.data('radius');

    if ($map.length) {
        ymaps.ready(initMap);
    }

    function initMap() {
        map = new ymaps.Map($map.get(0), {
            center: mainPoint.position,
            zoom: 17,
            controls: []
        });

        if ($map.data('api')) {
            poiApi.setKey($map.data('api'));
        }

        initLegend($map, $map.data('categories'));
    }

    function reloadBounds() {
        map.setBounds(map.geoObjects.getBounds(), {
            checkZoomRange: true,
            duration: 300,
            timingFunction: 'ease-out'
        });
    }

    function initLegend($map, categories) {
        var $legend = $('<div />').addClass('legend'),
            $title = $('<div />').addClass('title').text('Место и окружение').appendTo($legend),
            $subtitle = $('<div />').addClass('subtitle').hide().appendTo($legend),
            $text = $('<div />').addClass('text').appendTo($legend),
            $contentTitle = $('<div />').addClass('content-title').text('Рядом расположены:').hide().appendTo($legend),
            $content = $('<div />').addClass('content').appendTo($legend),
            $bottom = $('<div />').addClass('bottom').appendTo($legend),
            $back = $("<div />").addClass('back').appendTo($bottom),
            $toggleSize = $("<div />").addClass('toggle-size').appendTo($bottom);

        $map.after($legend);

        if ($content.is(":visible")) {
            $contentTitle.show();
        }

        $legend.data('categories', categories);

        $text.html(legendText);

        createPoints(categories);
        map.geoObjects.add(new ymaps.Placemark(mainPoint.position, {}, yandexIcons[mainPoint.icon]));
        reloadBounds();

        loadCategories($content, categories, true);

        $legend.on('touchend click', '.content .item', onClickCategory);
        $legend.on('touchend click', '.content .category-item', onClickCategoryItem);
        $back.on('touchend click', onClickBack);
        $toggleSize.on('touchend click', onClickToggleSize);

        calcContentHeight($legend);

        $map.trigger('legendInited', [$legend]);
    }

    function calcContentHeight($legend) {
        var $title = $legend.find(' > .title'),
            $subtitle = $legend.find(' > .subtitle'),
            $text = $legend.find(' > .text'),
            $content = $legend.find(' > .content'),
            $contentTitle = $legend.find(' > .content-title');

        if ($content.is(':visible')) {

            var contentHeight = $legend.height();

            if ($title.is(':visible')) {
                contentHeight -= $title.outerHeight(true);
            }
            if ($subtitle.is(':visible')) {
                contentHeight -= $subtitle.outerHeight(true);
            }
            if ($text.is(':visible')) {
                contentHeight -= $text.outerHeight(true);
            }
            if ($contentTitle.is(':visible')) {
                contentHeight -= $contentTitle.outerHeight(true);
            }

            $content.height(contentHeight - parseInt($content.css('marginTop')) - parseInt($content.css('marginBottom')));

            $content.jScrollPane({
                autoReinitialise: true
            });
        }
    }

    function onClickCategory(e) {
        e.preventDefault();
        if (window.lastTouchMove)
            return;
        var $this = $(this),
            $legend = $this.closest('.legend'),
            category = $this.data('category');

        openCategory($legend, category)
    }

    function clearContent($legend) {
        var $content = $legend.find(' > .content');
        $content.replaceWith($('<div />').addClass('content'));
        return $legend.find('> .content');
    }

    function openCategory($legend, category) {
        if (currentCategory !== category) {
            if (category.type == 'category') {
                currentCategory = category;
                var $content = clearContent($legend),
                    $subtitle = $legend.find(' > .subtitle'),
                    $text = $legend.find(' > .text'),
                    $contentTitle = $legend.find(' > .content-title');

                $legend.addClass('-back');
                $text.hide();
                $contentTitle.hide();
                $subtitle.show().text(category.name);
                if (category.items) {
                    category.items.forEach(function (item) {
                        var $item = $('<div />').addClass('category-item').data('position', item.position),
                            $title = $('<div />').addClass('title').appendTo($item),
                            $icon = $('<div />').addClass('icon').addClass('-' + category.icon).appendTo($title),
                            $name = $('<div />').addClass('name').text(item.name).appendTo($title);
                        if (item.desc) {
                            $('<div />').addClass('desc').html(htmlDecode(item.desc).replace(/\n/ig, '<br />')).appendTo($item);
                        }

                        $item.appendTo($content);
                    });
                }
                filterPoints($legend.data('categories'), category);
                reloadBounds();
                calcContentHeight($legend);
            } else {
                switch (category.type) {
                    case 'point':
                        resetLegend($legend);
                        map.panTo(category.point.geometry.getCoordinates(), {
                            timingFunction: 'ease-out',
                            duration: 300
                        });
                        currentCategory = category;
                        break;
                }
            }
        }
    }

    function onClickCategoryItem(e) {
        e.preventDefault();
        if (window.lastTouchMove)
            return;
        var $this = $(this),
            position = $this.data('position');

        map.panTo(position, {
            timingFunction: 'ease-out',
            duration: 300
        });
    }

    function onClickBack(e) {
        e.preventDefault();
        if (window.lastTouchMove)
            return;
        var $this = $(this),
            $legend = $this.closest('.legend');

        resetLegend($legend);
    }

    function resetLegend($legend) {
        if (currentCategory) {
            var $subtitle = $legend.find(' > .subtitle'),
                $text = $legend.find(' > .text'),
                $content = clearContent($legend),
                $contentTitle = $legend.find(' > .content-title');

            $legend.removeClass('-back');
            toggleContentSize($legend, false);
            if ($content.is(':visible')) {
                $contentTitle.show();
            }
            $subtitle.hide();
            $text.show().html(legendText);

            loadCategories($content, $legend.data('categories'));
            calcContentHeight($legend);
            filterPoints($legend.data('categories'));
            reloadBounds();
            currentCategory = false;
        }
    }

    function loadCategories($content, categories) {
        if (categories && typeof categories === 'object') {
            categories.forEach(function (category) {
                var $icon = $('<div />').addClass('icon').addClass('-' + category.icon),
                    $name = $('<div />').addClass('name').text(category.name),
                    $item = $('<div />').addClass('item').append($icon).append($name).data('category', category).appendTo($content);
            });
        }
    }

    function createPoints(categories) {
        categories.forEach(function (category) {
            if (category.type === 'category') {
                category.collection = new ymaps.GeoObjectCollection({}, yandexIcons[category.icon]);
                if (category.items) {
                    category.items.forEach(function (item) {
                        var point = createPoint(item, category);
                        category.collection.add(point);
                    });
                } else if (category.keyword && poiApi) {
                    var center = mainPoint.position.slice(0).reverse();
                    poiApi.call({
                        text: category.keyword,
                        type: 'biz',
                        lang: 'ru_RU',
                        ll: center.join(','),
                        spn: radius.join(','),
                        rspn: 1
                    }).then(function (data) {
                        if (data.features && data.features.length) {
                            data.features.forEach(function (object) {
                                if (object.geometry && object.geometry.coordinates) {
                                    var item = {
                                        position: object.geometry.coordinates.reverse()
                                    };

                                    if (object.properties) {
                                        if (object.properties.name) {
                                            item.name = object.properties.name;
                                        }
                                        var desc = [];
                                        if (object.properties.CompanyMetaData) {
                                            var companyData = object.properties.CompanyMetaData;
                                            if (companyData.address) {
                                                desc.push(companyData.address);
                                            }
                                            if (companyData.Phones && companyData.Phones.length) {
                                                desc.push(companyData.Phones[0].formatted);
                                            }
                                            if (companyData.Hours) {
                                                desc.push('Время работы: ' + companyData.Hours.text);
                                            }
                                        }
                                        if (desc.length) {
                                            item.desc = desc.join("\n");
                                        }
                                    }
                                    if (!category.items) {
                                        category.items = [];
                                    }
                                    var index = category.items.push(item);
                                    var point = createPoint(category.items[index - 1], category);
                                    category.collection.add(point);
                                }
                            });
                            reloadBounds();
                        }
                    });
                }
                map.geoObjects.add(category.collection);
            } else {
                switch (category.type) {
                    case 'point':
                        var point = new ymaps.Placemark(category.position, {
                            category: category
                        }, yandexIcons[category.icon]);
                        point.events.add('click', onPointClick);
                        map.geoObjects.add(point);
                        category.point = point;
                        break;
                    case 'polyline':
                        if (category.items && category.options) {
                            category.items.forEach(function (item) {
                                var line = new ymaps.Polyline(item, {}, category.options);
                                map.geoObjects.add(line);
                            })
                        }
                        break;
                    default:
                        console.error('undefined type', category.type);
                        console.error('category', category);
                }
            }
        });
    }

    function createPoint(item, category) {
        var point = new ymaps.Placemark(item.position, {
            item: item,
            category: category
        });
        item.point = point;
        point.events.add('click', onPointClick);

        return point;
    }

    function filterPoints(categories, category) {
        categories.forEach(function (eachCategory) {
            var item = eachCategory.point || eachCategory.collection,
                result = true;
            if (item) {
                if (category) {
                    if (eachCategory.name !== category.name) {
                        result = false;
                    }
                }
                map.geoObjects[result ? 'add' : 'remove'](item);
            }
        });
    }

    function onPointClick(e) {
        var point = e.get('target'),
            category = point.properties.get('category');
        openCategory($('.legend'), category);
    }

    function htmlDecode(value) {
        return $('<div/>').html(value).text();
    }

    function onClickToggleSize(e) {
        e.preventDefault();
        if (window.lastTouchMove)
            return;
        var $legend = $(this).closest('.legend');
        toggleContentSize($legend);
    }

    function toggleContentSize($legend, size) {
        $legend[typeof size !== 'undefined' ? (size ? 'addClass' : 'removeClass') : 'toggleClass']('-mini');
    }

});