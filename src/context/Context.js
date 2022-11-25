import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, createContext } from "react";
export const ContexStore = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState([
    {
      name: "Utsav Bhattarai",
      email: "utsavbhattarai007@gmail.com",
      photoUrl: "",
    },
  ]);
  const [test, setTest] = useState([]);

  return (
    <ContexStore.Provider
      value={{
        user,
        setUser,
        test,
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};

export default Context;
