
(function ($) {
    var $window = $(window),
        $body = $('body'),
        $main = $('#main');
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('before-load');
        }, 100);
    });

    $window.on('scroll', function () {
        if ($window.scrollTop() > 10) {
            $body.addClass('is-scrolling');
        } else {
            $body.removeClass('is-scrolling');
        }
    });

})(jQuery);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(this.getAttribute('href'));
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


