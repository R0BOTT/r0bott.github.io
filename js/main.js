$(function() {

    $('.slider-item').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        lazyLoad: true
    });

    $('.header__mobile').on('click', function() {
        $('.header__menu').toggle('slow');
    });

});