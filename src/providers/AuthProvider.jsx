import { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (currentAuth, name, photo) => {
        return updateProfile(currentAuth, {
            displayName: name,
            photoURL: photo
        });
    };

    const socialLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);

            if (currentUser) {
                axios
                    .post('https://bistro-boss-restaurant-server-zeta.vercel.app/jwt', {
                        email: currentUser.email
                    })
                    .then((data) => {
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        loginUser,
        socialLogin,
        logOut
    };
    return (
        <>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </>
    );
};

export default AuthProvider;
