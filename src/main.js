import { lyricIndex, fetchLyrics } from './lyrics.js';
import { fetchMoreTracks } from './discover.js';
import { placeBySlug } from './places.js';
import { loadStation } from './stations/load.js';
import { bootI18n, getLang, onLang, t } from './i18n.js';

bootI18n();

const $ = (id) => document.getElementById(id);

const el = {
  player: $('player'),
  cover: $('cover'),
  title: $('title'),
  artist: $('artist'),
  seek: $('seek'),
  seekFill: $('seekFill'),
  seekKnob: $('seekKnob'),
  tCur: $('tCur'),
  tDur: $('tDur'),
  play: $('play'),
  prev: $('prev'),
  next: $('next'),
  shuffle: $('shuffle'),
  listBtn: $('listBtn'),
  list: $('list'),
  listItems: $('listItems'),
  listCount: $('listCount'),
  singerFilters: $('singerFilters'),
  mixBtn: $('mixBtn'),
  singerRow: $('singerRow'),
  langFilters: $('langFilters'),
  queueClose: $('queueClose'),
  sheetScrim: $('sheetScrim'),
  riders: $('riders'),
  ridersLabel: document.querySelector('.presence__label'),
  lyricLine: $('lyricLine'),
  bumperNext: $('bumperNext'),
  logo: document.querySelector('.logo'),
  bgImg: document.querySelector('.bg__img'),
  artBloom: $('artBloom'),
  linkYt: $('linkYt'),
  linkYtm: $('linkYtm'),
  linkSpotify: $('linkSpotify'),
  linkApple: $('linkApple'),
};

/** Filled in boot() from station pack */
let station = null;
let bumperLines = [];
let singers = [];
let lyricsById = {};
let coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const state = {
  tracks: [],
  order: [],
  pos: 0,
  shuffle: true,
  ready: false,
  playing: false,
  started: false,
  scrubbing: false,
  cues: null,
  lastLyric: '',
  lyricIdx: -1,
  lyricToken: 0,
  filters: new Set(),
  lang: 'mix',
  langTabs: false,
  appending: false,
  dry: false,
};

let yt = null;

const fmt = (s) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
};

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function filteredIndices() {
  return state.tracks
    .map((t, i) => i)
    .filter((i) => {
      const t = state.tracks[i];
      if (state.langTabs && state.lang !== 'mix' && t.lang !== state.lang) return false;
      if (!state.langTabs && state.filters.size && !state.filters.has(t.singer)) return false;
      return true;
    });
}

function buildOrder(avoidId) {
  let seq = filteredIndices();
  if (!seq.length) seq = state.tracks.map((_, i) => i); // safety
  if (state.shuffle) shuffle(seq);
  if (avoidId && seq.length > 1 && state.tracks[seq[0]]?.id === avoidId) {
    [seq[0], seq[1]] = [seq[1], seq[0]];
  }
  return seq;
}

const currentTrack = () => state.tracks[state.order[state.pos]];

let bumperOrder = [];
let bumperPos = 0;
let bumperTimer = null;
let swapTimer = null;

function resetBumpers() {
  bumperOrder = shuffle(bumperLines.map((_, i) => i));
  bumperPos = 0;
  clearInterval(bumperTimer);
  if (bumperLines.length) {
    bumperTimer = setInterval(nextBumper, 11000);
  }
}

function nextBumper() {
  if (state.cues || !bumperLines.length) return;
  bumperPos += 1;
  if (bumperPos >= bumperOrder.length) {
    const last = bumperOrder[bumperOrder.length - 1];
    bumperOrder = shuffle(bumperLines.map((_, i) => i));
    if (bumperOrder[0] === last && bumperOrder.length > 1) {
      [bumperOrder[0], bumperOrder[1]] = [bumperOrder[1], bumperOrder[0]];
    }
    bumperPos = 0;
  }
  setLyric(bumperLines[bumperOrder[bumperPos]]);
}

el.bumperNext.addEventListener('click', () => {
  clearInterval(bumperTimer);
  nextBumper();
  if (bumperLines.length) bumperTimer = setInterval(nextBumper, 11000);
});


