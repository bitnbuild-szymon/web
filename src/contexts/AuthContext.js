import { useContext, createContext, useState } from "react";
import { signInWithEmail } from '../lib/firebase/module.ts';
import { redirect } from "react-router-dom";


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // Handle sign in
    const signIn = async (email, password) => {
        await signInWithEmail(email, password)
        .then(userCredentials => {
            setUser(userCredentials.user);
        }).catch(err => {console.error(err)});
    }

    // Handle sign up
    const signUp = async (email, password) => {
        ///...
    }

    // Handle sign out
    const signOut = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user: user, signIn: signIn, signUp: signUp, signOut: signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export {useAuth, AuthContextProvider}