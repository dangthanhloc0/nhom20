
$(document).ready(function() {
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll + windowHeight > position + 50) {
                $(this).addClass('visible');
            }
        });
    });
});
