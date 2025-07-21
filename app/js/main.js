const swiper = new Swiper('.look__perfect-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.look__perfect-arrow-next',
    prevEl: '.look__perfect-arrow-prev',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  pagination: {
    el: ".reviews__pagination",
    type: "fraction",
  },
  loop: true,
  slidesPerView: 9,
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
});