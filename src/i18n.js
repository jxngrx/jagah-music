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
    searchPh: 'Search a song…',
    searchFail: 'Search failed — try again',
    searchNone: 'No songs found',
    noTape: 'Couldn\'t load songs — refresh',
    homeAria: 'Back to JAGAH',
    partyStart: 'Start party',
    partyJoin: 'Join',
    partyCodePh: 'Code',
    partyEnd: 'End party',
    partyLeave: 'Leave',
    partyListening: (n) => `${n} listening`,
    partyTap: 'Tap ▶ to listen along',
    partyLive: 'Live — synced with host',
    partyNone: 'Room not found',
    partyEnded: 'Party ended',
    partyFail: 'Could not start',
    partyCopy: 'Copy',
    partyCopied: 'Copied ✓',
    partyCopyManual: 'Press Ctrl+C',
    partyAdded: 'Added to party queue',
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
    searchPh: 'गाना खोजो…',
    searchFail: 'खोज नहीं हुई — फिर कोशिश करो',
    searchNone: 'कोई गाना नहीं मिला',
    noTape: 'गाने नहीं आए — रिफ्रेश करो',
    homeAria: 'जगह पर वापस',
    partyStart: 'पार्टी शुरू करो',
    partyJoin: 'जुड़ो',
    partyCodePh: 'कोड',
    partyEnd: 'पार्टी खत्म',
    partyLeave: 'छोड़ो',
    partyListening: (n) => `${n} सुन रहे`,
    partyTap: '▶ दबाओ, साथ सुनो',
    partyLive: 'लाइव — होस्ट के साथ',
    partyNone: 'कमरा नहीं मिला',
    partyEnded: 'पार्टी खत्म हो गई',
    partyFail: 'शुरू नहीं हुई',
    partyCopy: 'कॉपी',
    partyCopied: 'कॉपी हो गया ✓',
    partyCopyManual: 'Ctrl+C दबाओ',
    partyAdded: 'पार्टी कतार में जुड़ा',
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
    root.querySelectorAll('[data-i18n-ph]').forEach((node) => {
      node.placeholder = t(node.getAttribute('data-i18n-ph'));
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
