/** Site EN/HI — one key, both pages. */

const KEY = 'jagah-lang';

const copy = {
  en: {
    eyebrow: 'Places have sound',
    heroSub: 'Music floating above the dust —',
    heroSubEm: 'pick a place, press play',
    cta: 'Enter a place',
    placesKicker: 'Catalog · press a disk',
    placesTitle: 'Listening places',
    placesTitleHi: 'जगहें',
    scrollHint: 'drag to reorder · scroll ↓',
    footLive: (n) => `${n} live · rest coming`,
    footYt: 'YouTube under the hood',
    queue: 'Queue',
    mix: 'Mix',
    loadingTape: 'Loading the tape…',
    searching: 'Searching…',
    homeAria: 'Back to JAGAH',
  },
  hi: {
    eyebrow: 'जगहों की आवाज़',
    heroSub: 'धूल के ऊपर तैरता संगीत —',
    heroSubEm: 'जगह चुनो, प्ले दबाओ',
    cta: 'जगह में जाओ',
    placesKicker: 'कैटलॉग · डिस्क दबाओ',
    placesTitle: 'सुनने की जगहें',
    placesTitleHi: 'जगहें',
    scrollHint: 'खींचो · स्क्रॉल ↓',
    footLive: (n) => `${n} लाइव · बाकी आ रहे`,
    footYt: 'अंदर YouTube',
    queue: 'कतार',
    mix: 'मिक्स',
    loadingTape: 'टेप लगा रहे हैं…',
    searching: 'खोज रहे हैं…',
    homeAria: 'जगह पर वापस',
  },
};

export function getLang() {
  const v = localStorage.getItem(KEY);
  return v === 'en' || v === 'hi' ? v : 'hi';
}

export function setLang(lang) {
  const next = lang === 'en' ? 'en' : 'hi';
  localStorage.setItem(KEY, next);
  document.documentElement.lang = next;
  window.dispatchEvent(new CustomEvent('jagah:lang', { detail: next }));
  return next;
}

export function t(key, ...args) {
  const bag = copy[getLang()] || copy.hi;
  const v = bag[key] ?? copy.hi[key] ?? key;
  return typeof v === 'function' ? v(...args) : v;
}

export function onLang(fn) {
  window.addEventListener('jagah:lang', (e) => fn(e.detail));
}

/** Wire EN/HI buttons + paint [data-i18n] nodes. */
export function bootI18n(root = document) {
  document.documentElement.lang = getLang();

  const paintToggle = () => {
    const lang = getLang();
    root.querySelectorAll('[data-set-lang]').forEach((btn) => {
      const on = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  };

  const paintCopy = () => {
    root.querySelectorAll('[data-i18n]').forEach((node) => {
      node.textContent = t(node.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-aria]').forEach((node) => {
      node.setAttribute('aria-label', t(node.getAttribute('data-i18n-aria')));
    });
  };

  root.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  paintToggle();
  paintCopy();
  onLang(() => {
    paintToggle();
    paintCopy();
  });
}
