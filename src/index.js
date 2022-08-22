import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/app';
import './styles/style.css';

const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
