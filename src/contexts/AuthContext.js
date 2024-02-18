import { useContext, createContext, useState } from "react";
import { signInWithEmail, signUpWithEmail } from "bitnbuild-back";
import { Navigate } from "react-router-dom";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // Handle sign in
    const signIn = async (email, password) => {
        try {
            const res = await signInWithEmail(email, password);
            setUser(res.userProfile);
            return (<Navigate to="/" />);
        } catch (error) {
            return error;
        }
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