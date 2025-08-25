import logo from "../assets/logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useContext, useState } from "react";
import { userDataContext } from "./../context/UserContext";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdHome } from "react-icons/io";
import { HiCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

function Nav() {
  let { userData, getCurrentUser } = useContext(userDataContext);
  let [showSearch, setShowSearch] = useState(false);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(result.data);
      getCurrentUser();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[30%] flex items-center justify-start gap-[10px]">
        <img className="w-[30px]" src={logo} alt="" />
        <h1 className="text-[25px] text-[black] font-sans">CLOTHIVE</h1>
      </div>
      <div className="w-[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            COLLECTIONS
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        {!showSearch && (
          <IoSearchCircleOutline
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {!userData && (
          <FaUserCircle
            className="w-[29px] h-[29px] text-[#000000] cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        )}
        {userData && (
          <div
            className="w-[30px] h-[30px] bg-[#000000] text-white rounded-full flex items-center justify-center"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}

        <IoMdCart className="w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block" />
        <p className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden md:block">
          10
        </p>
      </div>

      {/* Show Search bar */}
      {showSearch && (
        <div className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]"
            placeholder="Search Here"
          />
        </div>
      )}

      {/* Show profile drag and drop */}
      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white">
            {!userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                  navigate("/login");
                }}
              >
                LogOut
              </li>
            )}
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}

      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button className="text-white flex items-center justify-center flex-col gap-[2px] ">
          <IoMdHome className="w-[25px] h-[25px] text-white md:hidden" /> Home
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <HiCollection className="w-[25px] h-[25px] text-white md:hidden" />{" "}
          Collections
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[25px] h-[25px] text-white md:hidden" />{" "}
          Contact
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <FaCartShopping className="w-[25px] h-[25px] text-white md:hidden" />{" "}
          Cart
        </button>
      </div>
    </div>
  );
}

export default Nav;
