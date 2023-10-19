/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = ( email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signIn = ( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    },[])

    const userInfo ={
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        signOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;