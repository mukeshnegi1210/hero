$(document).ready(function () {
  $('.near-you-wapper .near-you-slider').slick({
    slidesToShow: 3.2,
    arrows: false,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
        }
      }
    ]
  });
  if (window.innerWidth <= 768) {
    $('.common-tabs-main').slick({
      infinite: false,
      dots: false,
      autoplay: false,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      prevArrow: "<button type='button' class='slick-prev'><img src='images/icons/homepage/left-black-arrow.svg'></button>",
      nextArrow: "<button type='button' class='slick-next'><img src='images/icons/homepage/left-black-arrow.svg'></button>",
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 421,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
    });
  }
});
$('.book-test-drive-parent .cust-dropdown-menu li').on('click', function () {
  var getValue = $(this).text();
  $(this).parents('.cust-drop-down').find('.dropdown-select').text(getValue);
  $('.cust-dropdown-menu li').removeClass('active');
  $(this).addClass('active');
});
$('.near-you-form .cust-dropdown-menu li').on('click', function () {
  var getValue = $(this).text();
  $(this).parents('.cust-drop-down').find('.dropdown-select').text(getValue);
});
$('.common-tabs-main .nav-link').on('click', function () {
  var strTabName = $(this).attr('href');
  $(this).closest('.common-tabs-section').find('.tab-pane').removeClass('active show');
  $(strTabName).addClass('active');
  setTimeout(function () {
    $(strTabName).addClass('show');
  }, 150);
});
$('.book-test-drive-parent .cust-form-group').on('click', function () {
  if (!$('#bookTestRideCollapse').hasClass('show')) {
    $(this).parents('.book-test-drive-wrapper').find('.collapse-btn').trigger('click');
  }
});

$('.mobile-number').on('keyup', function () {
  if ($(this).val().length == 10) {
    $(this).parent('.cust-form-group').find('.test-drive-otp-link').addClass('show');
  }
});
$('.send-otp-btn').on('click', function () {
  $('.resend-otp-btn').addClass('show');
});
$('.select-dropdown .dropdown-item').on('click', function () {
  var getValue = $(this).text();
  $('.dropdown-item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.select-dropdown').find('.dropdown-toggle').text(getValue);
});
$(window).on('load', function() {
  var customDropValue = $('.product-header-main').find('.dropdown-item.active').text();
  $('.product-header-main .dropdown-toggle').text(customDropValue);
});
$('body').scrollspy({ target: ".product-navbar .nav", offset: 200 });
var servicescrollDwnNavOffset = $('.product-header-main').height();
$(".product-navbar .navbar-nav .nav-link").on('click', function (event) {
  var href = $(this).attr('href');
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - servicescrollDwnNavOffset
    }, 800, function () {
      window.location.hash = hash;
      $(href)[0].scrollIntoView();
      window.scrollBy(0, -servicescrollDwnNavOffset);
    });
  }
});
$(".scroll-down-btn").on('click', function () {
  var scrollAmount = $('.next-section').offset().top - $('.product-header-main').height();
  window.scroll({
    top: scrollAmount,
    behavior: 'smooth'
  });
});
// if ($(window).width() > 1537) {
//   var servicescrollDwnNavOffset = 120;
//   $(".services-hyperlink .nav li a").on('click', function (event) {
//     var href = $(this).attr('href');
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 120
//       }, 800, function () {
//         window.location.hash = hash;
//         $(href)[0].scrollIntoView();
//         window.scrollBy(0, -servicescrollDwnNavOffset);
//       });
//     }
//   });
// }
// else if ($(window).width() < 1537 && $(window).width() > 1026) {
//   var servicescrollDwnNavOffset = 120;
//   $(".services-hyperlink .nav li a").on('click', function (event) {
//     var href = $(this).attr('href');
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 120
//       }, 800, function () {
//         window.location.hash = hash;
//         $(href)[0].scrollIntoView();
//         window.scrollBy(0, -servicescrollDwnNavOffset);
//       });
//     }
//   });
// }
// else if ($(window).width() < 1025 && $(window).width() > 980) {
//   var servicescrollDwnNavOffset = 133;
//   $(".services-hyperlink .nav li a").on('click', function (event) {
//     var href = $(this).attr('href');
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 133
//       }, 800, function () {
//         window.location.hash = hash;
//         $(href)[0].scrollIntoView();
//         window.scrollBy(0, -servicescrollDwnNavOffset);
//       });
//     }
//   });
// }
// else if ($(window).width() < 981 && $(window).width() > 767) {
//   var servicescrollDwnNavOffset = 138;
//   $(".services-hyperlink .nav li a").on('click', function (event) {
//     var href = $(this).attr('href');
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 138
//       }, 800, function () {
//         window.location.hash = hash;
//         $(href)[0].scrollIntoView();
//         window.scrollBy(0, -servicescrollDwnNavOffset);
//       });
//     }
//   });
// }
// else {
//   var servicescrollDwnNavOffset = 110;
//   $(".services-hyperlink .nav li a").on('click', function (event) {
//     var href = $(this).attr('href');
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 110
//       }, 800, function () {
//         window.location.hash = hash;
//         $(href)[0].scrollIntoView();
//         window.scrollBy(0, -servicescrollDwnNavOffset);
//       });
//     }
//   });
// }