import React from 'react';
import App from './App';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.scss';
import { HackBgProvider } from './Shared/Contexts/BgContext';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <HackBgProvider>
      <App />
    </HackBgProvider>
  </StrictMode>
);