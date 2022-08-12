import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { InitialDataContext } from './InitialDataContext';

const container = document.getElementById('root')
const root = hydrateRoot(container, 
<React.StrictMode>
  <InitialDataContext.Provider value={(window && window.preloadedData) || { _isServer: false, _requests: [], _data: {} }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InitialDataContext.Provider>
</React.StrictMode>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
