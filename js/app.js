$( () => {

// Variables

const $headerBtn = $('.burger')
const $closeheaderBtn = $('.closeheaderBtn');
const $mobileLink = $('.mobileLink');

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

    $('.closeheaderBtn').css('display', 'none');
  });

  // if ($(window).width() > 750) {
  //   $('.mobileLinks').css('display', 'none');
  //   $('.burger').css('display', 'none');
  //   $('.closeheaderBtn').css('display', 'none');
  // } else if ($(window).width() < 750){
  //   $('.burger').css('display', 'inline-block');
  // }

});
