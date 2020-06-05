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
let targetViz;

scroller
  .setup({
    step: '.step',
    offset: 0.1,
    progress: true
  })
  .onStepProgress(handleStepProgress)
  .onStepEnter(handleStepEnter)
  .onStepExit(handleStepExit);

function handleStepEnter(response) {
  const element = response.element;
  const step = response.element.dataset.step;
  target = document.getElementById(step);
  element.classList.toggle('opacity-85');
}

function handleStepExit(response) {
  const element = response.element;
  element.classList.toggle('opacity-85');
  target.style.opacity = 0;
}

function handleStepProgress(response) {
  target.style.opacity = 1.5 - response.progress;
}
