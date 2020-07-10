import { createContext } from 'react';

type ContextData = {
  date: string,
  description: string,
  genre: string,
  link: string,
  title: string
};

type Title = {
  h1: string
};

type ContextProps = {
  app: Title,
  card: ContextData
};

export const LangContext = createContext({
  lang: '', // currently used lang
  currentLang: {} as ContextProps, // lang data object (names, title, link...)
  switchLang: (lang: string) => { } // trigger to switch the language context data
});
