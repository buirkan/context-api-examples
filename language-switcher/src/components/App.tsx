import React, { useState, useEffect } from 'react';
import { LangSwitch } from './LangSwitch';
import { Card } from './Card';
import { fetchMock } from '../fetchMock';

const App: React.FC = (): JSX.Element => {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    fetchMock()
      .then((resolve: any) => setAppState(resolve));
  }, [])

  return (
    <div className="App">
      <h1>Select language</h1>
      {/* Switcher buttons to change the language context */}
      <LangSwitch />
      <div className="Cards">
        {appState.map((item, idx) => <Card key={idx} data={item} />)}
      </div>
    </div>
  );
}

export default App;