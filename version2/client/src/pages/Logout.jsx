// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { toast } from "react-toastify";

// export const Logout = () => {
//     const { LogoutUser } = useAuth();


//     useEffect (() => {
//         LogoutUser();
//         toast.success("Logout successful");
//     }, [LogoutUser]);
    
//     return <Navigate to="/login" />
// }


import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    // Display the toast message immediately when the component mounts
    toast.success("Logout successful");

    return <Navigate to="/login" />;
};
