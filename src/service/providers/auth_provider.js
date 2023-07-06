import React, { createContext, useContext, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider , signOut} from "firebase/auth";


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

const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    console.log('clicked!');
  
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login
        const user = result.user;
        // Update user state or perform any other necessary actions
      })
      .catch((error) => {
        // Handle login error
        console.log(error);
      });
  };

  const handleLogout = () => {
    const auth = getAuth();
  
    signOut(auth)
      .then(() => {
        // Handle successful logout
        // Update user state or perform any other necessary actions
      })
      .catch((error) => {
        // Handle logout error
        console.log(error);
      });
  };
  

export { AuthProvider, useUpdateUser, useUser, handleGoogleLogin, handleLogout};
