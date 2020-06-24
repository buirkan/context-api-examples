import React, { useState, useEffect } from 'react';
import LangSwitch from './LangSwitch';
import Card from './Card';
import { fetchMock } from '../fetchMock';

interface IState {
  state: Array<Object>;
}

const App: React.FC = (): JSX.Element => {
  const [appState, setAppState] = useState<IState>({ state: [] })
  
  useEffect(() => {
    fetchMock()
      .then(() => setAppState);
  }, [])

  return (
    <div className="App">
      <h1>Select language</h1>
      // Switcher buttons to change the language context
      <LangSwitch />
      <div className="Cards">
        {/* {appState.map((item, idx) => <Card key={idx} data={item}/>)} */}
      </div>
    </div>
  );
}

export default App;