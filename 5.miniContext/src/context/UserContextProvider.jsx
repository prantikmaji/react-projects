import React, { useState } from "react"; // <-- Removed unnecessary 'Children' import
import UserContext from "./UserContext";

// Corrected: Use standard lowercase 'children' for the prop
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} 
    </UserContext.Provider>
  );
};

export default UserContextProvider;
