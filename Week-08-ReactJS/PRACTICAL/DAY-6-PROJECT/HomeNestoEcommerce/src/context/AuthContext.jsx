import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}){


        const [isLoggedIn, setIsLoggedIn] = useState(() =>  
            localStorage.getItem("isLoggedIn") === "true"//read login status when app starts 
                                                         // if stored value is tru,user stays logged even after refresh
        )     
         const [userEmail, setUserEmail] = useState(() =>
            localStorage.getItem("userEmail") || null
        );
                                                        

      const login =(email)=>{
        setIsLoggedIn(true)
        setUserEmail(email)
        localStorage.setItem('isLoggedIn','true')
        localStorage.setItem('userEmail',email)
      }


    const logout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    };

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout,userEmail}}>
         {children}
        </AuthContext.Provider>
    )
}