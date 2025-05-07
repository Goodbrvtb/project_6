import { StrictMode } from "react";

import "./App.scss";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./providers/themeProvider";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
