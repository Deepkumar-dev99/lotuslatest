import React, { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState("hit");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

 

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        setLoading,
        email,
        setEmail,
        pass,
        setPass
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;