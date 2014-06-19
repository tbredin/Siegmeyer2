$(function() {
    var container = $('.card-bucket');
    var navToggle = $('.nav__toggle')
    var navMenu = $('.nav__menu')
    // initialize
    container.masonry({
      columnWidth: '.card',
      itemSelector: '.card',
      gutter: '.card-spacer',
      transitionDuration: 0
    });

    // container.masonry(); //seems to fix mobile broken gutter widths on init

    navToggle.on('click', function(e) {
        navMenu.slideToggle();
    });
});
