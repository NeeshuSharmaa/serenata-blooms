import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { makeServer } from "./server";
import DataProvider from "./frontend/contexts/DataProvider";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </React.StrictMode>
);
