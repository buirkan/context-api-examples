import React, { createContext } from 'react';

type ContextProps = {
  lang: string,
  currentLang: Object,
  switchLang: Function
};

export const LangContext = createContext<Partial<ContextProps>>({});
