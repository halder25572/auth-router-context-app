import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from './../firebase/Firebase.Config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In Email & Password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for log out
    const logOut = () => {
        return signOut(auth)
    }

    // for signIn With Google Popup
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })

        return () => {
            unSubscriber();
        }
    }, [])

    const AuthInfo = {user, loading, createUser, signIn, logOut, signInWithGoogle}

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;