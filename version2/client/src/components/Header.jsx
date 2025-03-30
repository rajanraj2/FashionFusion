import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../store/auth"
import vg from "../assets/Faishon.png";
// import { useState } from 'react';
import cc from "../assets/CC.png";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className='border-b-4 border-tertiary'>
      {/* <h1 className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>FashionFusion</h1> */}
      <div className='flex items-center'>
      {/* <HashLink to={"/#home"}><img className='h-25 w-40' src={vg} alt="" /></HashLink> */}
      <HashLink to={"/#home"}><img className='h-25 w-40' src={vg} alt="" /></HashLink>
        {/* <Link to={"/Pro"} onClick={handleProClick}>Pro</Link> */}
        <button className=' text-white bg-primary hover:bg-tertiary font-medium rounded-lg  px-5 py-0.6'>Pro</button>
      </div>
      
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Team</HashLink>
        <Link to={"/contact"}>Contact</Link>
        {/* <Link to={"/login"}>Login</Link> */}
        <Link to={"/services"}>Services</Link>
        {isLoggedIn ?
          <Link to={"/logout"}><button className=' text-white bg-primary hover:bg-tertiary font-medium rounded-lg  px-5 py-0.6'>Logout</button></Link>
          :
          <>
            <Link to={"/register"}><button className=' text-white bg-primary hover:bg-tertiary font-medium rounded-lg  px-5 py-0.6'>Sign Up</button></Link>
          </>
        }
      </main>

      {/* Conditionally render the payment form */}
      {/* {showPaymentForm && (
        <form>
          <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NuxEMWCGpim9b6" async></script>
        </form>
      )}

      {clickPaymentForm && (
        <form>
          <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NuxEMWCGpim9b6" async></script>
        </form>
      )} */}
      
    </nav>
  );

};

export default Header;
//Hashlink is for, if u want to direct get to it on the same page