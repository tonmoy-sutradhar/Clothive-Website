import logo from "../assets/vcart logo.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { authDataContext } from "./../context/AuthContext";
import axios from "axios";

function Login() {
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login operation
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result.data);
    } catch (error) {
      console.log("login error from frontend -->", error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="text-[22px] font-sans">Clothive</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        {" "}
        <span className="text-[25px] font-semibold">Login</span>{" "}
        <span className="text-[16px]">
          Welcome to Chothive, Place your order
        </span>{" "}
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        {/* Form submission  */}
        <form
          onSubmit={handleLogin}
          className=" w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
            {" "}
            <img src={google} alt="Google" className="w-[20px]" /> Login with
            Google
          </div>

          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

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
                className="bottom-[57%] w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((pre) => !pre)}
              />
            )}
            {show && (
              <IoIosEye
                className="bottom-[57%] w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((pre) => !pre)}
              />
            )}

            <button className="w-[100%] h-[50px] bg-[#6060f5] flex rounded-lg items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer">
              create Account
            </button>

            <p className="flex gap-[10px]">
              {" "}
              You haven't any account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-500 text-[17px] font-semibold cursor-pointer"
              >
                Create new account
              </span>
            </p>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default Login;
