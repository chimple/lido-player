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
export const t = (key: string, options?: any) => i18next.t(key, options);
export const setLanguage = (lang: string) => i18next.changeLanguage(lang);
export const getLanguage = () => i18next.language;

export default i18next;
