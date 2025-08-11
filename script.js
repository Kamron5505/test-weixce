const swiper = new Swiper(".showcase-swiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Когда страница полностью загрузится — скрываем прелоадер, показываем контент
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.display = "block";
});
