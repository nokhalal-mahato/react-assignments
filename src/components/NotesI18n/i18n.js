import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
        page_title: "Notes",
        title: "Title",
        take_note: "Take a Note",
        add: "Add",
        empty_title: "No Notes Yet",
        empty_text: "Notes you add appear here",
        edit: "Edit",
        complete: "Complete",
        incomplete: "Incomplete",
        delete: "Delete",
        All: "All",
        Completed: "Completed",
        Active: "Active",
      },
    },
    hi: {
      translation: {
        page_title: "टिप्पणियाँ",
        title: "शीर्षक",
        take_note: "नोट करें",
        add: "जोड़ें",
        empty_title: "अभी तक कोई नोट नहीं",
        empty_text: "आपके द्वारा जोड़े गए नोट्स यहां दिखाई देंगे",
        edit: "संपादन करना",
        complete: "पूरा",
        incomplete: "अधूरा",
        delete: "मिटाना",
        All: "सब",
        Completed: "पूरा किया हुआ",
        Active: "सक्रिय",
      },
    },
  },
});

export default i18n;
