import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">

                    <div className="container grid grid-two-cols">


                        <div className="hero-content">

                            <h1>Welcome to Fashion Fusion!</h1>

                            <p>Are you ready to elevate your style game to the next level with personalized outfit recommendations? Look no further! At Fashion Fusion, we specialize in curating innovative fashion solutions that cater to your individual taste and wardrobe.</p>
                        </div>

                        <div><img src="images/home.png" alt="Home" width="500" height="500" /></div>

                    </div>

                </section>
            </main>


            {/* Section 2 */}
            <Analytics />
        </>
    );
}

// export default Home;