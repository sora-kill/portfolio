const SUPPORTED = ['en', 'ja'];
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'lang';

const cache = {};

const getByPath = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);

export const getLang = () => {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    /* storage unavailable: fall back to default */
  }
  return SUPPORTED.includes(saved) ? saved : DEFAULT_LANG;
};

const loadDict = async (lang) => {
  if (!cache[lang]) {
    const res = await fetch(`./i18n/${lang}.json`);
    if (!res.ok) throw new Error(`i18n: cannot load ${lang}.json (${res.status})`);
    cache[lang] = await res.json();
  }
  return cache[lang];
};

const TARGETS = [
  ['data-i18n', (el, value) => { el.textContent = value; }],
  ['data-i18n-label', (el, value) => el.setAttribute('aria-label', value)],
  ['data-i18n-content', (el, value) => el.setAttribute('content', value)]
];

const apply = (dict) => {
  for (const [attr, set] of TARGETS) {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const value = getByPath(dict, el.getAttribute(attr));
      if (typeof value === 'string') set(el, value);
    });
  }
};

export const setLang = async (lang) => {
  const next = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
  apply(await loadDict(next));
  document.documentElement.lang = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable: language still switches for this visit */
  }
  return next;
};

export const initI18n = async () => {
  await setLang(getLang());
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(getLang() === 'en' ? 'ja' : 'en'));
  });
};