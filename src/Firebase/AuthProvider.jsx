
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";


export const AuthContext = createContext(null);

const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {    
    const [user, setUser] =useState(null);
     const [loading, setLoading] =useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    
      }
      
      
    //observing user
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state change',currentUser)
            setUser(currentUser)
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[]);

     
  
  //LogOut
  const logOut =()=>{
    setLoading(true)
    return signOut(auth);
  }


    //signin
    const signinwithGoogle =() =>{
        setLoading(true)
     
        return signInWithPopup(auth,googleProvider)
    }

    
const authInfo ={
user,
createUser,
logOut,
signIn,
signinwithGoogle,
loading
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;