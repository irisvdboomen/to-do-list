import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// root element to render the main App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);