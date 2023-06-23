import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [login, setLogin] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserEmail(user.email);
            setLogin(true);

        } else {
            // User is signed out
            // ...
            setLogin(false);
        }
    });

    const logout = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log('User signed out');
            setLogin(false);
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <LoginContext.Provider value={{ login, logout, userEmail }}>
            {children}
        </LoginContext.Provider>
    )
}
