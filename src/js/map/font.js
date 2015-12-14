$(function () {
    WebFont.load({
        google: {
            families: ['Roboto Condensed:400,300,700&subset=latin,cyrillic-ext']
        },
        active: function() {
            $(document.body).trigger('wf-active');
        },
    });
});