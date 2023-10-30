import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { CssBaseline } from '@mui/material';
import { ThemeModeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
      <CssBaseline />
    </ThemeModeProvider>
  </React.StrictMode>
)
