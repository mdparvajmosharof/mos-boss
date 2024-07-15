import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContex = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = ({email, password}) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = ({email, password}) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, curentUser=>{
            setUser(curentUser);
            setLoading(false)
            
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut
    }
  return (
    <AuthProvider value={authInfo}>
        {children}
    </AuthProvider>
  )
}

export default AuthProvider
