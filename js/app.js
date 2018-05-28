$( () => {

// Variables

const $homeBtn = $('#homeBtn');
const $headerBtn = $('.burger');
const $closeheaderBtn = $('.closeheaderBtn');
const $mobileLink = $('.mobileLink');

const $tictacToesInfo = $('#ticInfo');
const $ticHover = $('#ticHover');

const $appititeInfo = $('#appititeInfo');
const $appititeHover = $('#appititeHover');

const $quipInfo = $('#quipInfo');
const $quipHover = $('#quipHover');

const $xcursionInfo = $('#xcursionInfo');
const $xcursionHover = $('#xcursionHover');

const $contactBtn = $('#contactBtn');
const $mobileContactBtn = $('#mobileContactBtn');
const $contactModel = $('.contactModel');

const navShadow = '0px 2px 2px 0px rgba(200, 200, 200, .8), 0 2px 8px 0 rgba(50, 50, 50, .8)';

// Contact Model
$contactBtn.on('click', () => {
  $( "#contactModel" ).removeClass("mobileContactModel");
  $( "#contactModel" ).addClass("contactModel");
  $( "#arrow" ).addClass("arrow");
  $( "#arrow" ).removeClass("mobileArrow");

  if ($('.contactModel').css('display') == 'none') {
    $('.contactModel').css('display', 'block');
  } else if ($('.contactModel').css('display') == 'block') {
    $('.contactModel').css('display', 'none');
  };
});

$mobileContactBtn.on('click', () => {
  $( "#contactModel" ).removeClass("contactModel");
  $( "#contactModel" ).addClass("mobileContactModel");
  $( "#arrow" ).removeClass("arrow");
  $( "#arrow" ).addClass("mobileArrow");

  if ($('.mobileContactModel').css('display') == 'none') {
    $('.mobileContactModel').css('display', 'block');
  } else if ($('.mobileContactModel').css('display') == 'block') {
    $('.mobileContactModel').css('display', 'none');
  };
});

// Burger Modal  - - - - - - - -


  $headerBtn.on('click', () => {
    $('.mobileLinks').css('display', 'flex');
    $('.burger').css('display', 'none');
    $('nav').css('box-shadow', 'none');
    $('.closeheaderBtn').css('display', 'inline-block');

  });
  $closeheaderBtn.on('click', () => {
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'inline-block');
    $('nav').css('box-shadow', navShadow);
    $('.closeheaderBtn').css('display', 'none');
    $('.mobileContactModel').css('display', 'none');
  });

  $mobileLink.on('click', () => {
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'inline-block');
    $('nav').css('box-shadow', navShadow);
    $('.closeheaderBtn').css('display', 'none');
    $('.mobileContactModel').css('display', 'none');
  });
  $homeBtn.on('click', () => {
    if ($(window).width() < 735) {
      $('.mobileLinks').css('display', 'none');
      $('.burger').css('display', 'inline-block');
      $('nav').css('box-shadow', navShadow);
      $('.closeheaderBtn').css('display', 'none');
      $('.mobileContactModel').css('display', 'none');
    }
  });

$(window).on('resize', () => {
  if ($(window).width() > 735) {
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'none');
    $('.closeheaderBtn').css('display', 'none');
    $('.mobileContactModel').css('display','none');
    $('nav').css('box-shadow', navShadow);
    //change styles for contact model and arrow
  } else {
    if ($('.closeheaderBtn').css('display') == 'none') {
      $('.burger').css('display', 'inline-block');
    }
    $('.contactModel').css('display', 'none');
  }
})

// Copy Clipboard -----------------
// Email
// Get text field
$('#copyEmail').on('click', () => {
  $("#emailInput").prop('disabled', false);
  let copyText = document.getElementById("emailInput");

  // Select text field
  copyText.select();

  // Copy text whithin text field
  document.execCommand("Copy");
  $("#emailInput").prop('disabled', true);
});

// Phone
// Get text field
$('#copyPhone').on('click', () => {
  $("#phoneInput").prop('disabled', false);
  let copyText = document.getElementById("phoneInput");

  // Select text field
  copyText.select();

  // Copy text whithin text field
  document.execCommand("Copy");
  $("#phoneInput").prop('disabled', true);
});

// End Copy Clipboard -----------------

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


// Animatin Triggers ---------------------------------------------

const $aboutText = $( "#aboutText" );
const $skills = $( "#skills" );
const $skillsDesc = $( "#skillsDesc" );
const $projDescTicTacToes = $( "#projDescTicTacToes" );
const $tic_tac_toesImg = $( "#tic_tac_toesImg" );
const $projDescAppitite = $( "#projDescAppitite" );
const $appititeImg = $( "#appititeImg" );
const $projDescQuipProQuo = $( "#projDescQuipProQuo" );
const $quip_pro_quoImg = $( "#quip_pro_quoImg" );
const $projDescXcursion = $( "#projDescXcursion" );
const $xcursionImg = $( "#xcursionImg" );


$isInViewport = (element) => {
  let elementTop = ($(element).offset().top) + 50;
  let elementBottom = (elementTop + $(element).outerHeight()) - 150;
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

  $(window).on('scroll resize', checkAddAnimation = () => {
    // aboutText ----------------
    if ($isInViewport($aboutText) == true) {
      // add animation class
      $aboutText.addClass("leftToRight");
    };

    // skills ----------------
    if ($isInViewport($skills) == true) {
      // add animation class
      $skills.addClass("leftToRight");
    };
    if ($isInViewport($skillsDesc) == true) {
      // add animation class
      $skillsDesc.addClass("rightToLeft");
    };

    // Tic Tac Toes ----------------
    if ($isInViewport($projDescTicTacToes) == true) {
      // add animation class
      $projDescTicTacToes.addClass("leftToRight");
    };

    if ($isInViewport($tic_tac_toesImg) == true) {
      // add animation class
      $tic_tac_toesImg.addClass("rightToLeft");
    };

    // Appitite ----------------
    if ($isInViewport($projDescAppitite) == true) {
      // add animation class
      $projDescAppitite.addClass("leftToRight");
    };

    if ($isInViewport($appititeImg) == true) {
      // add animation class
      $appititeImg.addClass("rightToLeft");
    };

    // Quip Pro Quo ----------------
    if ($isInViewport($projDescQuipProQuo) == true) {
      // add animation class
      $projDescQuipProQuo.addClass("leftToRight");
    };

    if ($isInViewport($quip_pro_quoImg) == true) {
      // add animation class
      $quip_pro_quoImg.addClass("rightToLeft");
    };

    // XCursion ----------------
    if ($isInViewport($projDescXcursion) == true) {
      // add animation class
      $projDescXcursion.addClass("leftToRight");
    };

    if ($isInViewport($xcursionImg) == true) {
      // add animation class
      $xcursionImg.addClass("rightToLeft");
    };
  });

  checkAddAnimation();

});
