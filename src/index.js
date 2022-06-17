import React from 'react';
import App from './App';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HackBgProvider } from './Shared/Contexts/BgContext';
import LanguageWrapper from './Shared/Contexts/LanguageContext';
import english from './lang/en.json';
import spanish from './lang/es.json';
import './index.scss';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <LanguageWrapper>
      <HackBgProvider>
        <App />
      </HackBgProvider>
    </LanguageWrapper>
  </StrictMode>
);