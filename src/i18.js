import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
        "author":"Author:",
        "subject":"Subject:",
        "content":"Content:",
        "enterName":"Enter your name",
        "enterSubject":"Enter your note subject",
        "enterContent":"Enter your note content",
        "newNote":"Create new note",
        "add":"Add note",
        "edit":"Edit",
        "delete":"Delete",
        "save":"Save changes",
        "cancel":"Cancel",
        "show":"Show/hide content",
        "mess":"Fill in all the fields for editing to be successful!"
    }
  },
  pl: {
    translation: {
        "author":"Autor:",
        "subject":"Temat:",
        "content":"Treść:",
        "enterName":"Wprowadź swoje imię",
        "enterSubject":"Wprowadź temat swojej notatki",
        "enterContent":"Wprowadź treść swojej notatki",
        "newNote":"Stwórz nową notatkę",
        "add":"Dodaj notatkę",
        "edit":"Edytuj",
        "delete":"Usuń",
        "save":"Zapisz zmiany",
        "cancel":"Anuluj",
        "show":"Pokaż/ukryj zawartość",
        "mess":"Wypełnij wszystkie pola, aby edycja się powiodła!"
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'pl'],
    resources,
    fallbackLng: 'en',
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    
    react: { useSuspense: false },
  });


export default i18n;