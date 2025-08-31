import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const adminDataContext = createContext();

function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null);

  const getAdmin = async () => {
    try {
      let result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/getadmin`,
        { withCredentials: true }
      );

      setAdminData(result);
      console.log(result.data);
    } catch (err) {
      setAdminData(null);
      console.log(err, "AdminContext problem");
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  let value = { adminData, setAdminData, getAdmin };
  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}

export default AdminContext;
