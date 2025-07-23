import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Registration></Registration>}></Route>
    </Routes>
  );
}

export default Router;
