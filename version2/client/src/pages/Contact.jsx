import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}

export const Contact = () => {

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

        setUser({...contact, [name]: value});
    } 

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(user);
        // alert("Message sent successfully.");

        try{
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
        <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="contact-content container">
                            <h1 className="main-heading">Contact us</h1>
                        </div>
                        <div className="container grid grid-two-cols">
                            <div className="contact-image"> 
                                <img src="images/contact.png" alt="Contact" width="500" height="500"/>
                            </div>

                            {/* Contact form */}
                            <section className="section-form">

                            <div className="contact-form">
                                

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
                                        value={contact.username}
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
                                        value={contact.email}
                                        onChange={handleInput}
                                        />
                                    </div>

                                    

                                    <div>
                                        <label htmlFor="message">message</label>
                                        <textarea 
                                        name="message"
                                        id="message"
                                        cols="80"
                                        rows="10"
                                        required
                                        value={contact.message}
                                        onChange={handleInput}
                                        />
                                    </div>


                                    <br />

                                    <button type="submit" className="btn btn-submit">Send</button>
                                </form>
                            </div>
                            </section>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}