import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const login=(userInfo)=>{
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  }

  const logout =()=>{
    setUser(null);
    localStorage.removeItem("user");
  }

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
