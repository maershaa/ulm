import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/i18n';

import App from './App';
import '@/assets/styles/index.css';
import IconSprite from '@/assets/IconSprite';
import { ThemeProvider } from '@/context/theme/ThemeProvider';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <IconSprite />
    <BrowserRouter basename="/ulm">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
