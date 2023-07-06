import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import React, { useEffect } from 'react';
import HomePage from './presentation/pages/HomePage';
import "./assets/Fonts/Font.css"; //폰트적용 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUpdateUser, useUser } from './service/providers/auth_provider';
import LoginPage from './presentation/pages/LoginPage';

const auth = getAuth();


 function App() {
  const updateUser = useUpdateUser();
  const authUser = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      updateUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth, updateUser]);

  console.log(authUser);
  return (
    <Router>
         <Routes>
          {!authUser ? (
            // User is not authenticated, render the login route
            <Route path="/" element={<LoginPage />} />
          ) : (
            // User is authenticated, render the protected routes
            <Route path="/*" element={<HomePage />} />
          )}
         </Routes>
     </Router>
  );
}

export default App;
