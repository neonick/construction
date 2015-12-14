$(function () {
    var touchStart = false;

    $(document.body).on('touchstart', onTouchStart);
    $(document.body).on('touchmove', onTouchMove);
    $(document.body).on('touchend', onTouchEnd);

    function onTouchStart() {
        window.lastTouchMove = false;
        touchStart = true;
    }

    function onTouchMove() {
        if (touchStart) {
            window.lastTouchMove = true;
        }
    }

    function onTouchEnd() {
        touchStart = false;
    }

    window.lastTouchMove = false;
});