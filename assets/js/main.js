/*
    Photon by HTML5 UP
    html5up.net | @n33co
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1140px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)',
        xxsmall: '(max-width: 320px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        $('.main').hide();
        $('#footer').hide();
        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 250);
            window.setTimeout(function() {
                $('#one').fadeIn(1000);
            }, 1000);
        });

        $('.discover').on('click', function() {
            $('.main').fadeIn(1000);
            $('#footer').show();
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on mobile.
        skel.on('+mobile -mobile', function() {
            $.prioritize(
                '.important\\28 mobile\\29',
                skel.breakpoint('mobile').active
            );
        });

        // Scrolly.
        $('.scrolly').scrolly();

        // Scroll to Top
        var topBtn = $('#page-top');	
        topBtn.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        //スクロールしてトップ
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

})(jQuery);
