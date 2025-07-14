import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// The only job of Index.js is to render the App component into the root element.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

