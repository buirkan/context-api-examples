import React, { FC, useContext } from 'react'
import { LangContext } from './context/LangContext';

export const LangSwitch: FC = (): JSX.Element => {
    const { switchLang, lang } = useContext(LangContext);
    
    return (
        <div className="langSwitch">
            {/* <button className={lang === 'en-US' ? 'active' : ''} onClick={() => switchLang('en-US')}>
                EN
            </button>
            <button className={lang === 'es-ES' ? 'active' : ''} onClick={() => switchLang('es-ES')}>
                ES
            </button>
            <button className={lang === 'ru-RU' ? 'active' : ''} onClick={() => switchLang('ru-RU')}>
                RU
            </button> */}
        </div>
    )
}