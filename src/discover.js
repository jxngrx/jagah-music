/** Drain station reserve, then live YouTube search via /api/discover. */

function cleanTitle(t) {
  return (
    t
      .replace(/\s*\|\s*.*$/, '')
      .replace(/\s*\(official.*?\)/gi, '')
      .replace(/\s*official\s*(video|audio|music video)?/gi, '')
      .replace(/\s*new haryanvi.*$/i, '')
      .trim()
      .slice(0, 60) || t.slice(0, 60)
  );
}

function guessSinger(title, preferred) {
  if (preferred?.length === 1) return preferred[0];
  const table = [
    ['Masoom Sharma', /masoom/i],
    ['Amanraj Gill', /amanraj|aman raj/i],
    ['Sumit Parta', /sumit parta/i],
    ['Khasa Aala Chahar', /khasa/i],
    ['KD', /\bkd\b|desirock/i],
    ['Gulzaar Chhaniwala', /gulzaar|gulzar chhani/i],
    ['Amit Saini Rohtakiya', /amit saini|rohtakiya/i],
    ['Pranjal Dahiya', /pranjal/i],
    ['Badshah', /badshah/i],
    ['Fazilpuria', /fazilpuria/i],
    ['Bintu Pabra', /bintu pabra/i],
    ['Ndee Kundu', /ndee kundu/i],
    ['Sapna Choudhary', /sapna choudhary|sapna chaudhary/i],
    ['Veer Dahiya', /veer dahiya/i],
    ['Diler Kharkiya', /diler kharkiya/i],
    ['Renuka Panwar', /renuka panwar/i],
    ['Raju Punjabi', /raju punjabi/i],
    ['Rajbala', /rajbala|राजबाला/i],
    ['Pandit Lakhmi Chand', /lakhmi|लखमी|lakhmichand/i],
    ['Dayachand Mayna', /dayachand|दयाचंद|mayna/i],
    ['Sonu Bhagana', /sonu bhagana|सोनू भगाना|sonu sushma/i],
    ['Manjeet Cholka', /manjeet cholka|मंजीत चोलका|manjeet/i],
    ['Rajesh Thurania', /thurania|राजेश थुरानिया/i],
    ['Vikas Pasoriya', /pasoriya|विकास पासोरिया/i],
    ['Deepa Choudhary', /deepa chaudhary|दीपा चौधरी/i],
    ['Priyanka Choudhary', /priyanka chaudhary|प्रियंका/i],
    ['Annu Sharma', /annu sharma/i],
    ['Satpal Dosa', /satpal dosa|satpal dausa/i],
    ['Yo Yo Honey Singh', /honey singh|yo yo/i],
    ['Diljit Dosanjh', /diljit/i],
    ['Sidhu Moose Wala', /sidhu moose|moose wala/i],
    ['Sharry Mann', /sharry mann/i],
    ['Karan Aujla', /karan aujla/i],
    ['R Nait', /\br nait\b|rnait/i],
    ['B Praak', /b praak|bpraak/i],
    ['Arjan Dhillon', /arjan dhillon/i],
    ['Parmish Verma', /parmish/i],
    ['Hustinder', /hustinder/i],
    ['Diler Kharkiya', /diler kharkiya/i],
    ['Gurdas Maan', /gurdas maan|gurdas man/i],
  ];
  for (const [name, re] of table) {
    if (re.test(title)) return name;
  }
  return preferred?.[0] || 'Mix';
}

function fromReserve(pool, exclude, singers, count) {
  const want = singers?.length ? new Set(singers) : null;
  const out = [];
  for (const t of pool || []) {
    if (exclude.has(t.id)) continue;
    if (want && !want.has(t.singer)) continue;
    out.push({ ...t });
    exclude.add(t.id);
    if (out.length >= count) break;
  }
  return out;
}

export async function searchYouTube(query) {
  const url = `/api/discover?q=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`discover ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.items) ? data.items : [];
}

export async function fetchMoreTracks({
  excludeIds,
  singers,
  count = 8,
  reserve = [],
  discoverQueries = [],
}) {
  const exclude = new Set(excludeIds);
  const preferred = singers?.length ? [...singers] : [];

  const fromSeed = fromReserve(reserve, exclude, preferred, count);
  if (fromSeed.length >= count) return fromSeed;

  const queries = preferred.length
    ? preferred.map((s) => `${s} song official`)
    : discoverQueries.length
      ? discoverQueries
      : ['haryanvi song official', 'punjabi song official'];

  const found = [...fromSeed];
  for (const q of queries) {
    if (found.length >= count) break;
    let items = [];
    try {
      items = await searchYouTube(q);
    } catch {
      continue;
    }
    for (const it of items) {
      if (exclude.has(it.id)) continue;
      if (found.some((f) => f.id === it.id)) continue;
      const singer = guessSinger(it.title, preferred);
      if (preferred.length && !preferred.includes(singer)) {
        if (preferred.length === 1) {
          found.push({
            id: it.id,
            title: cleanTitle(it.title),
            artist: preferred[0],
            singer: preferred[0],
            era: 'new',
          });
          exclude.add(it.id);
        }
        continue;
      }
      found.push({
        id: it.id,
        title: cleanTitle(it.title),
        artist: singer === 'Mix' ? 'Artist' : singer,
        singer: singer === 'Mix' ? 'Mix' : singer,
        era: 'new',
      });
      exclude.add(it.id);
      if (found.length >= count) break;
    }
  }
  return found;
}
