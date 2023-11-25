import { lock, unlock } from 'tua-body-scroll-lock';

$(function () {
    const burgerButton = $('.js-burger');
    const backDrop = $('.js-shadow-backdrop');
    const menuCross = $('.js-close-menu');
    const mobileMenu = $('.js-mobile-menu');
    const mobileMenuLink = $('.js-mobile-menu-link');
    const menuLink = $('.js-menu-link');

    const closeMenu = () => {
        backDrop.fadeOut(200);
        mobileMenu.removeClass('active');
        unlock(mobileMenu[0]);
    };

    const scrollToSection = (target, speed) => {
        const headerHeight = $('.js-header').outerHeight();
        const goToElement = $(`[data-target="${target.substring(1)}"]`);

        if (goToElement.length) {
            $('html, body').animate({
                scrollTop: goToElement.offset().top - headerHeight
            }, speed);
        }
    };

    burgerButton.on('click', function () {
        backDrop.fadeIn(200);
        mobileMenu.addClass('active');
        lock(mobileMenu[0]);
    });

    backDrop.on('click', function () {
        closeMenu();
    });

    menuCross.on('click', function () {
        closeMenu();
    });

    mobileMenuLink.on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');

        closeMenu();
        scrollToSection(target, 1000);
    });

    menuLink.on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');

        scrollToSection(target, 1000);
    });
});