function setLyric(text, force) {
  if (!text || (!force && text === state.lastLyric)) return;
  state.lastLyric = text;
  el.lyricLine.classList.add('is-swapping');
  setTimeout(() => {
    el.lyricLine.textContent = text;
    el.lyricLine.classList.remove('is-swapping');
  }, 160);
}

function closeSheets() {
  if (el.list) el.list.hidden = true;
  el.listBtn?.classList.remove('is-on');
  el.listBtn?.setAttribute('aria-expanded', 'false');
  if (el.sheetScrim) el.sheetScrim.hidden = true;
  document.body.classList.remove('sheet-open');
}

/** Phone: hoist queue sheet to body (escape main stacking). */
function hoistSheets() {
  if (!window.matchMedia('(max-width: 720px)').matches) return;
  if (el.sheetScrim && el.sheetScrim.parentElement !== document.body) {
    document.body.append(el.sheetScrim);
  }
  if (el.list && el.list.parentElement !== document.body) document.body.append(el.list);
}

function openSheet(kind) {
  if (kind !== 'queue') return;
  hoistSheets();
  if (el.list) el.list.hidden = false;
  el.listBtn?.classList.add('is-on');
  el.listBtn?.setAttribute('aria-expanded', 'true');
  if (el.sheetScrim) el.sheetScrim.hidden = false;
  document.body.classList.add('sheet-open');
  el.listItems.children[state.pos]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

async function bindLyricsForTrack(t) {
  const token = ++state.lyricToken;
  state.cues = lyricsById?.[t.id] || null;
  state.lyricIdx = -1;
  el.bumperNext.hidden = !!state.cues;
  if (state.cues) {
    setLyric(state.cues[0].line, true);
    return;
  }
  setLyric('…', true);
  const cues = await fetchLyrics({
    id: t.id,
    title: t.title,
    artist: t.artist || t.singer || '',
    duration: poll.duration || 0,
  });
  if (token !== state.lyricToken) return;
  if (cues?.length) {
    state.cues = cues;
    lyricsById[t.id] = cues;
    el.bumperNext.hidden = true;
    setLyric(cues[0].line, true);
  } else {
    state.cues = null;
    el.bumperNext.hidden = false;
    setLyric(bumperLines[bumperOrder[bumperPos]] || '♪', true);
  }
}

function listenLinks(t) {
  const q = encodeURIComponent(`${t.title} ${t.artist || ''}`.trim());
  el.linkYt.href = `https://www.youtube.com/watch?v=${t.id}`;
  el.linkYtm.href = `https://music.youtube.com/watch?v=${t.id}`;
  el.linkSpotify.href = `https://open.spotify.com/search/${q}`;
  el.linkApple.href = `https://music.apple.com/in/search?term=${q}`;
}

function renderTrack() {
  const t = currentTrack();
  if (!t) return;

  if (el.title.dataset.rendered) {
    el.player.classList.add('is-swapping');
    clearTimeout(swapTimer);
    swapTimer = setTimeout(() => el.player.classList.remove('is-swapping'), 40);
  }
  el.title.dataset.rendered = '1';

  el.title.textContent = t.title;
  el.artist.textContent = t.artist || '';
  el.cover.src = coverUrl(t.id);
  el.cover.alt = `${t.title} artwork`;
  el.cover.classList.add('is-letterboxed');
  if (el.artBloom) el.artBloom.style.backgroundImage = `url("${coverUrl(t.id)}")`;
  bindLyricsForTrack(t);
  listenLinks(t);

  if (state.started) {
    const place = station?.titleLines?.join(' ') || station?.titleEn || 'जगह';
    document.title = `${t.title} — ${place}`;
  }

  [...el.listItems.children].forEach((li, i) =>
    li.classList.toggle('is-current', i === state.pos),
  );
  const active = el.listItems.children[state.pos];
  if (active && !el.list.hidden) {
    active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function renderFilters() {
  if (state.langTabs && el.langFilters) {
    el.langFilters.querySelectorAll('.chip[data-lang]').forEach((btn) => {
      const on = btn.dataset.lang === state.lang;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));
    });
  }
  if (!state.langTabs && el.mixBtn) {
    el.mixBtn.classList.toggle('is-on', state.filters.size === 0);
    el.mixBtn.setAttribute('aria-pressed', String(state.filters.size === 0));
    el.singerFilters?.querySelectorAll('.chip[data-singer]').forEach((btn) => {
      const on = state.filters.has(btn.dataset.singer);
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));
    });
  }
}

