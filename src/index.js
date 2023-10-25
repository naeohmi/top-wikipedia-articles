import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import IntlProviderContext from "./utils/IntlProviderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProviderContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProviderContext>
);
