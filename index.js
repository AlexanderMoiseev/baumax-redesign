
/**************************
*** SCROLL ON NAVIGATION **
**************************/
/* https://css-tricks.com/snippets/jquery/smooth-scrolling */

$(function () {
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


  $(".send-button").attr('disabled', 'disabled');

  $('#phone').keyup(function (e) {
    var digitsCount = e.target.value.replace(/[^0-9]/g, "").length;
    if (digitsCount == 11) {
      $(".send-button").removeAttr('disabled', 'disabled');
    }
    else {
      $(".send-button").attr('disabled', 'disabled');
    }
  });

  $('#phone').inputmask("+7 (999) 999-9999");


  // $('#contact-form').keydown(function (e) {
  //   // const isNumber = /^[0-9]$/i.test(e.key)
  //   // var digitsCount = e.target.value.replace(/[^0-9]/g, "").length;

  //   // if (e.keyCode == 13 || (isNumber && digitsCount > 10)) {
  //   //   console.log(digitsCount);
  //   //   e.preventDefault();
  //   //   return false;
  //   // }

  //   if (event.keyCode == 13) {
  //     event.preventDefault();
  //     return false;
  //   }


  // $("#phone").mask("+7 (999) 999-9999", {
  //   completed: function () {
  //     // $(".send-button").removeAttr( "disabled", "disabled" );
  //   }
  // });

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

/******************************
*** ANIMATIONS ON PAGE LOAD  **
*******************************/


