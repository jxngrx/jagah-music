import { places, placeBySlug } from './places.js';
import { prefetchStation } from './stations/load.js';
import { bootI18n, getLang, onLang, t } from './i18n.js';

bootI18n();

const ORDER_KEY = 'jagah-place-order';
const grid = document.getElementById('grid');
const footLive = document.querySelector('[data-i18n-live]');

function loadOrder() {
  try {
    const raw = JSON.parse(localStorage.getItem(ORDER_KEY) || 'null');
    return Array.isArray(raw) ? raw.map(String) : null;
  } catch {
    return null;
  }
}

function orderedPlaces() {
  const order = loadOrder();
  if (!order?.length) return [...places];
  const map = new Map(places.map((p) => [p.slug, p]));
  const out = [];
  for (const slug of order) {
    const p = map.get(slug);
    if (p) {
      out.push(p);
      map.delete(slug);
    }
  }
  for (const p of map.values()) out.push(p);
  return out;
}

function saveOrderFromDom() {
  const slugs = [...grid.querySelectorAll('.disk')].map((li) => li.dataset.slug).filter(Boolean);
  localStorage.setItem(ORDER_KEY, JSON.stringify(slugs));
}

function paintFoot() {
  const live = places.filter((p) => p.status === 'live').length;
  if (footLive) footLive.textContent = t('footLive', live);
}

function placeLabel(p) {
  return getLang() === 'en' ? p.en : p.title;
}

function renderGrid() {
  grid.innerHTML = '';
  orderedPlaces().forEach((p, i) => {
    const li = document.createElement('li');
    li.className =
      'disk' +
      (p.featured ? ' disk--fav' : '') +
      (p.status === 'soon' ? ' disk--soon' : '') +
      (i % 2 ? ' disk--drop' : ' disk--lift');
    li.dataset.slug = p.slug;
    li.draggable = true;
    li.style.setProperty('--accent', p.accent || '#d4a017');
    li.style.setProperty('--i', String(i));

    const tag = p.status === 'live' ? 'a' : 'div';
    const href =
      p.status === 'live' ? ` href="/place.html?p=${encodeURIComponent(p.slug)}"` : ' aria-disabled="true"';
    const img = p.card
      ? `<img class="disk__img" src="${p.card}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
      : '';
    const label = placeLabel(p);

    li.innerHTML = `
    <${tag} class="disk__link"${href}>
      <span class="disk__idx">${p.n}</span>
      <span class="disk__platter" style="background: radial-gradient(circle at 35% 30%, ${p.accent}66, #0d0d0d 62%)">
        ${img}
        <span class="disk__shine" aria-hidden="true"></span>
        <span class="disk__groove" aria-hidden="true"></span>
        <span class="disk__hole" aria-hidden="true"></span>
      </span>
      <h2 class="disk__title" lang="${getLang() === 'en' ? 'en' : 'hi'}">${label}</h2>
    </${tag}>
  `;
    grid.append(li);
  });

  wireDisks();
}

function paintDisks() {
  const lang = getLang();
  grid.querySelectorAll('.disk').forEach((li) => {
    const p = placeBySlug(li.dataset.slug);
    const title = li.querySelector('.disk__title');
    if (!p || !title) return;
    title.textContent = placeLabel(p);
    title.lang = lang === 'en' ? 'en' : 'hi';
  });
}

// ponytail: short portal then navigate; station chunk already warm from hover
function enterRealm(e) {
  if (didDrag) {
    didDrag = false;
    e.preventDefault();
    return;
  }
  const a = e.currentTarget;
  if (!(a instanceof HTMLAnchorElement)) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
  e.preventDefault();
  if (document.body.classList.contains('is-entering')) return;

  const href = a.href;
  const slug = a.closest('.disk')?.dataset.slug;
  if (slug) prefetchStation(slug);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const platter = a.querySelector('.disk__platter');
  const img = platter?.querySelector('.disk__img');
  if (reduce || !platter || !img) {
    location.href = href;
    return;
  }

  document.body.classList.add('is-entering');
  const r = platter.getBoundingClientRect();
  const portal = document.createElement('div');
  portal.className = 'realm';
  portal.setAttribute('aria-hidden', 'true');
  portal.innerHTML = `<img class="realm__img" src="${img.currentSrc || img.src}" alt="" />`;
  const shot = portal.querySelector('.realm__img');
  Object.assign(shot.style, {
    left: `${r.left}px`,
    top: `${r.top}px`,
    width: `${r.width}px`,
    height: `${r.height}px`,
  });
  document.body.append(portal);

  void shot.offsetWidth;
  portal.classList.add('realm--go');
  Object.assign(shot.style, {
    left: '0px',
    top: '0px',
    width: '100vw',
    height: '100vh',
    borderRadius: '0',
  });

  let done = false;
  const go = () => {
    if (done) return;
    done = true;
    location.href = href;
  };
  // was 850ms — felt stuck. navigate as soon as paint starts expanding
  shot.addEventListener('transitionend', go, { once: true });
  setTimeout(go, 220);
}

let dragEl = null;
let didDrag = false;

function wireDisks() {
  grid.querySelectorAll('a.disk__link').forEach((a) => {
    a.addEventListener('click', enterRealm);
    const slug = a.closest('.disk')?.dataset.slug;
    if (!slug) return;
    const warm = () => prefetchStation(slug);
    a.addEventListener('pointerenter', warm, { passive: true });
    a.addEventListener('focus', warm, { passive: true });
    a.addEventListener('touchstart', warm, { passive: true });
  });

  grid.querySelectorAll('.disk').forEach((li) => {
    li.addEventListener('dragstart', (e) => {
      dragEl = li;
      didDrag = false;
      li.classList.add('disk--dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', li.dataset.slug || '');
    });
    li.addEventListener('drag', () => {
      didDrag = true;
    });
    li.addEventListener('dragend', () => {
      li.classList.remove('disk--dragging');
      grid.querySelectorAll('.disk--over').forEach((n) => n.classList.remove('disk--over'));
      dragEl = null;
      saveOrderFromDom();
    });
    li.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (!dragEl || dragEl === li) return;
      li.classList.add('disk--over');
      const rect = li.getBoundingClientRect();
      const before = e.clientX < rect.left + rect.width / 2;
      if (before) grid.insertBefore(dragEl, li);
      else grid.insertBefore(dragEl, li.nextSibling);
    });
    li.addEventListener('dragleave', () => li.classList.remove('disk--over'));
    li.addEventListener('drop', (e) => {
      e.preventDefault();
      li.classList.remove('disk--over');
      saveOrderFromDom();
    });
  });
}

function resetRealm() {
  document.body.classList.remove('is-entering');
  document.querySelectorAll('.realm').forEach((el) => el.remove());
}
window.addEventListener('pageshow', resetRealm);

renderGrid();
paintFoot();
onLang(() => {
  paintFoot();
  paintDisks();
});
