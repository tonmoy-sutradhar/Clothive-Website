import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routers/Router";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Router></Router>
  </BrowserRouter>
);
