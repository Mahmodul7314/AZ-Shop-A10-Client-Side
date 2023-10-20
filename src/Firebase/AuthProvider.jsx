
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";


export const AuthContext = createContext(null);

const auth =getAuth(app)



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


    
const authInfo ={
user,
createUser,
logOut,
signIn,
loading
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;