function renderList() {
  el.listItems.innerHTML = '';
  const pool = filteredIndices().length;
  const tag = state.langTabs
    ? ({
        mix: t('mix'),
        haryanvi: 'हरियाणवी',
        punjabi: 'पंजाबी',
        hindi: 'हिंदी',
        lofi: 'Lofi',
        techno: 'Techno',
        'old-haryanvi': 'पुरानी हरियाणवी',
        'old-hindi': 'पुरानी हिंदी',
      }[state.lang] || t('mix'))
    : state.filters.size === 0
      ? t('mix')
      : [...state.filters].slice(0, 2).join(' · ') + (state.filters.size > 2 ? '…' : '');
  el.listCount.textContent = `${state.order.length} / ${pool} · ${tag}`;

  state.order.forEach((trackIdx, i) => {
    const t = state.tracks[trackIdx];
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';

    const title = document.createElement('span');
    title.className = 't-title';
    title.textContent = t.title;

    const artist = document.createElement('span');
    artist.className = 't-artist';
    artist.textContent = t.artist || '';

    const era = document.createElement('span');
    era.className = 't-era';
    era.textContent = t.era === 'new' ? 'NEW' : 'OLD';

    btn.append(title, artist, era);
    btn.addEventListener('click', () => go(i));
    li.append(btn);
    el.listItems.append(li);
  });
  renderFilters();
}

function applyFilterChange() {
  state.dry = false;
  const cur = currentTrack();
  const stillOk =
    cur &&
    (!state.langTabs || state.lang === 'mix' || cur.lang === state.lang) &&
    (state.langTabs || !state.filters.size || state.filters.has(cur.singer));
  state.order = buildOrder(stillOk ? null : cur?.id);
  if (stillOk) {
    const idx = state.order.findIndex((i) => state.tracks[i].id === cur.id);
    state.pos = idx >= 0 ? idx : 0;
  } else {
    state.pos = 0;
  }
  renderList();
  renderTrack();
  if (yt && state.started && !stillOk && currentTrack()) {
    yt.loadVideoById(currentTrack().id);
  }
  appendMore(6);
}

function renderPlaying(on) {
  state.playing = on;
  el.player.classList.toggle('is-playing', on);
  el.play.setAttribute('aria-label', on ? 'Pause' : 'Play');
}

/** Append fresh tracks after current order — never restart from song 1. */
async function appendMore(count = 8) {
  if (state.appending || state.dry) return 0;
  state.appending = true;
  if (el.listCount) el.listCount.textContent = t('searching');
  try {
    const langQ =
      state.langTabs && state.lang !== 'mix'
        ? station?.discoverByLang?.[state.lang]
        : null;
    const reserve = (station?.reserve || []).filter(
      (t) => !state.langTabs || state.lang === 'mix' || t.lang === state.lang,
    );
    const more = await fetchMoreTracks({
      excludeIds: state.tracks.map((t) => t.id),
      singers: state.langTabs ? [] : [...state.filters],
      count,
      reserve,
      discoverQueries: langQ?.length ? langQ : station?.discoverQueries || [],
    });
    if (state.langTabs) {
      const stamp = state.lang === 'mix' ? null : state.lang;
      const pick = () => {
        const opts = (station?.langChips || [])
          .map((c) => c.id)
          .filter((id) => id && id !== 'mix');
        if (opts.length) return opts[Math.floor(Math.random() * opts.length)];
        const r = Math.random();
        return r < 0.34 ? 'haryanvi' : r < 0.67 ? 'punjabi' : 'hindi';
      };
      more.forEach((t) => {
        if (!t.lang) t.lang = stamp || pick();
      });
    }
    if (!more.length) {
      state.dry = true;
      renderList();
      return 0;
    }
    const start = state.tracks.length;
    state.tracks.push(...more);
    let idxs = more.map((_, i) => start + i);
    if (state.shuffle) shuffle(idxs);
    state.order.push(...idxs);
    state.dry = false;
    renderList();
    return more.length;
  } catch {
    renderList();
    return 0;
  } finally {
    state.appending = false;
  }
}

