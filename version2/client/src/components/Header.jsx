import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../store/auth"
import vg from "../assets/Faishon.png";

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className='border-b-4 border-tertiary'>
      {/* <h1 className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>FashionFusion</h1> */}
      <div className='flex items-center'>
      <HashLink to={"/#home"}><img className='h-25 w-40' src={vg} alt="" /></HashLink>
        <Link to={"/Pro"}>Pro</Link>
      </div>
      
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        {/* <Link to={"/login"}>Login</Link> */}
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
        {isLoggedIn ?
          <Link to={"/logout"}>Logout</Link>
          :
          <>
            <Link to={"/register"}><button className=' text-white bg-primary hover:bg-tertiary font-medium rounded-lg  px-5 py-0.6'>Sign Up</button></Link>
          </>
        }
      </main>
    </nav>
  );

};

export default Header;
//Hashlink is for, if u want to direct get to it on the same page