/* Falling flower petals — used on every page */
(function () {
  const layer = document.createElement('div');
  layer.className = 'petal-layer';
  document.body.appendChild(layer);

  const emojis = ['🌸', '🌺', '💮', '🌷'];
  const colors = ['#e79ab5', '#f0c3cf', '#c8577a', '#f4d6a8'];

  function makePetal() {
    const el = document.createElement('div');
    el.className = 'petal';
    const size = 12 + Math.random() * 14;
    const useEmoji = Math.random() > 0.4;
    if (useEmoji) {
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.fontSize = size + 'px';
    } else {
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.borderRadius = '50% 0 50% 50%';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
    }
    const startX = Math.random() * 100;
    const duration = 8 + Math.random() * 7;
    const drift = (Math.random() - 0.5) * 160;
    const spin = (Math.random() - 0.5) * 720;
    el.style.left = startX + 'vw';

    layer.appendChild(el);

    const anim = el.animate(
      [
        { transform: `translate(0,0) rotate(0deg)`, opacity: 0 },
        { transform: `translate(0, 12vh) rotate(${spin * 0.2}deg)`, opacity: 0.9, offset: 0.08 },
        { transform: `translate(${drift * 0.6}px, 70vh) rotate(${spin * 0.6}deg)`, opacity: 0.9, offset: 0.75 },
        { transform: `translate(${drift}px, 108vh) rotate(${spin}deg)`, opacity: 0 }
      ],
      { duration: duration * 1000, easing: 'linear' }
    );
    anim.onfinish = () => el.remove();
  }

  // gentle, occasional petals rather than a blizzard
  makePetal();
  setInterval(makePetal, 900);
})();
