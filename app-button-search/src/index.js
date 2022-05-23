import React from 'react';
import { createRoot } from 'react-dom/client';
import { Inicio } from './components/Inicio';
import './styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);
