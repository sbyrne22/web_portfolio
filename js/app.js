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


});
