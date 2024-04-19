import { NavLink } from "react-router-dom";

export const Error = () => {
    return (
        <div>
        <h1>404 Page Not Found</h1>
        <p>
            OOOPS! 
        </p>
        <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <br></br>
            <NavLink to="/contact">Report problem</NavLink>
        </div>
        </div>
    );
    }
