import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/logo.png'; // Adjust the path based on your structure

const Header: React.FC = () => {
  return (
    <header className="container px-20">
      <div className=" flex justify-between items-center py-6 gap-6">
        {/* Logo section */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image 
              src={logo}
              alt="Job Hunty Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <nav className="flex justify-between items-center w-full">
          {/* Left-side navigation */}
          <div className="flex gap-6">
            <Link href="/jobs_listing" className="text-xl">Find Jobs</Link>
            <Link href="/company">Explore Company</Link>
          </div>

          {/* Right-side navigation */}
          <div className="flex gap-4">
            <Link href="/login" className="text-primary">Login</Link>
            <Link href="/New_listing" className="font-bold bg-primary text-white rounded-md py-1.5 px-3 hover:bg-blue-600">
              Post a Job
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
