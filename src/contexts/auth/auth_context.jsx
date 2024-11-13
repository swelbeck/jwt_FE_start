import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();

  const login = async (formData) => {
    try {
      let res = await axios({
        method: "POST",
        url: `http://localhost:3000/api/auth`,
        data: formData,
      });

      setCookie("token", res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (formData) => {
    try {
      let res = await axios({
        method: "POST",
        url: `http://localhost:3000/api/users`,
        data: formData,
      });

      setCookie("token", res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    ["token"].forEach((cookie) => {
      removeCookie(cookie);
    });
  };

  const value = useMemo(()=>{
    cookies, 
    login, 
    logout,
    signUp
  },[cookies]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(){
    return useContext(AuthContext)
}