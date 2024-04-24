import { createContext, useContext, useState } from "react";
import { useAuthentication } from "../hooks/apiHooks";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const {login} = useAuthentication();
  const navigate = useNavigate();

  console.log("user in UserProvider", user)

  const handleLogin = async (credentials) => {
    console.log("credentials", credentials);
    console.log({credentials});
    try {
      const userData = await login(credentials);
      console.log('userData', userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <UserContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
