const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
const slider = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
});

updateArrows();

slider.on('slideNextTransitionEnd', function () {
  updateArrows();
});

slider.on('slidePrevTransitionEnd', function () {
  updateArrows();
});

buttonNext.addEventListener('click', function () {
  slider.slideNext();
  updateArrows();
});

buttonPrev.addEventListener('click', function () {
  slider.slidePrev();
  updateArrows();
});

function toggleArrow(el, flag) {
  el.classList.toggle('opacity-0', flag);
}

function updateArrows() {
  toggleArrow(buttonPrev, slider.isBeginning);
  toggleArrow(buttonNext, slider.isEnd);
}
