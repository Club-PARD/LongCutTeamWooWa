import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import HomePage from './presentation/pages/HomePage';
import "./assets/Fonts/Font.css"; //폰트적용 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUpdateUser, useUser } from './service/providers/auth_provider';
import LoginPage from './presentation/pages/LoginPage';
import firebase from 'firebase/compat/app';
import {tags} from './constants/tags';
const auth = getAuth();

function App() {
  const updateUser = useUpdateUser();
  const authUser = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      updateUser(user);

      if (user) {
        const userDocRef = firebase.firestore().collection('user').doc(user.uid);
        userDocRef.get().then((doc) => {
          if (!doc.exists) {
            userDocRef.set({ tags }).then(() => {
              console.log("User documentation created successfully!");
            }).catch((error) => {
              console.error("Error creating user documentation: ", error);
            });
          } else {
            console.log("User documentation already exists!");
          }
        }).catch((error) => {
          console.error("Error checking user documentation: ", error);
        });
      }
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
