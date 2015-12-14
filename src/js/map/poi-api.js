$(function () {
    var url = 'https://search-maps.yandex.ru/v1/',
        apiKey;

    function api(data) {
        if (!apiKey)
            return $.Deferred().reject('Not set api key');
        data = $.extend(data, {
            apikey: apiKey
        });

        return $.ajax(url, {
            dataType: 'json',
            method: 'GET',
            data: data
        });
    }

    function setApiKey(key) {
        apiKey = key;
    }


    window.poiApi = {
        call: api,
        setKey: setApiKey
    }
});