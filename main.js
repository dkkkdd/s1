const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  centeredSlides: true, // главный по центру
  slidesPerView: 3,       // сколько слайдов видно сразу
  effect: 'fade',



  slidesPerView: 'auto',     // ширина берётся из CSS
  centeredSlides: true,      // главный по центру
  spaceBetween: 200,          // отступы между слайдами

  // эффект "объёмный"
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,               // без поворота
    stretch: 0,              // без сжатия
    depth: 200,              // глубина (задний план)
    modifier: 1,
    slideShadows: false,     // тени не нужны

  },
});