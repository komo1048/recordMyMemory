import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecordContextProvider } from "./components/context/record-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecordContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecordContextProvider>
);
