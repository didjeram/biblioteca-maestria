import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RentalProvider } from "./context/RentalContext";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Envolver con AuthProvider */}
        <RentalProvider>
          <App />
        </RentalProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
