import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userId = JSON.parse(localStorage.getItem("user_id"));
  const [userID, setUserID] = useState(userId);

  const setUserInfo = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <UserContext.Provider value={{ user, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
