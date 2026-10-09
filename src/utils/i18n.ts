import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all your translation JSONs
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import hi from '../i18n/hi.json';
import kn from '../i18n/kn.json';
import te from '../i18n/te.json';
import pt from '../i18n/pt.json';
import mr from '../i18n/mr.json';

// Digital Skills game content uses a leading-space marker, for example
// ` box`. The marker is removed before looking up the translated value.
const DIGITAL_SKILLS_MARKER = /^\s+(\S+)$/;

export const getTranslationKey = (key: string = ''): string => {
  const match = key.match(DIGITAL_SKILLS_MARKER);
  return match ? ` ${match[1]}` : key;
};

export const translateText = (key: string = '', options?: any) =>
  i18next.t(getTranslationKey(key), options);

i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      hi: { translation: hi },
      kn: { translation: kn },
      te: { translation: te },
      pt: { translation: pt },
      mr: { translation: mr },
    },
    fallbackLng: 'en', // fallback if current lang not found
    debug: false,
    interpolation: {
      escapeValue: false, // Stencil already handles escaping
    },
    detection: {
      // optional: tune detection logic
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

// Helper wrappers (simplify usage in components)
export const t = (key: string, options?: any) => translateText(key, options);
export const setLanguage = (lang: string) => i18next.changeLanguage(lang);
export const getLanguage = () => i18next.language;

export default i18next;
