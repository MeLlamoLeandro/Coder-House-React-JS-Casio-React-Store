import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  
    const [login, setLogin] = useState(false);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(uid);
            console.log(auth.currentUser);
            console.log(user);

            // ...
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
        <LoginContext.Provider value={{ login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}
