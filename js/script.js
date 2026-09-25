document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Falling petals ---------- */
  const petalEmojis = ['🌸','🌺','🎀','💮','✿'];
  const petalsWrap = document.getElementById('petals');
  function spawnPetal(){
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = petalEmojis[Math.floor(Math.random()*petalEmojis.length)];
    p.style.left = Math.random()*100 + 'vw';
    const duration = 8 + Math.random()*8;
    p.style.animationDuration = duration + 's';
    p.style.fontSize = (0.9 + Math.random()*1.1) + 'rem';
    petalsWrap.appendChild(p);
    setTimeout(() => p.remove(), duration*1000);
  }
  for(let i=0;i<10;i++) setTimeout(spawnPetal, i*600);
  setInterval(spawnPetal, 1400);

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------- Scroll-spy ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = sections[0].id;
    sections.forEach(sec => {
      if (window.scrollY + 140 >= sec.offsetTop) current = sec.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  /* ---------- Secret message modal ---------- */
  const secretModal = document.getElementById('secretModal');
  document.getElementById('openSurprise').addEventListener('click', () => {
    secretModal.classList.add('open');
  });
  document.getElementById('closeSecret').addEventListener('click', () => {
    secretModal.classList.remove('open');
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxCap = document.getElementById('lightboxCap');
  document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => {
      lightboxCap.textContent = card.dataset.caption;
      lightbox.classList.add('open');
    });
  });
  document.getElementById('closeLightbox').addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  /* close modals on overlay click */
  [secretModal, lightbox].forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  /* ---------- Animated stat counters ---------- */
  const stats = document.querySelectorAll('.stat-num');
  let statsAnimated = false;
  function animateStats(){
    if (statsAnimated) return;
    statsAnimated = true;
    stats.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1400;
      const start = performance.now();
      function step(now){
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(step);
    });
  }
  const statsSection = document.querySelector('.stats');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) animateStats(); });
  }, { threshold: 0.4 });
  if (statsSection) io.observe(statsSection);

  /* ---------- Blow out candle ---------- */
  const blowBtn = document.getElementById('blowBtn');
  const flame = document.getElementById('flame');
  let candleOut = false;
  blowBtn.addEventListener('click', () => {
    if (candleOut) return;
    candleOut = true;
    flame.classList.add('out');
    blowBtn.textContent = '✨ Wish Made! The Magic Is Real';
    burstConfetti(80, window.innerWidth/2, window.innerHeight*0.55);
  });

  /* ---------- Confetti (canvas, vanilla JS) ---------- */
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  function resizeCanvas(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const colors = ['#e8637a','#f0c674','#f4a8bb','#ffffff','#d94f6b'];
  let particles = [];
  let rafId = null;

  function burstConfetti(count, x, y){
    for (let i = 0; i < count; i++){
      particles.push({
        x: x, y: y,
        vx: (Math.random()-0.5) * 12,
        vy: (Math.random()* -12) - 4,
        size: 5 + Math.random()*6,
        color: colors[Math.floor(Math.random()*colors.length)],
        rotation: Math.random()*360,
        vr: (Math.random()-0.5) * 10,
        gravity: 0.35,
        life: 0,
        maxLife: 130 + Math.random()*50
      });
    }
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function tick(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;
      p.life++;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - p.life/p.maxLife);
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size*0.6);
      ctx.restore();
    });
    particles = particles.filter(p => p.life < p.maxLife && p.y < canvas.height + 50);
    if (particles.length > 0){
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }
  }

  /* ---------- Grand finale ---------- */
  document.getElementById('finaleBtn').addEventListener('click', () => {
    for (let i = 0; i < 4; i++){
      setTimeout(() => {
        burstConfetti(60, Math.random()*canvas.width, canvas.height*0.15);
      }, i * 300);
    }
  });

});

const videos = [
  "videos/video1.mp4",
  "videos/video2.mp4"
];