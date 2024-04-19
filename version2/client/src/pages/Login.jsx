import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:3060/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        // console.log(e);      
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]: value});
    } 

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("Login form", response);

            const res_data = await response.json();

            if (response.ok === true) {
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data.token);

                
                toast.success("Login successful");
                setUser({email: "", password: ""});
                navigate("/");
            }
            else {
                if (res_data.extraDetails) {
                    toast.error(`${res_data.extraDetails}`);
                } else {
                    toast.error(res_data.message);
                }
                console.log("Invalid email or password :(");
            }
            
        }
        catch (err) {
            console.log("login",err);
        }


        // console.log(user);
        // alert("Loggend in successfully");
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="login-image"> 
                                <img src="images/login.png" alt="Login" width="500" height="500"/>
                            </div>

                            {/* Login form */}

                            <div className="login-form">
                                <h1 className="main-heading">Login form</h1>
                                <br/>

                                <form onSubmit={handleSubmit}>
                                    

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                        />
                                    </div>

                                    

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input 
                                        type="password" 
                                        name="password"
                                        placeholder="Enter password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                        />
                                    </div>


                                    <br />

                                    <button type="submit" className="btn btn-submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}