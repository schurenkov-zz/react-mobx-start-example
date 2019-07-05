import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
const isBrowserSupportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
