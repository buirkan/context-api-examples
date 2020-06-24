import { createContext } from 'react';

export const LangContext = createContext({
  lang: '', // currently used lang
  currentLang: '', // lang data object (names, title, link...)
  switchLang: (lang: string) => {} // trigger to switch the language context data
});
