import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";

function Add() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative">
      <Nav></Nav>
      <Sidebar></Sidebar>
    </div>
  );
}

export default Add;
