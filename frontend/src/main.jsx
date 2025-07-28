import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.jsx";
import AuthContext from "./context/AuthContext.jsx";
import UserContext from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <UserContext>
        <Router></Router>
      </UserContext>
    </AuthContext>
  </BrowserRouter>
);
