import React, { FC, useContext } from 'react'
import { LangContext } from './context/LangContext';

export const LangSwitch: FC = (): JSX.Element => {
  const { switchLang, lang } = useContext(LangContext);
  
  return (
    <div className="langSwitch">
      <button 
        className={lang === 'en-US' ? 'active btn btn-info m-2' : 'btn btn-primary m-2'} 
        onClick={() => switchLang('en-US')}>
        <span>EN</span>
      </button>
      <button 
        className={lang === 'es-ES' ? 'active btn btn-info m-2' : 'btn btn-primary m-2'} 
        onClick={() => switchLang('es-ES')}>
        <span>ES</span>
      </button>
      <button 
        className={lang === 'ru-RU' ? 'active btn btn-info m-2' : 'btn btn-primary m-2'} 
        onClick={() => switchLang('ru-RU')}>
        <span>RU</span>
      </button>
    </div>
  )
}