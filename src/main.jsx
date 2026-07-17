import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/assets/styles/index.css';
import IconSprite from '@/assets/IconSprite.jsx';
import { ThemeProvider } from '@/context/theme/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconSprite />
    <BrowserRouter basename="/ulm">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
