import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { useContext } from "react";
import { adminDataContext } from "./../Context/AdminContext";

function Nav() {
  let navigate = useNavigate();
  let { getAdmin } = useContext(adminDataContext);

  const logOut = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(result.data);
      getAdmin();
      navigate("/login");
    } catch (err) {
      console.log(err, "Admin logout issue");
    }
  };

  return (
    <div className="w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black">
      <div
        className="w-[30px] flex items-center justify-start gap-[10px] cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Logo" className="w-[30px]" />
        <h1 className="text-[25px] text-[black] font-sans">CLOTHIVE</h1>
      </div>
      <button
        onClick={logOut}
        className="text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white"
      >
        LogOut
      </button>
    </div>
  );
}

export default Nav;
