import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Lists from "../pages/Lists";
import Orders from "../pages/Orders";
import Login from "../pages/Login";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/lists" element={<Lists></Lists>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default Router;
