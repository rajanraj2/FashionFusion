// import { useState } from "react";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {

    // const [userData, setUserData] = useState(true);

    const { user: currentUser } = useAuth();


    return (
        <>
            <main>
                <section className="section-hero">
                    
                    <div className="container grid grid-two-cols">
                        
                        <div className="hero-content">
                        <h3>Welcome {currentUser ? `${currentUser.username} to our website` : `to our website`}</h3>
                            <h1>Why choose us?</h1>
                            <br />
                            <p>
                            Expertise: Our team comprises fashion aficionados with a keen eye for the latest trends and styles.
                            </p><br /><p>
                            Customization: We recognize that every individual's fashion preferences are unique. That's why we craft personalized outfit recommendations tailored to your wardrobe and personal style.
                            </p><br /><p>
                            Customer-Centric Approach: Your satisfaction is our priority. We are dedicated to providing stellar support to address all your fashion-related needs and concerns.
                            </p><br /><p>
                            Affordability: We understand the value of budget-friendly fashion. Our services offer competitive pricing without compromising on style or quality.
                            </p><br /><p>
                            Reliability: Trust us to be there for you whenever you need fashion inspiration. We're committed to ensuring your wardrobe is reliable and ready to help you look your best, day or night.
                            </p>

                            <br />

                        </div>
                        <div className="hero-img">
                            <img src="images/about.png" alt="About" width="500" height="500" />
                        </div>
                    </div>
                </section>
            </main>

            <Analytics />
        </>
    );
}

// export default About;