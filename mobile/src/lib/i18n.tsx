import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type Lang = 'en' | 'hi';

const copy = {
  en: {
    eyebrow: 'Places have sound',
    brand: 'JAGAH',
    places: 'Listening places',
    queue: 'Queue',
    mix: 'Mix',
    back: 'Places',
    shuffle: 'Shuffle',
    next: 'Next',
    prev: 'Previous',
  },
  hi: {
    eyebrow: 'जगहों की आवाज़',
    brand: 'जगह',
    places: 'सुनने की जगहें',
    queue: 'कतार',
    mix: 'मिक्स',
    back: 'जगहें',
    shuffle: 'शफल',
    next: 'अगला',
    prev: 'पिछला',
  },
} as const;

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof (typeof copy)['en']) => string;
  placeLabel: (p: { title: string; en: string }) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('hi');
  const t = useCallback((key: keyof (typeof copy)['en']) => copy[lang][key], [lang]);
  const placeLabel = useCallback(
    (p: { title: string; en: string }) => (lang === 'en' ? p.en : p.title),
    [lang],
  );
  const value = useMemo(() => ({ lang, setLang, t, placeLabel }), [lang, t, placeLabel]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error('I18nProvider missing');
  return v;
}
