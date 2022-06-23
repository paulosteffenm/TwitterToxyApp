import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './app/features/home/HomePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);

reportWebVitals();
