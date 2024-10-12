import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TareaContextoProvider } from "./contex/TareaContexto.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TareaContextoProvider>
      <App />
    </TareaContextoProvider>
  </StrictMode>
);
