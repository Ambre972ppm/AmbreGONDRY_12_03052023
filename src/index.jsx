// Import de React, createRoot et le composant App
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';

// Import du fichier de styles
import './index.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);
  
