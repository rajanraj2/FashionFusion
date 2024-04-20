import React from 'react';
import Lottie from "lottie-react";
import sticker from "../lottie.json";
import "../styles/index.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:3060/api/auth/login";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        // console.log(e);      
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
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
                setUser({ email: "", password: "" });
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
            console.log("login", err);
        }


        // console.log(user);
        // alert("Loggend in successfully");
    }

    return (







        <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-width:1000px">
                <div class="md:flex w-full">
                    <div class="hidden md:block w-1/2 bg-white py-10 px-10">
                        <Lottie className="sticker" animationData={sticker} />
                    </div>
                    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>

                        </div>
                        <div>
                        <form onSubmit={handleSubmit}>

                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-tertiary" placeholder="firstlast@example.com" autoComplete='off' name="email" value={user.email} onChange={handleInput} required/>
                                    </div>
                                </div>


                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-tertiary" placeholder="************" name="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                                    </div>
                                </div>


                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button class="block w-full max-w-xs mx-auto bg-primary hover:bg-tertiary text-white rounded-lg px-3 py-3 font-semibold" type="submit">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}




export default Login