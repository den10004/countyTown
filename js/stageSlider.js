const swiper = new Swiper(".stageSlider", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".stageSlider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".stageSlider-button-next",
    prevEl: ".stageSlider-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
    },
  },
});
