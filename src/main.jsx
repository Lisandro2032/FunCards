import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Estilos/globales.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);