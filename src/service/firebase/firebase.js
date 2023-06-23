// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdk_OwlN5lNt-viG5bS3wOxfsXmd5xZnE",
  authDomain: "woowa-33196.firebaseapp.com",
  projectId: "woowa-33196",
  storageBucket: "woowa-33196.appspot.com",
  messagingSenderId: "522521462459",
  appId: "1:522521462459:web:0ab86a9123cd75370c4b9e",
  measurementId: "G-SWDP415KGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // 이거가지고 하면됨. 
const analytics = getAnalytics(app);
export default app;