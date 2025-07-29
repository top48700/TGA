import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './src/locales/en/service.json';
import th from './src/locales/th/service.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      th: { service: th },
      en: { service: en },
      
    },
    fallbackLng: 'th',
    ns: ['service'],
    defaultNS: 'service',  // ⚠️ ตัวเล็ก d
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
