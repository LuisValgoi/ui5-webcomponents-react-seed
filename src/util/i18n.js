import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationPTBR from '../locales/pt_br/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: translationEN
      },
      pt: {
        translation: translationPTBR
      }
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
