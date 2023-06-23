import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  return signInWithPopup(auth, provider);
};

export const logout = () => {
  const auth = getAuth(app);
  return signOut(auth);
};

// 로그인 상태 변경 리스너 추가
export const addAuthStateChangedListener = (callback) => {
  const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
};


