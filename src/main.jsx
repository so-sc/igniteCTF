import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { ChallengeProvider } from "./components/ProgressContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChallengeProvider>
      <App />
    </ChallengeProvider>
  </React.StrictMode>
);
