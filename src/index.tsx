import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
//import "react-tooltip/dist/react-tooltip.css";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={<div className="text-center my-5 py-5">booting up...</div>}
    >
      <Router>
        <App />
      </Router>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
