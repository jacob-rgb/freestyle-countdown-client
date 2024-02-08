import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//literals
import * as esLiterals from './assets/literals/es.json';
import * as enLiterals from './assets/literals/en.json';
import * as frLiterals from './assets/literals/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esLiterals },
    en: { translation: enLiterals },
    fr: { translation: frLiterals },
  },
  lng: "es",
});
