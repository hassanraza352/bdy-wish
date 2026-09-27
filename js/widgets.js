/* Shared like-counter widget, injected on every page */
(function () {
  const KEY = 'ayesha_bday_likes';
  const BASE = 2230;

  function currentCount() {
    const saved = localStorage.getItem(KEY);
    return saved ? parseInt(saved, 10) : BASE;
  }

  const wrap = document.createElement('div');
  wrap.className = 'side-widgets';
  wrap.innerHTML = `
    <button class="like-pill" id="likeBtn" aria-label="Like">
      <svg id="heartIcon" viewBox="0 0 24 24" fill="none" stroke="#b23458" stroke-width="1.8">
        <path d="M12 20.5s-7.5-4.6-10-9.3C.4 7.8 2 4.2 5.6 3.6c2-.3 3.9.6 5 2.3l1.4 2 1.4-2c1.1-1.7 3-2.6 5-2.3 3.6.6 5.2 4.2 3.6 7.6-2.5 4.7-10 9.3-10 9.3z" fill="none"/>
      </svg>
      <span class="count" id="likeCount">${currentCount().toLocaleString()}</span>
    </button>
  `;
  document.body.appendChild(wrap);

  const btn = document.getElementById('likeBtn');
  const icon = document.getElementById('heartIcon');
  const countEl = document.getElementById('likeCount');
  let liked = localStorage.getItem(KEY + '_liked') === '1';

  function render() {
    icon.setAttribute('fill', liked ? '#b23458' : 'none');
    countEl.textContent = currentCount().toLocaleString();
  }
  render();

  btn.addEventListener('click', () => {
    liked = !liked;
    const c = currentCount() + (liked ? 1 : -1);
    localStorage.setItem(KEY, c);
    localStorage.setItem(KEY + '_liked', liked ? '1' : '0');
    btn.style.transform = 'scale(1.15)';
    setTimeout(() => (btn.style.transform = ''), 150);
    render();
  });
})();
