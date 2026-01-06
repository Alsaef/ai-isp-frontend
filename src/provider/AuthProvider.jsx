
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return ()=> unsubscribe();
  }, []); 
  
  const logout=()=>{
    return signOut(auth)
  }
  const value = {
     user,
    loading,
    logout
  };

 
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && <div>Loading...</div>} 
    </AuthContext.Provider>
  );
};