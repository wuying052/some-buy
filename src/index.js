
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';

import { GlobalProvider } from './state/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
     <BrowserRouter>
      <GlobalProvider>
       <App/>
      </GlobalProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


