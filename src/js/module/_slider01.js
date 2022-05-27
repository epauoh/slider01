export function slider01() {
  const slider = new Swiper('#js-slider01', {
    loop: true,
    loopedSlides: 7.5,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const thumbnail = new Swiper('#js-slider01Thumbnail', {
    loop: true,
    slidesPerView: 7.5,
    centeredSlides: true,
  });
  slider.controller.control = thumbnail;
  thumbnail.controller.control = slider;
}
