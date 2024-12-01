import React, { createContext, useState } from 'react';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import auth from '../firebase/firebase';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(true)

    const createUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithUser = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword (auth,email,password);
    }
    const authInfo = {
        loader,
        createUser,
        signInWithUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;