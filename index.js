$(document).ready(function () {
  /*******************************
  **** FULL SCREEN NAVIGATION ****
  ********************************/

  $('#menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.menu-overlay').toggleClass('open');
  });

  $('.main-nav li a').click(function () {
    $('#menu-toggle').removeClass('active');
    $('.menu-overlay').removeClass('open');
  });

  $('a[href="#top"]').click(function () {
    $('#menu-toggle').removeClass('active');
    $('.menu-overlay').removeClass('open');
  });


  /**************************
  *** SCROLL ON NAVIGATION **
  **************************/
  /* https://css-tricks.com/snippets/jquery/smooth-scrolling */

  $(function () {
    $("#phone").mask("+7 (999) 999-9999", {
      completed: function () {
        // $(".send-button").removeAttr( "disabled", "disabled" );
      }
    });

    $('a[href*="#"]:not([href="#"],  [href*="#modal-project"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            //substract 100 to anchor 100px from the top
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /******************************
  *** ANIMATIONS ON PAGE LOAD  **
  *******************************/

  // header animations
  $('.js-wp-animate-logo').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
      $(this).removeClass('animated fadeInDown');
    }
  );

  $('.js-wp-animate-menu').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
      $(this).removeClass('animated fadeInDown');
    }
  );

  $('.js-wp-animate-hero-sub-heading-1').addClass('animated fadeInDown');

  $('.js-wp-animate-hero-main-heading').addClass('animated fadeInDown');

  $('.js-wp-animate-hero-sub-heading-2').addClass('animated fadeInDown');

  $('.js-wp-animate-scroll-container').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
      $(this).removeClass('animated fadeInDown');
    }
  );

  // profile section animations
  $('.js-section-profile').waypoint(function (direction) {
    $('.js-wp-animate-profile-head-shot').addClass('animated slideInRight');
    $('.js-wp-animate-profile-description').addClass('animated slideInLeft');
    $('.js-wp-animate-social-wrapper').addClass('animated fadeInUp');

  }, {
    offset: '200px;'
  });

  // expeience section animations
  $('.js-section-experience').waypoint(function (direction) {
    $('.js-wp-animate-icon').addClass('animated fadeInDown');
    $('.js-wp-animate-experience-sub-heading').addClass('animated fadeInDown');
    $('.js-wp-animate-experience-skills').addClass('animated fadeInDown');

  }, {
    offset: '200px;'
  });
});