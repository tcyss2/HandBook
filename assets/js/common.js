function spNav() {
    const btn = $('.js-menu-btn');
    const nav = $('.js-menu');
    const close = $('.js-menu-close');
    const link = $('.js-menu-item');

    btn.on('click', function() {
        if ( $(this).hasClass('js-open') ) {
            $(this).removeClass('js-open');
            nav.slideUp();
        } else {
            $(this).addClass('js-open');
            nav.slideDown();
        }
    });

    link.on('click', function() {
        if ( btn.hasClass('js-open') ) {
            btn.removeClass('js-open');
            nav.slideUp();
        }
    });

    close.on('click', function() {
        if ( btn.hasClass('js-open') ) {
            btn.removeClass('js-open');
            nav.slideUp();
        }
    });
}

function smoothScroll() {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;

        $('html, body').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
}

const fixedBlock = () => {
    const target = $('.js-fixed-block');

    $(window).on('load scroll', function() {
        const scroll = $(this).scrollTop();

        if ( scroll > 100 ) {
            target.addClass('js-show');
        } else {
            target.removeClass('js-show');
        }
    });
};

const changeFontSize = () => {
    const btn = $('.js-font-btn');

    btn.on('click', function() {
        btn.removeClass('current');
        $("html").removeAttr("class");

        if ( $(this).hasClass('js-font-btn--small') ) {
            $('.js-font-btn--small').addClass('current');
            $('html').addClass('fontSmall');
        } else if ( $(this).hasClass('js-font-btn--middle') ) {
            $('.js-font-btn--middle').addClass('current');
            $('html').addClass('fontMiddle');
        } else if ( $(this).hasClass('js-font-btn--big') ) {
            $('.js-font-btn--big').addClass('current');
            $('html').addClass('fontBig');
        }
    });
}

const modal = () => {
    const btn = $('.js-modal-btn');
    const modal = $('.js-modal');
    const item = $('.js-modal-item');
    const close = $('.js-modal-close');

    btn.on('click', function() {
        const index = $(this).data('num');
        console.log(index);
        modal.fadeIn();
        item.eq(index).fadeIn();
    });

    close.on('click', function() {
        $('.js-modal-item').fadeOut();
        modal.fadeOut();
    });
}

const accordion = () => {
    const btn = $('.js-accordion-btn');
    const content = $('.js-accordion-content');

    btn.on('click', function() {
        if ( $(this).hasClass('open') ) {
            $(this).removeClass('open');
            $(this).next(content).slideUp();
        } else {
            $(this).addClass('open');
            $(this).next(content).slideDown();
        }
    });
}

jQuery(function ($) {
    $('.js-tab-menu').on('click', function () {
        $('.js-tab-menu').removeClass('is-active');
        $('.js-tab-content').removeClass('is-active');
        $(this).addClass('is-active');
        var number = $(this).data("number");
        $('#' + number).addClass('is-active');
    });
});

$( function() {
    spNav();
    smoothScroll();
    fixedBlock();
    changeFontSize();
    modal();
    accordion();
})