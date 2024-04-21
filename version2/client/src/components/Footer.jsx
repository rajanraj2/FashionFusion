import React from 'react'
// import "../styles/index.scss";
const Footer = () => {
  return (
    /*<footer>
        <div>
            <h1>Fashion Fusion</h1>
            <p>@all rights reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <div>
                <a href="https://github.com/rajanraj2/FashionFusion" target={"blank"}>Github</a>
                <a href="https://www.instagram.com/_sejal_kaur__?igsh=MWtzeWtqNnZscmdwYQ==" target={"blank"}>Instagram</a>
                <a href="https://www.linkedin.com/in/sejal-kaur-5ab5a4256/" target={"blank"}>LinkedIn</a>
                
            </div>
        </div>
    </footer>*/
   

<footer class="bg-[#3E362E]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fashion Fusion</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Fashion Fusion</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">About us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/rajanraj2/FashionFusion" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">FasihonFusion</a>. All Rights Reserved.
          </span>
      </div>
    </div>


</footer>
  )
}

export default Footer;