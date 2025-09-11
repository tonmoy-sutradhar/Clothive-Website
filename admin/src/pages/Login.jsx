import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import axios from "axios";
import { adminDataContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";

function Login() {
  let [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { adminData, getAdmin } = useContext(adminDataContext);
  let navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/adminlogin`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      getAdmin();
      navigate("/");
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="text-[22px] font-sans">Clothive</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        {" "}
        <span className="text-[25px] font-semibold">Login</span>{" "}
        <span className="text-[16px]">
          Welcome to Chothive, Apply to Admin Login
        </span>{" "}
      </div>

      <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        {/* Form submission  */}
        <form
          onSubmit={AdminLogin}
          className=" w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="relative w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoIosEyeOff
                className="bottom-[50%] w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((pre) => !pre)}
              />
            )}
            {show && (
              <IoIosEye
                className="bottom-[50%] w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((pre) => !pre)}
              />
            )}

            <button className="w-[100%] h-[50px] bg-[#6060f5] flex rounded-lg items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer">
              create Account
            </button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default Login;
