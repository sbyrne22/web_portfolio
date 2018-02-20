$( () => {

// Variables

const $homeBtn = $('#homeBtn');
const $headerBtn = $('.burger');
const $closeheaderBtn = $('.closeheaderBtn');
const $mobileLink = $('.mobileLinks');

const $tictacToesInfo = $('#ticInfo');
const $ticHover = $('#ticHover');

const $appititeInfo = $('#appititeInfo');
const $appititeHover = $('#appititeHover');

const $quipInfo = $('#quipInfo');
const $quipHover = $('#quipHover');

const $xcursionInfo = $('#xcursionInfo');
const $xcursionHover = $('#xcursionHover');

const $contactBtn = $('#contactBtn');
const $contactModel = $('.contactModel');

// Contact Model
$contactBtn.on('click', () => {
  console.log('clicked');
  if ($('.contactModel').css('display') == 'none') {
    $('.contactModel').css('display', 'block');
  } else if ($('.contactModel').css('display') == 'block') {
    $('.contactModel').css('display', 'none');
  };

});

// tic_tac_toes
$ticHover.on( "mouseover", () => {
  $('#ticInfo').fadeIn( 500 );
});

$ticHover.on( "mouseout", () => {
  $('#ticInfo').fadeOut( 400 );
});

// Appitite
$appititeHover.on( "mouseover", () => {
  $('#appititeInfo').fadeIn( 500 );
});

$appititeHover.on( "mouseout", () => {
  $('#appititeInfo').fadeOut( 400 );
});

// quip_pro_quo
$quipHover.on( "mouseover", () => {
  $('#quipInfo').fadeIn( 500 );
});

$quipHover.on( "mouseout", () => {
  $('#quipInfo').fadeOut( 400 );
});

// xcursion
$xcursionHover.on( "mouseover", () => {
  $('#xcursionInfo').fadeIn( 500 );
});

$xcursionHover.on( "mouseout", () => {
  $('#xcursionInfo').fadeOut( 400 );
})

// Burger Modal  - - - - - - - -
  $headerBtn.on('click', () => {
    $('.mobileLinks').css('display', 'flex');
    $('.burger').css('display', 'none');
    $('.closeheaderBtn').css('display', 'inline-block');

  });
  $closeheaderBtn.on('click', () => {
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'inline-block');
    $('.closeheaderBtn').css('display', 'none');
  });

  $mobileLink.on('click', () => {
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'inline-block');
    $('.closeheaderBtn').css('display', 'none');
  });
  $homeBtn.on('click', () => {
    if ($(window).width() < 735) {
      $('.mobileLinks').css('display', 'none');
      $('.burger').css('display', 'inline-block');
      $('.closeheaderBtn').css('display', 'none');
    }
  });

$(window).on('resize', () => {
  if ($(window).width() > 735) {
    console.log("window width: ", $(window).width());
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'none');
    $('.closeheaderBtn').css('display', 'none');
  } else {
    $('.burger').css('display', 'inline-block');
  }
})
// Scroll Feautres
// let $animation_elements = $('.animation-element');
// $(window).on('scroll resize', check_in_view);
// $(window).trigger('scroll');
//
// let  check_in_view() => {
//   let window_height = $(window).height();
//   let window_top_position = $(window).scrollTop();
//   let window_bottom_position = (window_top_position + window_height);
//
//   $.each($animation_elements, () => {
//     let $element = $(this);
//     let element_height = $element.outerHeight();
//     let element_top_position = $element.offset().top;
//     let element_bottom_position = (element_top_position + element_height);
//
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       $element.addClass('in-view');
//     } else {
//       $element.removeClass('in-view');
//     }
//   });
// }

});
