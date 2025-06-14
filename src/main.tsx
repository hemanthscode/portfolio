import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import './index.css';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
);