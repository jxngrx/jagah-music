import { places } from './places.js';
import { bootI18n, getLang, onLang, t } from './i18n.js';

bootI18n();

const grid = document.getElementById('grid');
const live = places.filter((p) => p.status === 'live').length;
const footLive = document.querySelector('[data-i18n-live]');

function paintFoot() {
  if (footLive) footLive.textContent = t('footLive', live);
}

function placeLabel(p) {
  return getLang() === 'en' ? p.en : p.title;
}

places.forEach((p, i) => {
  const li = document.createElement('li');
  li.className =
    'disk' +
    (p.featured ? ' disk--fav' : '') +
    (p.status === 'soon' ? ' disk--soon' : '') +
    (i % 2 ? ' disk--drop' : ' disk--lift');
  li.dataset.slug = p.slug;
  li.style.setProperty('--accent', p.accent || '#d4a017');
  li.style.setProperty('--i', String(i));

  const tag = p.status === 'live' ? 'a' : 'div';
  const href = p.status === 'live' ? ` href="/place.html?p=${encodeURIComponent(p.slug)}"` : ' aria-disabled="true"';
  const img = p.card
    ? `<img class="disk__img" src="${p.card}" alt="" loading="lazy" onerror="this.remove()" />`
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

function paintDisks() {
  const lang = getLang();
  grid.querySelectorAll('.disk').forEach((li, i) => {
    const p = places[i];
    const title = li.querySelector('.disk__title');
    if (!p || !title) return;
    title.textContent = placeLabel(p);
    title.lang = lang === 'en' ? 'en' : 'hi';
  });
}

paintFoot();
onLang(() => {
  paintFoot();
  paintDisks();
});

// ponytail: disk expands fullscreen then navigate — “enter realm”
function enterRealm(e) {
  const a = e.currentTarget;
  if (!(a instanceof HTMLAnchorElement)) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
  e.preventDefault();
  if (document.body.classList.contains('is-entering')) return;

  const href = a.href;
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

  // reflow then expand
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
  shot.addEventListener('transitionend', go, { once: true });
  setTimeout(go, 850);
}

grid.querySelectorAll('a.disk__link').forEach((a) => {
  a.addEventListener('click', enterRealm);
});

// bfcache restore keeps .realm + is-entering — wipe on return
function resetRealm() {
  document.body.classList.remove('is-entering');
  document.querySelectorAll('.realm').forEach((el) => el.remove());
}
window.addEventListener('pageshow', resetRealm);