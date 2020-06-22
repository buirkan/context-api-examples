import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContext'
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// article: https://medium.com/better-programming/react-context-api-part-1-dark-theme-3f00666cbacb 👏