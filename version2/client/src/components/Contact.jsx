import React from 'react'
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}


const Contact = () => {

    const [contact, setUser] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const { user: currentUser } = useAuth();

    if (userData && currentUser) {
        setUser({
            username: currentUser.username,
            email: currentUser.email,
            message: "",
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        // console.log(e);      
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...contact, [name]: value });
    }

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(user);
        // alert("Message sent successfully.");

        try {
            const response = await fetch("http://localhost:3060/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                // setUser( defaultContactFormData );
                const data = await response.json();
                console.log(data);
                toast.success("Message sent successfully.");

                if (currentUser) {
                    setUser({
                        ...defaultContactFormData,
                        username: currentUser.username,
                        email: currentUser.email,
                    });
                } else {
                    setUser(defaultContactFormData);
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" required placeholder="Enter Username" name="username" autoComplete="off" value={contact.username} onChange={handleInput}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder="Enter Email" name="email" autoComplete="off" value={contact.email} onChange={handleInput}/>
                    </div>

                    <div>
                        <label >Message</label>
                        <input className='message' type="text" required placeholder="Tell us about your query....." name="message" autoComplete="off" value={contact.message} onChange={handleInput}/>
                    </div>

                    <button  type="submit"> Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact