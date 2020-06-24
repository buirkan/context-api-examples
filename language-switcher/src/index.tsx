import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { LangProvider } from './components/context/LangProvider';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);