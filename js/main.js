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

window.addEventListener("scroll", onScollNav);

function onScollNav() {
  const navigation = document.querySelector(".navigation");
  const scrollTop = window.scrollY;
  if (scrollTop >= 200) {
    navigation?.classList?.remove("navigation-scroll");
    navigation?.classList?.add("navigation-fixed");
  } else {
    navigation?.classList?.remove("navigation-fixed");
    navigation?.classList?.add("navigation-scroll");
  }
}
