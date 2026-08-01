(function () {
  var wrap = document.querySelector('.orb-wrap');
  var hero = document.querySelector('header.hero');
  if (!wrap || !hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var maxTilt = 10;

  function onMove(e) {
    var rect = wrap.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
    var dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
    var rotateY = dx * maxTilt;
    var rotateX = dy * -maxTilt;
    wrap.style.transform = 'perspective(600px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
  }

  function reset() {
    wrap.style.transform = '';
  }

  hero.addEventListener('mousemove', onMove);
  hero.addEventListener('mouseleave', reset);
})();
