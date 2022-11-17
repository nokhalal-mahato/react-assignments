import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Hindi from "./Locales/hi.json";
import English from "./Locales/en.json";

i18n.use(initReactI18next).init({
  returnNull: false,
  lng: "en",
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: English,
    },
    hi: {
      translation: Hindi,
    },
  },
});

export default i18n;
