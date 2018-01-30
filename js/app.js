$( () => {

// Variables

const $homeBtn = $('#homeBtn');
const $headerBtn = $('.burger');
const $closeheaderBtn = $('.closeheaderBtn');
const $mobileLink = $('.mobileLinks');

const $ticTacToes = $('#tic_tac_toes');
const $tictacToesInfo = $('#ticInfo');

const $appitite = $('#appitite');
const $appititeInfo = $('#appititeInfo');

const $quip_pro_quo = $('#quip_pro_quo');
const $quipInfo = $('#quipInfo');

const $xcursion = $('#xcursion');
const $xcursionInfo = $('#xcursionInfo');

// tic_tac_toes
$ticTacToes.on( "mouseover", () => {
  $('#ticInfo').fadeIn( 500 );
});

$tictacToesInfo.on( "mouseout", () => {
  $('#ticInfo').fadeOut( 400 );
});

// Appitite
$appitite.on( "mouseover", () => {
  $('#appititeInfo').fadeIn( 500 );
});

$appititeInfo.on( "mouseout", () => {
  $('#appititeInfo').fadeOut( 400 );
});

// quip_pro_quo
$quip_pro_quo.on( "mouseover", () => {
  $('#quipInfo').fadeIn( 500 );
});

$quipInfo.on( "mouseout", () => {
  $('#quipInfo').fadeOut( 400 );
});

// xcursion
$xcursion.on( "mouseover", () => {
  $('#xcursionInfo').fadeIn( 500 );
});

$xcursionInfo.on( "mouseout", () => {
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
    $('.mobileLinks').css('display', 'none');
    $('.burger').css('display', 'inline-block');
    $('.closeheaderBtn').css('display', 'none');
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
