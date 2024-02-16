var swiper1 = new Swiper(".tournamentSlider", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".tournamentSlider-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".tournament-button-next",
    prevEl: ".tournament-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
  },
});
