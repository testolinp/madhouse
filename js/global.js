$(function() {
  $(window).setBreakpoints({
  // use only largest available vs use all available
  	//distinct: true,
  // array of widths in pixels where breakpoints
  // should be triggered
    breakpoints: [
      768,
      1024
    ]
  });

  $(window).bind('exitBreakpoint768',function() {
    $.fn.fullpage.setResponsive(true);
  });

  $(window).bind('enterBreakpoint1024',function() {
    $.fn.fullpage.setResponsive(false);
  });

  $('#fullpage').fullpage({
    navigation: true,
    anchors: ['home', 'news', 'about-me', 'my-work', 'contact'],
    menu: '.menu__list',

    onLeave: function(index, nextIndex, direction) {
      $('.menu').removeClass('menu--open');
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex ) {
      console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
    },
  });

  //MENU
  $('.header__content__hamb').on('click', function(e) {
    e.preventDefault();

    $('.menu').addClass('menu--open');
  });

  $('.menu__close').on('click', function(e) {
    e.preventDefault();

    $('.menu').removeClass('menu--open');
  });

  //NEWS DETAIL
  //show
  $('.news__data__list__item__link').on('click', function(e) {
    e.preventDefault();

    $('.news-detail').addClass('news-detail--show');
    $('.scroll-down').addClass('scroll-down--hide');
  });

  //close
  $('.news-detail__content__close').on('click', function(e) {
    e.preventDefault();

    $('.news-detail').removeClass('news-detail--show');
    $('.scroll-down').removeClass('scroll-down--hide');
  });

  //NEWS DETAIL
  //show
  $('.works__box').on('click', function(e) {
    e.preventDefault();

    $('body').addClass('gl-black');

    $('.work-detail').addClass('work-detail--show');
    $('.scroll-down').addClass('scroll-down--hide');
  });

  //close
  $('.header__content__back').on('click', function(e) {
    e.preventDefault();

    $('body').removeClass('gl-black');

    $('.work-detail').removeClass('work-detail--show');
    $('.scroll-down').removeClass('scroll-down--hide');
  });
});
