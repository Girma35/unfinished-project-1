import React from 'react';
import ItemsContainer from "./itemsContainer";
import logo from '../assets/images/logo.png'; 
import Image from "next/image";
import Link from "next/link";
import SocialIcon from './SocialIcon';
import {Icons} from "./menu"; 


const Footer: React.FC = () => {
  return (
    <footer className=" containe bg-bgGray text-white mx-auto px-12">
    
      {/* Top section with logo and description */}
      <div className="md:flex md: pt-6">
        <div className="flex flex-col gap-2">
          {/* Logo section */}
          <div className="bg-white w-20 h-5 ">
            <Link href="/">
              <Image 
                src={logo}
                alt="Job Hunty Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Description text */}
          <h2 className="lg:text-xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-3/5">
            <span className="text-teal-400"></span> Find your dream job easier.
          </h2>
        </div>

        {/* Navigation items container */}
        <div className="ml-4 lg:px-12"> {/* Adjust the margin value as needed */}
          <ItemsContainer />
        </div>

        {/* Subscription section */}
        <div className="flex flex-col md:items-end md:justify-end md:gap-4"> {/* Use flex-col to stack items vertically */}
          <h2 className="font-semibold text-lg text-center md:text-left md:mr-4"> {/* Center on small screens */}
            Get job notifications
          </h2>
          <p className="text-sm text-center md:text-left md:mr-4"> {/* Center on small screens */}
            The latest job news, articles, sent to your inbox weekly.
          </p>

          {/* Email input and subscribe button */}

          <div className="flex flex-col md:flex-row md:gap-4 w-full"> 
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input 
              id="email"
              type="text"
              placeholder="Email Address"
              className="text-textGray sm:w-72 w-full sm:mr-5 mb-4 py-2.5 rounded px-2 focus:outline-none md:w-auto"
            />
            <button className="bg-primary hover:bg-blue-600 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer bottom section */}
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center pt-2 text-sm pb-8">
        <span>© {new Date().getFullYear()} Girma Wakeyo Darbeto. All rights reserved.</span>
        <span>Terms and Privacy Conditions</span>
        <span>Powered by Girma Wakeyo Darbeto</span>
        <SocialIcon  Icons={Icons} />
      </div>
     
      {/* Social Icon Section */}
      
    </footer>
  );
};

export default Footer;
