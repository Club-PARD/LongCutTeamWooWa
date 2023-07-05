import React, { createContext, useContext, useState } from "react";

// Create a context for the inputData state
const AuthContext = createContext();

// Create a DataInputProvider component to provide the context value
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update the inputData state
  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={[updateUser, user]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the updateDataInput function
const useUpdateUser = () => useContext(AuthContext)[0];

// Custom hook to access the inputData state
const useUser = () => {
  const user = useContext(AuthContext)[1];
  return user;
};

export { AuthProvider, useUpdateUser, useUser };
