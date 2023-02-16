const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 500,

  pagination: {
    el: '.hero-slider__pagination',
  },

  navigation: {
    nextEl: '.hero-slider__nav--next',
    prevEl: '.hero-slider__nav--prev',
  },
});

