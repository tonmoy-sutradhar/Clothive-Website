import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routers/Router";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <Router></Router>
    </AuthContext>
  </BrowserRouter>
);
