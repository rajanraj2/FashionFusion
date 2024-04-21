import React from 'react';
import vg from "../assets/designer.png";
// import ag from "../assets/Hero4.jpg";
import gg from "../assets/my.jpeg";
import rajan from "../assets/rajan.jpg";
import himanshu from "../assets/himanshu.jpg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { useAuth } from "../store/auth";

const Home = () => {
  const { user: currentUser } = useAuth();
  return (
    <>
      <div className="home" id="home">
        <main>

          <h1>Fashion Fusion</h1>
          <p>No More "WHAT TO WEAR TODAY?"</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p className='text-gray-700 font-medium'>
            Are you ready to elevate your <h2>STYLE GAME </h2>to the next level
            with personalized <h2>OUTFIT RECOMMENDATIONS?</h2> Look no further! At Fashion Fusion,
            we specialize in curating innovative fashion solutions that cater to your
            individual taste and <h2>WARDROBE</h2>
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1 className=''>Hii there {currentUser ? `${currentUser.username} !` : `!`}</h1>
          <h2>Who we are?</h2>
          {/* <ul>
            <li>Expertise: Our team comprises fashion aficionados with a keen eye for the latest trends and styles.</li>
            <br />


            <li>Customization: We recognize that every individual's fashion preferences are unique. That's why we craft personalized outfit recommendations tailored to your wardrobe and personal style.</li>
            <br />

            <li>Customer-Centric Approach: Your satisfaction is our priority. We are dedicated to providing stellar support to address all your fashion-related needs and concerns.</li>
            <br />

            <li>Affordability: We understand the value of budget-friendly fashion. Our services offer competitive pricing without compromising on style or quality.</li>
            <br />

            <li>Reliability: Trust us to be there for you whenever you need fashion inspiration. We're committed to ensuring your wardrobe is reliable and ready to help you look your best, day or night.</li>
          </ul> */}


          <ol class="space-y-4 my-16 font-semibold  text-gray-600 list-decimal list-inside ">
            <li >
              Expertise & Reliability
              <ul class="ps-5 mt-2 space-y-1 px-4 py-4 rounded-lg bg-secondary  list-inside">
                <li>Trust us to be there for you whenever you need fashion inspiration. We're committed to ensuring your wardrobe is reliable and ready to help you look your best, day or night.</li>
                <li>Our team comprises fashion aficionados with a keen eye for the latest trends and styles.</li>
                {/* <li>Nesting tons of folders in your source code is also not helpful.</li> */}
              </ul>
            </li>
            <li>
              Customisation & Customer-Centric Approach
              <ul class="ps-5 mt-2 space-y-1 px-4 py-4 rounded-lg bg-secondary  list-inside">
                <li>We recognize that every individual's fashion preferences are unique. That's why we craft personalized outfit recommendations tailored to your wardrobe and personal style.</li>
                <li>Your satisfaction is our priority. We are dedicated to providing stellar support to address all your fashion-related needs and concerns.</li>
                {/* <li>If you nest four levels deep you belong in prison.</li> */}
              </ul>
            </li>
            <li>
              Affordability & Accessibility
              <ul class="ps-5 mt-2 space-y-1 px-4 py-4 rounded-lg bg-secondary  list-inside">
                <li>We understand the value of budget-friendly fashion. Our services offer competitive pricing without compromising on style or quality.</li>
                <li>We strive to make fashion accessible to everyone, ensuring our recommendations consider diverse needs and abilities.</li>
                {/* <li>I'm upset that we even have to bother styling this.</li> */}
              </ul>
            </li>
          </ol>

        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Team</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <img src={gg}></img><p className='font-medium'>Sejal Kaur</p>
              <p>Frontend Developer</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
              <img src={rajan}></img><p className='font-medium'>Rajan Raj</p>
              <p>Backend Developer</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <img src={himanshu}></img>
              <p className='font-medium'>Himanshu Dahiya</p>
              <p>AI Engineer</p>
            </div>

            {/* <div style={{
              animationDelay: "0.9s",
            }}>
              <AiFillInstagram /><p>Instagram</p>
            </div> */}
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;