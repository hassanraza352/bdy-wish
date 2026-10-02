// ---------- CONFIG ----------
// Change these to personalize the surprise
const CONFIG = {
  year: 2005,
  month: 9,      // 0-indexed => 7 = August
  markedDay: 7,
  dayTagText: "Your Day ❤",
  loadingDuration: 3200 // ms
};

// ---------- LOADING SCREEN ----------
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const loadingScreen = document.getElementById('loading-screen');
const calendarScreen = document.getElementById('calendar-screen');

let start = null;

function animateProgress(timestamp) {
  if (!start) start = timestamp;
  const elapsed = timestamp - start;
  let pct = Math.min(100, Math.round((elapsed / CONFIG.loadingDuration) * 100));

  progressFill.style.width = pct + '%';
  progressText.textContent = pct + '%';

  if (pct < 100) {
    requestAnimationFrame(animateProgress);
  } else {
    setTimeout(goToCalendar, 450);
  }
}

function goToCalendar() {
  loadingScreen.classList.remove('active');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    calendarScreen.classList.add('active');
  }, 50);
}

requestAnimationFrame(animateProgress);

// ---------- CALENDAR BUILD ----------
const monthNames = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
  "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

function buildCalendar() {

  const CONFIG = {
  year: 2005,
  month: 9,           // 0-indexed => 7 = August
  markedDay: 4,        // the birthday date
  markedDayWeekday: 0, // 0 = Sunday, 1 = Monday ... 6 = Saturday (which day markedDay falls on)
  // dayTagText: "Your Day ❤",
  loadingDuration: 3200 // ms
};

  document.querySelector('.cal-month').textContent = monthNames[CONFIG.month];
  document.querySelector('.cal-year').textContent = CONFIG.year;

  const calDates = document.getElementById('calDates');
  calDates.innerHTML = '';

const firstDay = ((CONFIG.markedDayWeekday - (CONFIG.markedDay - 1)) % 7 + 7) % 7;
const daysInMonth = new Date(CONFIG.year, CONFIG.month + 1, 0).getDate();

  // leading empty cells
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('span');
    empty.className = 'empty';
    empty.textContent = '.';
    calDates.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('span');

    if (d === CONFIG.markedDay) {
      cell.classList.add('cal-marked');
      const tag = document.createElement('span');
      tag.className = 'day-tag';
      tag.textContent = CONFIG.dayTagText;

      const num = document.createElement('span');
      num.className = 'marked';
      num.textContent = d;

      cell.appendChild(tag);
      cell.appendChild(num);
    } else {
      cell.textContent = d;
    }
    calDates.appendChild(cell);
  }

  // formatted date line, e.g. 07 . 08 . 2005
  const dd = String(CONFIG.markedDay).padStart(2, '0');
  const mm = String(CONFIG.month + 1).padStart(2, '0');
  document.querySelector('.marked-date').textContent = `${dd} . ${mm} . ${CONFIG.year}`;
}

buildCalendar();

// ---------- BUTTON ----------
document.getElementById('ctaBtn').addEventListener('click', () => {
  const btn = document.getElementById('ctaBtn');
  btn.textContent = 'Saved Forever ❤';
  btn.disabled = true;
  btn.style.opacity = '0.85';
});
