import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { makeServer } from "./server";
import DataProvider from "./frontend/contexts/DataProvider";
import AuthProvider from "./frontend/contexts/AuthProvider";
import FilterDataProvider from "./frontend/contexts/FilterDataProvider";
import CartWishlistProvider from "./frontend/contexts/CartWishlistProvider";
import AddressProvider from "./frontend/contexts/AddressProvider";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
          <AddressProvider>
            <FilterDataProvider>
              <CartWishlistProvider>
                <App />
              </CartWishlistProvider>
            </FilterDataProvider>
          </AddressProvider>
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>
);
