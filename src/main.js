import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="AGOS home">
        <span class="brand-mascot"><img src="./mascot.png" alt="" /></span>
        <span>agos<span class="brand-dot">.</span></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a class="active" href="#ride">My ride</a>
        <a href="#routes">Routes</a>
        <a href="#how-it-works">How it works</a>
      </nav>
      <div class="topbar-actions">
        <button class="icon-button" aria-label="Notifications"><span class="notification-dot"></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg></button>
        <button class="profile-button" aria-label="Open profile"><span>JM</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
      </div>
      <button class="menu-button" aria-label="Open navigation menu"><span></span><span></span></button>
    </header>

    <main id="top">
      <section class="hero" id="ride">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-line"></span> Your river, in rhythm</p>
          <h1>Move with<br /><em>the current.</em></h1>
          <p class="hero-text">AGOS keeps your day flowing with live ferry times, simple routes, and a calmer way across the city.</p>
          <div class="hero-actions">
            <button class="primary-button" data-scroll="routes">Plan a crossing <span>↗</span></button>
            <button class="play-button" aria-label="Play AGOS story"><span class="play-icon">▶</span><span>See how AGOS works</span></button>
          </div>
        </div>
        <div class="hero-visual" aria-label="AGOS mascot guiding your Pasig River ferry ride">
          <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
          <div class="mascot-stage"><img src="./mascot.png" alt="AGOS ferry mascot" /></div>
          <div class="image-caption"><span class="caption-number">01</span><span class="caption-rule"></span><span>Pasig River / 06:42 AM</span></div>
          <div class="live-pill"><span class="pulse"></span> Live across the river</div>
          <div class="floating-note"><strong>Hi, Jamie!</strong><span>Your ride is ready.</span></div>
        </div>
      </section>

      <section class="dashboard-section" id="routes">
        <div class="section-heading">
          <div><p class="eyebrow dark"><span class="eyebrow-line"></span> Good morning, Jamie</p><h2>Your day at a glance<span class="heading-dot">.</span></h2></div>
          <button class="date-picker">Tuesday, 24 June <span>⌄</span></button>
        </div>
        <div class="dashboard-grid">
          <article class="next-ride-card">
            <div class="card-topline"><span>Next up</span><span class="status-label"><span class="status-dot"></span> On time</span></div>
            <div class="ride-route"><div class="station"><strong>Escolta</strong><small>07:10 AM</small></div><div class="route-path"><span class="path-dot"></span><span class="path-line"></span><span class="boat-icon">⌁</span></div><div class="station right"><strong>Guadalupe</strong><small>07:42 AM</small></div></div>
            <div class="ride-meta"><span><b>Ferry 04</b> · River express</span><span>32 min</span></div>
            <button class="card-link schedule-trigger">View full schedule <span>→</span></button>
          </article>
          <article class="weather-card">
            <div class="weather-topline"><span>Along the river</span><span>Now</span></div>
            <div class="weather-body"><div><span class="weather-temp">28°</span><span class="weather-unit">C</span><p>Clear skies, light breeze</p></div><div class="sun-icon"><span></span></div></div>
            <div class="water-line"><span></span><span></span><span></span><span></span><span></span></div>
          </article>
          <article class="saved-card">
            <div class="saved-heading"><span class="pin-icon">⌖</span><span>Saved places</span><button aria-label="Add saved place">+</button></div>
            <div class="place"><span class="place-icon">⌂</span><div><strong>Home</strong><small>From Guadalupe</small></div><span class="place-arrow">→</span></div>
            <div class="place"><span class="place-icon">✦</span><div><strong>Work</strong><small>From Escolta</small></div><span class="place-arrow">→</span></div>
          </article>
        </div>
      </section>

      <section class="statement" id="how-it-works"><p class="eyebrow"><span class="eyebrow-line"></span> Less waiting. More arriving.</p><h2>There’s a better<br /><em>way across.</em></h2><p>Built for the little moments between where you are and where you’re going.</p><a href="#routes" class="text-link">Explore your routes <span>→</span></a></section>
    </main>
    <footer><a class="brand footer-brand" href="#top"><span class="brand-mascot"><img src="./mascot.png" alt="" /></span><span>agos<span class="brand-dot">.</span></span></a><span>Smart transit for the Pasig River</span><span>© 2024 AGOS</span></footer>

    <div class="schedule-modal" role="dialog" aria-modal="true" aria-labelledby="schedule-title" hidden>
      <div class="modal-panel"><button class="close-modal" aria-label="Close schedule">×</button><p class="eyebrow dark"><span class="eyebrow-line"></span> Escolta to Guadalupe</p><h2 id="schedule-title">Today's crossings</h2><div class="schedule-list"><div><strong>07:10</strong><span>Ferry 04 · On time</span><b>32 min</b></div><div><strong>07:40</strong><span>Ferry 02 · On time</span><b>32 min</b></div><div><strong>08:10</strong><span>Ferry 06 · Boarding</span><b>32 min</b></div><div><strong>08:40</strong><span>Ferry 01 · Scheduled</span><b>32 min</b></div></div><button class="primary-button modal-button">Set a reminder <span>↗</span></button></div>
    </div>
  </div>
`

const modal = document.querySelector('.schedule-modal')
const openModal = () => { modal.hidden = false; document.body.classList.add('modal-open') }
const closeModal = () => { modal.hidden = true; document.body.classList.remove('modal-open') }
document.querySelectorAll('.schedule-trigger').forEach((button) => button.addEventListener('click', openModal))
document.querySelector('.close-modal').addEventListener('click', closeModal)
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal() })
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal() })
document.querySelector('[data-scroll]').addEventListener('click', () => document.querySelector('#routes').scrollIntoView({ behavior: 'smooth' }))
document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('.desktop-nav').classList.toggle('menu-open'))
document.querySelector('.play-button').addEventListener('click', (event) => { event.currentTarget.classList.toggle('playing'); event.currentTarget.querySelector('span:last-child').textContent = event.currentTarget.classList.contains('playing') ? 'Playing AGOS story' : 'See how AGOS works' })
