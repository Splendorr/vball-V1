var timeoutID;

$(document).ready(function() {

  delayedSlide();

});

function delayedSlide() {
  timeoutID = window.setTimeout(slideLogoIn, 800);
}

function slideLogoIn() {
  $('.videoball-title').animate({
    'left': '0px'
  }, 800);
}