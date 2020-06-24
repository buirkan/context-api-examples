import React, { useState, useLayoutEffect } from 'react';
import { lightTheme, darkTheme } from '../colors';

export const ThemeContext = React.createContext({
  dark: false,
  toogle: () => { }
});

export function ThemeProvider(props) {
  // const actualTheme = window.localStorage.getItem('darkTheme');
  const [dark, setDark] = useState(window.localStorage.getItem('darkTheme'));

  // useLayoutEffect hook before elements render
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');

    if (lastTheme === 'true') {
      setDark(true);
      writeStyles(darkTheme);
    }

    if(!lastTheme || lastTheme === 'false') {
      setDark(false);
      writeStyles(lightTheme); // default
    }
    // checking state updates
  }, [dark]);

  const toogleTheme = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
    
    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  };

  const writeStyles = theme => {
    const doc = document.getElementsByTagName('html')[0];
    doc.style.cssText = theme.join(';');
  };

  return (
    <ThemeContext.Provider value={{ dark, toogle: toogleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}