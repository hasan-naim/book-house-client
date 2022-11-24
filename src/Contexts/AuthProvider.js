import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext({});
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (crntUsr) => {
      setUser(crntUsr);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateUsr = (info) => {
    setLoading(true);
    return updateProfile(auth.currentUser, info);
  };

  const signIn = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {};

  const authInfo = { user, loading, logOut, signIn, updateUsr };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
