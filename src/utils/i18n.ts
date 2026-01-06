import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all your translation JSONs
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import hi from '../i18n/hi.json';
import ka from '../i18n/ka.json';
import te from '../i18n/te.json';
import port from '../i18n/port.json';
import ma from '../i18n/ma.json';

i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      hi: { translation: hi },
      ka: { translation: ka },
      te: { translation: te },
      port: { translation: port },
      ma: { translation: ma },
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
export const t = (key: string, options?: any) => i18next.t(key, options);
export const setLanguage = (lang: string) => i18next.changeLanguage(lang);
export const getLanguage = () => i18next.language;

export default i18next;
