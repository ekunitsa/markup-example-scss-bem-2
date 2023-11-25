$(function () {
    const header = $('.js-header');

    const stickyHeader = () => {
        const scroll = $(this).scrollTop();

        if (scroll > 20) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    };

    // on init
    stickyHeader();

    $(document).on('scroll', function () {
        stickyHeader();
    });
});
