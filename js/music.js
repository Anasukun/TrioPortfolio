(function () {
  var STORAGE_KEY = 'trio-music-muted';

  var audio = new Audio('js/Edge of Tomorrow - Synthwave - Royalty Free Music.mp3');
  audio.loop = true;
  audio.volume = 0.3;

  var savedMuted = localStorage.getItem(STORAGE_KEY);
  var isMuted = savedMuted === 'true';
  audio.muted = isMuted;

  var btn = document.createElement('button');
  btn.id = 'music-toggle-btn';
  btn.setAttribute('aria-label', 'Toggle music');
  btn.setAttribute('title', 'Toggle music');

  var iconPlaying = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>';

  var iconMuted = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>';

  function updateIcon() {
    btn.innerHTML = isMuted ? iconMuted : iconPlaying;
  }
  updateIcon();
  document.body.appendChild(btn);

  function tryAutoplay() {
    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        document.addEventListener('click', startOnInteraction, { once: true });
        document.addEventListener('keydown', startOnInteraction, { once: true });
        document.addEventListener('touchstart', startOnInteraction, { once: true });
      });
    }
  }

  function startOnInteraction() {
    audio.play();
    document.removeEventListener('click', startOnInteraction);
    document.removeEventListener('keydown', startOnInteraction);
    document.removeEventListener('touchstart', startOnInteraction);
  }

  tryAutoplay();

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    isMuted = !isMuted;
    audio.muted = isMuted;
    localStorage.setItem(STORAGE_KEY, isMuted);
    updateIcon();

    if (audio.paused) {
      audio.play();
    }
  });
})();
