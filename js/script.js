$(function() {
    var heightImage = $('.p-top__bgimg').height();
    var heightBg = $('.p-top__bgd').height();
    var heightImageAbout = $('.p-top__bgimg__about').height();
    var heightBgAbout = $('.p-top__bgd__about').height();
    var heightImageContact = $('.p-top__bgimg__contact').height();
    var heightBgContact = $('.p-top__bgd__contact').height();
    $('.p-header__menu').on('click', function() {
        $('.p-header__menu, .p-hamburger, .p-header__menu__hamburger, .p-hamburger__pc').toggleClass('show');
        if ($(this).hasClass("show")) {
            $("body").addClass("is-fixed"); // 背景固定！
        } else {
            $("body").removeClass("is-fixed"); // 背景固定解除！
        }
        if ($(window).scrollTop() > heightBg - 30 || $(window).scrollTop() > heightBgAbout - 30 || $(window).scrollTop() > heightBgContact - 30) {
            $('.p-header__menu__hamburger>span, .p-header__menu__hamburger__menu').toggleClass('black');
        }

    });
    $('.p-hamburger>ul>li>a, .p-hamburger__pc').on('click', function() {
        $('.p-header__menu, .p-hamburger, .p-header__menu__hamburger, .p-hamburger__pc').removeClass('show');
        $("body").removeClass("is-fixed");
        if ($(window).scrollTop() > heightBg - 30 || $(window).scrollTop() > heightBgAbout - 30 || $(window).scrollTop() > heightBgContact - 30) {
            $('.p-header__menu__hamburger>span, .p-header__menu__hamburger__menu').toggleClass('black');
        }
    });

    $('a[href^="#"]').click(function() {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > heightImage - 30 || $(window).scrollTop() > heightImageAbout - 30 || $(window).scrollTop() > heightImageContact - 30) {
            $('.p-header__logo__svg').addClass('black');
        } else {
            $('.p-header__logo__svg').removeClass('black');
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > heightBg - 30 || $(window).scrollTop() > heightBgAbout - 30 || $(window).scrollTop() > heightBgContact - 30) {
            $('.p-header__menu__hamburger>span, .p-header__menu__hamburger__menu').addClass('black');
        } else {
            $('.p-header__menu__hamburger>span, .p-header__menu__hamburger__menu').removeClass('black');
        }
    });
});