async function go(newPos) {
  let n = state.order.length;
  if (!n) return;

  if (newPos >= n) {
    const added = await appendMore(8);
    n = state.order.length;
    if (!added || newPos >= n) {
      return;
    }
    state.pos = newPos;
  } else if (newPos < 0) {
    state.pos = 0;
  } else {
    state.pos = newPos;
  }

  // Prefetch when 2 from the end so next gap is already filled
  if (state.pos >= state.order.length - 2 && !state.appending && !state.dry) {
    appendMore(6);
  }

  renderTrack();
  if (!yt) return;
  state.started = true;
  yt.loadVideoById(currentTrack().id);
}

function toggle() {
  if (!yt || !state.ready) return;
  if (state.playing) yt.pauseVideo();
  else {
    state.started = true;
    yt.playVideo();
  }
}

/* Singer / lang filters */
function buildSingerChips() {
  el.singerFilters.innerHTML = '';
  singers.forEach((name) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.dataset.singer = name;
    btn.textContent = name;
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => {
      if (state.filters.has(name)) state.filters.delete(name);
      else state.filters.add(name);
      applyFilterChange();
    });
    el.singerFilters.append(btn);
  });
}

function injectLangExtra(extra) {
  if (!el.langFilters) return;
  el.langFilters.querySelectorAll('.chip[data-extra]').forEach((n) => n.remove());
  (extra || []).forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.dataset.lang = id;
    btn.dataset.extra = '1';
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = label;
    el.langFilters.append(btn);
  });
}

function buildLangChips(chips) {
  if (!el.langFilters || !chips?.length) return;
  el.langFilters.innerHTML = '';
  chips.forEach(({ id, label }, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip' + (id === 'mix' ? ' chip--mix' : '');
    if (i === 0) btn.classList.add('is-on');
    btn.dataset.lang = id;
    btn.setAttribute('aria-pressed', String(i === 0));
    btn.textContent = label;
    el.langFilters.append(btn);
  });
}

// ponytail: one listener covers static + station-injected chips
el.langFilters?.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip[data-lang]');
  if (!btn || !el.langFilters.contains(btn)) return;
  state.lang = btn.dataset.lang;
  applyFilterChange();
});

el.mixBtn?.addEventListener('click', () => {
  state.filters.clear();
  applyFilterChange();
});


const poll = { at: 0, time: 0, duration: 0 };
let lastSecond = -1;
let lastDuration = -1;

function samplePlayer() {
  if (!yt || typeof yt.getCurrentTime !== 'function') return;
  poll.time = yt.getCurrentTime() || 0;
  poll.duration = yt.getDuration() || 0;
  poll.at = performance.now();
}

function paintProgress() {
  requestAnimationFrame(paintProgress);
  if (!yt || state.scrubbing || !poll.duration) return;

  const drift = state.playing ? (performance.now() - poll.at) / 1000 : 0;
  const cur = Math.min(poll.duration, poll.time + drift);
  const frac = Math.min(1, Math.max(0, cur / poll.duration));

  el.seekFill.style.transform = `scaleX(${frac})`;
  el.seekKnob.style.transform = `translate(-50%, -50%) translateX(${frac * el.seek.clientWidth}px)`;

  const second = Math.floor(cur);
  if (second !== lastSecond) {
    lastSecond = second;
    el.tCur.textContent = fmt(cur);
    el.seek.setAttribute('aria-valuenow', String(Math.round(frac * 100)));
    if (state.cues) {
      const idx = lyricIndex(state.cues, cur);
      if (idx !== state.lyricIdx) {
        state.lyricIdx = idx;
        const line = state.cues[idx]?.line;
        if (line) setLyric(line);
      }
    }
  }
  if (poll.duration !== lastDuration) {
    lastDuration = poll.duration;
    el.tDur.textContent = fmt(poll.duration);
  }
}

