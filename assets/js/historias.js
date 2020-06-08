const layer = document.getElementById('second-layer');
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.step',
  triggerHook: 0,
  duration: '100%',
})
  .setPin('.step')
  .addTo(controller);

scene.on('progress', function (event) {
  layer.style.opacity = event.progress;
});
