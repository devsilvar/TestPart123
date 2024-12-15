import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContextProvider } from './components/3.Advaced Concepts/ContextProvider.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
