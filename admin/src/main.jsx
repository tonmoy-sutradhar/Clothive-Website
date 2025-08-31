import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routers/Router";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import AdminContext from "./Context/AdminContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <AdminContext>
        <Router></Router>
      </AdminContext>
    </AuthContext>
  </BrowserRouter>
);
