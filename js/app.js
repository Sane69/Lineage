$(document).ready(function() {
  $('.slider').slick({
    arrows: false,
    dots: true
  })
  
  $('.header__burger').click(function() {
    $('.header__burger, .header__mobile').toggleClass('active')
    $('body').toggleClass('lock')
})

  $('#world2').click(function(e) {
    $('.worlds-img1').addClass('hide');
    $('.worlds-img2').addClass('active');
    $('.content__worlds').addClass('second');
    $('.content__worlds--img').addClass('second');
    e.preventDefault()
  })
  $('#world1').click(function(e) {
    $('.worlds-img1').removeClass('hide');
    $('.worlds-img2').removeClass('active');
    $('.content__worlds').removeClass('second');
    $('.content__worlds--img').removeClass('second');
    e.preventDefault()
  })
  $('.popup__btn--login').click(function() {
    $('.popup__info--sign').addClass('hide')
    $('.popup__info--login').addClass('active')
    $('.popup__btn--login').addClass('active')
    $('.popup__btn--sign').addClass('notActive')
  })
  $('.popup__btn--sign').click(function() {
    $('.popup__info--sign').removeClass('hide')
    $('.popup__info--login').removeClass('active')
    $('.popup__btn--login').removeClass('active')
    $('.popup__btn--sign').removeClass('notActive')
  })
  $('.popup__close').click(function() {
    $('.sign').removeClass('active')
    $('.popup').removeClass('active')
  })
  $('.header__buttons--sign').click(function() {
    $('.sign').addClass('active')
    $('.popup').addClass('active')
  })
  $('.header__buttons--login').click(function() {
    $('.sign').addClass('active')
    $('.popup').addClass('active')
    $('.popup__info--sign').addClass('hide')
    $('.popup__info--login').addClass('active')
    $('.popup__btn--login').addClass('active')
    $('.popup__btn--sign').addClass('notActive')
  })
  $('.footer__lang').click(function(e) {
    $('.footer__lang--other, .footer__lang--arrow').toggleClass('active')
    e.preventDefault()
  })
  $('.ranking__world1').click(function(e) {
    $('.ranking__world2, .ranking__world1 img').toggleClass('active')
    e.preventDefault()
  })
  $('.download__title--link2').click(function(e) {
    $('.download__title--link2').addClass('active')
    $('.download__title--link1').addClass('notActive')
    $('.download__option--media').addClass('hide')
    e.preventDefault()
  })
  $('.download__title--link1').click(function(e) {
    $('.download__title--link2').removeClass('active')
    $('.download__title--link1').removeClass('notActive')
    $('.download__option--media').removeClass('hide')
    e.preventDefault()
  })
})