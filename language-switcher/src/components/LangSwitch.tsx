import React, { FC, useContext } from 'react'
import { LangContext } from './context/LangContext';

export const LangSwitch: FC = (): JSX.Element => {
  const { switchLang, lang } = useContext(LangContext);
  
  return (
    <div className="langSwitch">
      <button className={lang === 'en-US' ? 'active' : ''} onClick={() => switchLang('en-US')}>
        <span>EN</span>
      </button>
      <button className={lang === 'es-ES' ? 'active' : ''} onClick={() => switchLang('es-ES')}>
        <span>ES</span>
      </button>
      <button className={lang === 'ru-RU' ? 'active' : ''} onClick={() => switchLang('ru-RU')}>
        <span>RU</span>
      </button>
    </div>
  )
}