function fractionFromEvent(e) {
  const r = el.seek.getBoundingClientRect();
  return Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
}

function previewSeek(frac) {
  el.seekFill.style.transform = `scaleX(${frac})`;
  el.seekKnob.style.transform = `translate(-50%, -50%) translateX(${frac * el.seek.clientWidth}px)`;
  if (yt && typeof yt.getDuration === 'function') {
    el.tCur.textContent = fmt((yt.getDuration() || 0) * frac);
  }
}

el.seek.addEventListener('pointerdown', (e) => {
  if (!yt) return;
  state.scrubbing = true;
  el.seek.setPointerCapture(e.pointerId);
  previewSeek(fractionFromEvent(e));
});

el.seek.addEventListener('pointermove', (e) => {
  if (state.scrubbing) previewSeek(fractionFromEvent(e));
});

el.seek.addEventListener('pointerup', (e) => {
  if (!state.scrubbing) return;
  state.scrubbing = false;
  el.seek.releasePointerCapture(e.pointerId);
  const dur = yt?.getDuration?.() || 0;
  if (dur) yt.seekTo(dur * fractionFromEvent(e), true);
  samplePlayer();
});

el.seek.addEventListener('keydown', (e) => {
  const step = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0;
  if (!step || !yt) return;
  e.preventDefault();
  yt.seekTo(Math.max(0, (yt.getCurrentTime() || 0) + step), true);
});

el.play.addEventListener('click', toggle);
el.prev.addEventListener('click', () => {
  if (yt && (yt.getCurrentTime() || 0) > 3) yt.seekTo(0, true);
  else go(state.pos - 1);
});
el.next.addEventListener('click', () => go(state.pos + 1));

el.shuffle.addEventListener('click', () => {
  const keep = currentTrack();
  state.shuffle = !state.shuffle;
  el.shuffle.classList.toggle('is-on', state.shuffle);
  el.shuffle.setAttribute('aria-pressed', String(state.shuffle));
  state.order = buildOrder();
  state.pos = Math.max(
    0,
    keep ? state.order.findIndex((i) => state.tracks[i].id === keep.id) : 0,
  );
  if (state.pos < 0) state.pos = 0;
  renderList();
  renderTrack();
});

el.listBtn.addEventListener('click', () => {
  if (el.list?.hidden === false) closeSheets();
  else openSheet('queue');
});

el.queueClose?.addEventListener('click', closeSheets);
el.sheetScrim?.addEventListener('click', closeSheets);

document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea, [contenteditable]')) return;
  if (e.key === 'Escape') closeSheets();
  if (e.key === ' ' || e.key === 'k') {
    e.preventDefault();
    toggle();
  } else if (e.key === 'n') go(state.pos + 1);
  else if (e.key === 'p') go(state.pos - 1);
  else if (e.key === 'l') el.listBtn.click();
});

function tickClock() {
  /* hub owns the clock now */
}

(function driftRiders() {
  const MIN = 30;
  const MAX = 97;
  let count = MIN + Math.floor(Math.random() * (MAX - MIN));
  el.riders.textContent = String(count);
  const step = () => {
    const mid = (MIN + MAX) / 2;
    const up = Math.random() < (count < mid ? 0.58 : 0.42);
    count = Math.max(MIN, Math.min(MAX, count + (up ? 1 : -1) * (1 + Math.floor(Math.random() * 3))));
    el.riders.textContent = String(count);
    setTimeout(step, 2800 + Math.random() * 3200);
  };
  setTimeout(step, 1800);
})();

function preferAudio() {
  try {
    yt?.setPlaybackQuality?.('tiny');
  } catch {
    /* ignore */
  }
}

window.onYouTubeIframeAPIReady = () => {
  const startId = currentTrack()?.id;
  yt = new YT.Player('yt-player', {
    height: '1',
    width: '1',
    videoId: startId,
    playerVars: {
      playsinline: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
    },
    events: {
      onReady: () => {
        state.ready = true;
        el.play.disabled = false;
        preferAudio();
      },
      onStateChange: (e) => {
        const S = YT.PlayerState;
        if (e.data === S.PLAYING) {
          renderPlaying(true);
          preferAudio();
        } else if (e.data === S.PAUSED) renderPlaying(false);
        else if (e.data === S.BUFFERING) renderPlaying(state.playing);
        else if (e.data === S.ENDED) go(state.pos + 1);
      },
      onError: () => {
        if (state.started) go(state.pos + 1);
      },
    },
  });

  setInterval(samplePlayer, 250);
  requestAnimationFrame(paintProgress);
};

