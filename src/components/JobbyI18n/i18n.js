import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./Locales/en";
import hindi from "./Locales/hi";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        ...english,
      },
    },
    hi: {
      translation: { ...hindi },
    },
  },
});

export default i18n;
