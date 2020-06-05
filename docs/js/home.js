const slider = new Swiper('.swiper-container', {
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 7500,
  },
});

const scroller = scrollama();
const scrollerViz = document.querySelector('.step-viz');

scroller
  .setup({
    step: '.step',
    offset: 0.1,
    progress: true,
  })
  .onStepProgress(handleStepProgress)
  .onStepEnter(handleStepEnter)
  .onStepExit(handleStepExit);

function handleStepEnter(response) {
  const element = response.element;
  const step = element.dataset.step;
  element.classList.toggle('opacity-85');
  scrollerViz.textContent = step;
}

function handleStepExit(response) {
  const element = response.element;
  element.classList.toggle('opacity-85');
}

function handleStepProgress(response) {}
