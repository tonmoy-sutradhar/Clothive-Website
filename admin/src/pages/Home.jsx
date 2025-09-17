import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";

function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white relative">
        <Nav></Nav>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export default Home;
