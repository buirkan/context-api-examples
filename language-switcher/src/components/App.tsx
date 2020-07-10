import React, { useState, useEffect, useContext } from 'react';
import { LangContext } from './context/LangContext';
import { LangSwitch } from './LangSwitch';
import { Card } from './Card';
import { fetchMock } from '../fetchMock';

const App: React.FC = (): JSX.Element => {
  const { lang, currentLang } = useContext(LangContext);
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    // fetch data according with current language context
    fetchMock(lang)
      .then((resolve: any) => setAppState(resolve));
  }, [lang])

  return (
    <div className="container">
      <h1>{currentLang.app.h1}</h1>
      {/* Switcher buttons to change the language context */}
      <LangSwitch />
      <div className="Cards">
        {appState.map((item, idx) => <Card key={idx} data={item} />)}
      </div>
    </div>
  );
}

export default App;