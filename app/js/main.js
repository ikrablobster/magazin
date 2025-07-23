const modContainer = document.querySelector('.view-mode__container');
const btnGrid = document.querySelector('.view-mode__btn-grid');
const btnLine = document.querySelector('.view-mode__btn-line');

btnGrid.addEventListener('click', () => {
  modContainer.classList.add('view-mode__container-grid')
  modContainer.classList.remove('view-mode__container-line')
})

btnLine.addEventListener('click', () => {
  modContainer.classList.add('view-mode__container-line')
  modContainer.classList.remove('view-mode__container-grid')
})

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

const rangeSlider = document.querySelector('.range__slider');
const rangeMin = document.querySelector('.range__min');
const rangeMax = document.querySelector('.range__max');

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    'min': 300,
    'max': 3000
  },
  format: {
    to: Value => Math.round(Value),
    from: Value => Number(Value)
  }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    rangeMin.value = values[0]
  } else {
    rangeMax.value = values[1]
  }
})

rangeMin.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([rangeMin.value, null])
});

rangeMax.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([null, rangeMax.value])
});