// load YT while station chunk fetches — don't wait for boot()
{
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.append(tag);
}

function applySkin(s) {
  document.body.dataset.station = s.id || '';
  const lines = s.titleLines || [];
  paintLogo(s);
  if (el.bgImg && s.hero) el.bgImg.src = s.hero;
  if (el.ridersLabel && s.presenceLabel) el.ridersLabel.textContent = s.presenceLabel;

  document.title = s.titleEn || lines.join(' ') || 'जगह';
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme && s.themeColor) theme.content = s.themeColor;
  const desc = document.querySelector('meta[name="description"]');
  if (desc && s.description) desc.content = s.description;
  if (s.accent) {
    document.documentElement.style.setProperty('--accent', s.accent);
    document.documentElement.style.setProperty('--mustard', s.accent);
  }
}

function paintLogo(s) {
  if (!el.logo || !s) return;
  const lines = s.titleLines || [];
  if (getLang() === 'en') {
    const en = (s.hub?.en || s.titleEn || '').trim();
    el.logo.lang = 'en';
    el.logo.innerHTML = en
      ? `<span class="logo__line">${en}</span>`
      : lines.map((l) => `<span class="logo__line">${l}</span>`).join('');
    return;
  }
  el.logo.lang = 'hi';
  el.logo.innerHTML =
    lines.map((l) => `<span class="logo__line">${l}</span>`).join('') +
    `<span class="sr-only">${s.titleEn || ''}</span>`;
}

async function boot() {
  // paint hub meta before station chunk lands — kills blank wait
  const params = new URLSearchParams(location.search);
  const key = (params.get('p') || params.get('place') || '').trim();
  const metaEarly = key ? placeBySlug(key) : null;
  if (metaEarly) {
    if (el.bgImg && metaEarly.card) el.bgImg.src = metaEarly.card;
    if (metaEarly.accent) {
      document.documentElement.style.setProperty('--accent', metaEarly.accent);
      document.documentElement.style.setProperty('--mustard', metaEarly.accent);
    }
    if (el.logo) {
      const label = getLang() === 'en' ? metaEarly.en : metaEarly.title;
      el.logo.lang = getLang() === 'en' ? 'en' : 'hi';
      el.logo.innerHTML = `<span class="logo__line">${label}</span>`;
    }
    document.title = `${metaEarly.en || metaEarly.title} — जगह`;
  }

  station = await loadStation();
  if (!station) return;

  state.tracks = [...(station.tracks || [])];
  bumperLines = station.bumperLines || [];
  singers = station.singers || [];
  lyricsById = station.lyricsById || {};
  if (typeof station.coverUrl === 'function') coverUrl = station.coverUrl;

  state.langTabs = !!station.langTabs;
  // belt: never show lang tabs on these packs even if misconfigured
  if (['scorpio', 'ragni', 'saloon'].includes(station.id)) {
    state.langTabs = false;
  }
  state.lang = 'mix';
  state.filters.clear();
  if (el.langFilters) el.langFilters.hidden = !state.langTabs;
  if (el.singerRow) el.singerRow.hidden = !!state.langTabs;
  if (state.langTabs) {
    if (station.langChips?.length) buildLangChips(station.langChips);
    else injectLangExtra(station.langExtra);
  }

  applySkin(station);
  if (!state.langTabs) buildSingerChips();
  resetBumpers();
  if (bumperLines.length) setLyric(bumperLines[bumperOrder[0]] || bumperLines[0], true);

  state.order = buildOrder();

  if (el.title && !state.tracks.length) el.title.textContent = t('loadingTape');
  else if (el.title && !state.order.length) el.title.textContent = t('loadingTape');

  renderList();
  renderTrack();

  onLang(() => {
    paintLogo(station);
    renderList();
  });
}

boot();
