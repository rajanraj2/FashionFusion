import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:3060/api/auth/register";

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
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
        console.log(user);
        // alert("Form submitted");

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            // console.log(response);

            const res_data = await response.json();
            console.log("response from server", res_data);



            if (response.ok === true) {
                storeTokenInLS(res_data.token);

                toast.success("Registration successful");

                // Perform login after registration
                const loginResponse = await fetch("http://localhost:3060/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password,
                    }),
                });

                const loginResData = await loginResponse.json();


                // Automatically login after registration
                if (loginResponse.ok === true) {
                    storeTokenInLS(loginResData.token);
                    // toast.success("Login successful");
                    setUser({ username: "", email: "", phone: "", password: "" });
                    navigate("/");
                } else {
                    if (loginResData.extraDetails) {
                        toast.error(`${loginResData.extraDetails}`);
                    } else {
                        toast.error(loginResData.message);
                    }
                    console.log("Invalid email or password :(");
                }
            } else {
                if (res_data.extraDetails) {
                    toast.error(`Registration failed: ${res_data.extraDetails}`);
                } else {
                    toast.error(`Registration failed: ${res_data.msg}`);
                }
            }

            }
        catch (err) {
                console.log("register", err);
            }





            // console.log(response);
        }

    return (
            <>
                <section>
                    <main>
                        <div className="section-registration">
                            <div className="container grid grid-two-cols">
                                <div className="registration-image">
                                    <img src="images/register.png" alt="Registration" width="500" height="500" />
                                </div>

                                {/* Registratoin form */}

                                <div className="registration-form">
                                    <h1 className="main-heading">Registration form</h1>
                                    <br />

                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="username">username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Enter username"
                                                id="username"
                                                required
                                                autoComplete="off"
                                                value={user.username}
                                                onChange={handleInput}
                                            />
                                        </div>

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
                                            <label htmlFor="phone">phone</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                placeholder="Enter phone number"
                                                id="phone"
                                                required
                                                autoComplete="off"
                                                value={user.phone}
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

                                        <button type="submit" className="btn btn-submit">Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </>
        );
    }