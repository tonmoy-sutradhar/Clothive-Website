import { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();

function UserContext({ children }) {
  let [userData, setUserData] = useState("");
  let { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(`${serverUrl}/api/user/getcurrentuser`, {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log("UserContext data ", result.data);
    } catch (err) {
      setUserData(null);
      console.log("error in usercontext -->.", err);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  let value = { userData, setUserData, getCurrentUser };
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}

export default UserContext;
