import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => { 

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storeTokenInLS = (servertoken) => {
        setToken(servertoken);
        return localStorage.setItem("token", servertoken);
    };

    let isLoggedIn = !!token;
    console.log("is logged in",isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token"); 
    };

    const userAuthentication = async () => {
        try{
            const response = await fetch("http://localhost:3060/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.ok === true) {
                const data = await response.json();
                console.log("User data", data.userData);
                setUser(data.userData);
            }
        }
        catch (error) {
            console.log("Error in userAuthentication", error);
        }
    }

    // JWT Authentication - to get the currently logged in user data
    useEffect(() => {
        userAuthentication();
    }, []);


    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return authContextValue;
}