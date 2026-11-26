
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AdminLayout from "./components/admin/AdminLayout";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

// Check URL to decide which page to display
const isAdmin =
  new URLSearchParams(window.location.search).get("admin") === "1";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isAdmin ? <AdminLayout /> : <App />}
  </React.StrictMode>
);
