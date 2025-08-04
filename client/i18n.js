import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './src/locales/en/service.json';
import en2 from './src/locales/en/content.json';
import th from './src/locales/th/service.json';
import th2 from './src/locales/th/content.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
  th: {
    service: th,
    content: th2,
  },
  en: {
    service: en,
    content: en2,
  }
},
    fallbackLng: 'th',
    ns: ['service', 'content'],
    defaultNS: 'service',  // ⚠️ ตัวเล็ก d
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
