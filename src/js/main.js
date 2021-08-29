$(document).ready(function() {
    $('.cookies__button').click(function(_event) {
        $('.cookies').addClass('close');
        $('.header__link-menu').addClass('go-up');
    });
    $('.welcome__btn-link, .footer__link').click(function(_event) {
        $('.form-popup').addClass('active');
        $('body').addClass('lock');
    });
    $('.form-popup__close, .form-popup__close-area').click(function(_event) {
        $('.form-popup').removeClass('active');
        $('body').removeClass('lock');
    });
});