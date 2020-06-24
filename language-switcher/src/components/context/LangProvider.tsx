import React, { useState, useLayoutEffect, FC } from 'react';
import { LangContext } from './LangContext';
import { langData } from '../../data';

export const LangProvider: FC = (props): JSX.Element => {
  const [lang, setLang] = useState(window.localStorage.getItem('appLang') || window.navigator.language);

  // app needs to know wich language to display before the initial render
  useLayoutEffect(() => {
    const currentlyLang = window.localStorage.getItem('appLang');

    if (currentlyLang)
      setLang(currentlyLang);
  }, [lang]);

  const switchLang = (lang: string) => {
    setLang(lang);
    window.localStorage.setItem('appLang', lang);
  };

  return (
    <LangContext.Provider value={{ lang, currentLang: langData[lang] , switchLang: () => switchLang }}>
      {props.children}
    </LangContext.Provider>
  )
}