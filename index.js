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
});