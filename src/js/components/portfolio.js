$(function () {
    $('.js-thegrid').grid({
        cells: $('.js-thegrid-cell'),
        cellsPerRow: 3,
        updateGridHeight: true,
        breakpoints:
        {
            1200:
            {
                cellsPerRow: 3,
                cellHeight: 100
            },
            992:
            {
                cellsPerRow: 2,
                cellHeight: 100
            },
            768:
            {
                cellsPerRow: 1,
                cellHeight: 150
            }
        }
    });

    $('.js-portfolio-filter').on('click', function (e) {
        e.preventDefault();
        const target = $(this).data('tag');

        $('.js-portfolio-filter').removeClass('active');
        $(this).addClass('active');

        if (target === 'all') {
            $('.js-thegrid').grid('resetFilters').grid('redraw');
        } else {
            $('.js-thegrid').grid('filter', `[data-tag-target="${target}"]`, false, true).grid('redraw');
        }
    });
});
