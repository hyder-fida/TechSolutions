import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </>
);

reportWebVitals();
