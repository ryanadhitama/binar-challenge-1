AOS.init();

const swiper = new Swiper(".swiper", {
  // loop: true,
  centeredSlides: true,
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
