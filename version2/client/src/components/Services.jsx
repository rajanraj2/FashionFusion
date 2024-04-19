//huig
// import React, { useState } from 'react';
//import {Carousel} from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import img1 from "../assets/2.png";
//import img2 from "../assets/3.png";
import "../styles/index.scss";
//import React from 'react'
import { data } from './data/data';

import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



const Services = () => {

  const [cloth] = useState(data);

  const [clothImage, setClothImage] = useState(null);

  const [clothImagePreview, setClothImagePreview] = useState(null); // Define clothImagePreview state

  const [wardrobeImages, setWardrobeImages] = useState([]);

  // const [userData, setUserData] = useState(true);

  const { user: currentUser } = useAuth();

  const [uploading, setUploading] = useState(false);
  const [showDetectionMessage, setShowDetectionMessage] = useState(false);
  const [showAddingMessage, setShowAddingMessage] = useState(false);

  const [recommendedOutfits, setRecommendedOutfits] = useState([]);




  const handleUpload = async () => {
    try {
      toast.info("Uploading your image...");
      setUploading(true); // Set uploading state to true
      setTimeout(() => {
        setShowDetectionMessage(true);
      }, 1000);

      setTimeout(() => {
        toast.info("AI detecting the type of cloth...");
        setTimeout(() => {
          toast.info("Adding cloth to your wardrobe...");
        }, 1000); // Delayed toast after 1 second
      }, 1000); // Delayed toast after 1 second

      const formData = new FormData();
      formData.append("clothImage", clothImage);
      // console.log("Current user email :) ", currentUser.email);
      formData.append("email", currentUser.email);

      setShowAddingMessage(true);
      const response = await fetch("http://localhost:3060/api/upload", {
        method: "POST",
        body: formData,
      });

      setUploading(false);
      setShowDetectionMessage(false);
      setShowAddingMessage(false);

      if (response.ok) {
        // Handle success if needed
        toast.success("Image uploaded successfully!");
        console.log("Image uploaded successfully!");
        handleWardrobeClick();
        setShowAddingMessage(false);

        setClothImage(null);
        setClothImagePreview(null);
      } else {
        // Handle error if needed
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error occurred during image upload:", error);
    }
    finally {
      // Set uploading state to false after 10 seconds
      setUploading(false);
      setShowDetectionMessage(false);
      setShowAddingMessage(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Create a new FileReader instance
    const reader = new FileReader();

    // Define the onload event handler for the FileReader
    reader.onload = () => {
      // Set the result of the FileReader to the image preview
      setClothImagePreview(reader.result);
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);

    // Set the selected image file
    setClothImage(file);
  };





  const handleWardrobeClick = async () => {
    try {
      // Include the current user's email in the request body
      const requestBody = {
        email: currentUser.email
      };

      const response = await fetch("http://localhost:3060/api/getImages", {
        method: "POST", // Change the method to POST
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody) // Convert the request body to JSON
      });

      if (response.ok) {
        console.log("Wardrobe images fetched successfully!");
        const data = await response.json();
        const reversedImages = data.images.reverse();
        setWardrobeImages(reversedImages);
      } else {
        // console.log("Failed to fetch wardrobe images");
        console.error("Failed to fetch wardrobe images");
      }
    } catch (error) {
      // console.log("Error occurred while fetching wardrobe images:", error);
      console.error("Error occurred while fetching wardrobe images:", error);
    }
  };


  const handleRecommend = async (imageName, clothType, extra) => {
    try {
      const ogImageName = imageName;
      const ogClothType = clothType;
      const ogExtra = extra;
      const requestBody = {
        email: currentUser.email,
        imageName: imageName,
        clothType: clothType,
        extra: extra
      };
      const response = await fetch("http://localhost:3060/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });



      if (response.ok) {
        const recommendedData = await response.json();
        if (recommendedData.length === 0) {
          // If no recommendations, add default outfit
          const defaultOutfit = {
            imageName: 'noMatch.png',
            clothType: 'otherOne',
            extra: 'Default outfit',
            ogImageName: ogImageName,
            ogClothType: ogClothType,
            ogExtra: ogExtra
          };
          setRecommendedOutfits([defaultOutfit]); // Store default outfit in state
        } else {
          // If recommendations exist, store them in state
          recommendedData.forEach(outfit => {
            outfit.ogImageName = ogImageName;
            outfit.ogClothType = ogClothType;
            outfit.ogExtra = ogExtra;
          });
          setRecommendedOutfits(recommendedData); // Store recommended outfits in state
        }
        console.log("Recommendation sent successfully!");
      } else {
        console.error("Failed to send recommendation");
      }
    } catch (error) {
      console.error("Error occurred while sending recommendation:", error);
    }
  };


  const handleDelete = async (imageName) => {
    try {
      const requestBody = {
        email: currentUser.email,
        imageName: imageName,
      };
      const response = await fetch("http://localhost:3060/api/deleteImages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        // Update wardrobe images state after successful deletion
        handleWardrobeClick();
        toast.success("Image deleted successfully!");
      } else {
        console.error("Failed to delete image");
      }
    } catch (error) {
      console.error("Error occurred during image deletion:", error);
    }
  };


  useEffect(() => {
    // Call handleWardrobeClick when the component is first loaded
    handleWardrobeClick();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render



  return (
    <>
      <div className='max-w-1640px m-auto px-4 py-8'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Manage your Wardrobe</h1>
        <div class="p-8 flex justify-center  h-64 bg-white">
          <div class="w-full md:w-1/2 relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
            <div
              class="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
              <label class="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" for="restaurantImage">

                Select image
                <input id="restaurantImage" class="text-sm cursor-pointer w-36 hidden" type="file" />
              </label>
              <button
                class='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150' >
                remove image </button>
              <button
                class='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150' onClick={handleUpload}>
                Upload </button>


            </div>
            <div
              class="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
              <span class="text-gray-400 opacity-75">
                <svg class="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

      </div>


      <div className=' flex justify-between gap-10 max-w-1640px m-auto px-12 py-8'>

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="p-8 rounded-t-lg" src="https://images.pexels.com/photos/228095/pexels-photo-228095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto h-96 w-1/2 bg-red-200 px-12 py-8 rounded-lg'>
          <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
            {cloth.map((item, index) => (
              //  <Link to={`/destination/${item.id}`}>
              <div
                key={index}
                className='border shadow-lg rounded-lg hover:scale-105 duration-300'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-[300px] object-cover rounded-t-lg'
                />
                <div className='flex justify-between px-2 py-4'>
                  <p className='font-bold'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>





      {/* <div class="max-w-xl mx-auto">

<div className="bg-gray-500 h-screen w-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">

      
    
		<a href="#">
			<img class="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image" />
        </a>
			<div class="px-5 pb-5">
				<a href="#">
					<h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">RECOMMENDATION</h3>
				</a>
				<div class="flex items-center mt-2.5 mb-5">
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
				</div>
			
			</div>
	</div>
</div>
</div> */}



    </>
  )
}

export default Services;