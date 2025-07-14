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