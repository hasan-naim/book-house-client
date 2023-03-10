import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const AuthContext = createContext({});
const auth = getAuth(app);

const googleProvder = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const { data: userFromData, refetch } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://book-house-server-three.vercel.app/user?email=${user?.email}`
      );
      setLoading(false);
      return res.data;
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (crntUsr) => {
      setLoading(false);
      setUser(crntUsr);
      refetch();
    });

    return () => {
      unsubscribe();
    };
  }, [refetch]);

  const updateUsr = (info) => {
    setLoading(true);
    return updateProfile(auth.currentUser, info);
  };

  const signIn = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvder);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    logOut,
    signIn,
    updateUsr,
    userFromData,
    logIn,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
