import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        // setLoading(true);    
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            email: email
        }
        
    )
    
    }
    // google log in with pop up
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // github provider
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitProvider)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observe current user', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe;
        }

    }, [])



    const userInfo = {
        createUser,
        signInUser,
        user,
        logOutUser,
        updateUserProfile,
        googleLogIn,
        loading,
        gitHubLogin,
        setUser
        


    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {
                    children
                }

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}