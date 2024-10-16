// src/components/Navbar.tsx
import React from "react";

import Logo from "@assets/logo/cash-craft-logo.svg";

// Define types for the props (optional if you're not passing any props)
interface NavbarProps {}

// Navbar component
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-white p-1 border-solid border-b-2 border-t-0 border-l-0 border-r-0 border-gray-100">
      <div className="container mx-auto grid grid-cols-3">
        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/" className="text-black hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-black hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        {/* Brand Logo */}
        <div className="flex items-center justify-center">
          <img src={Logo} alt="logo" width={45} />
        </div>

        <div className="flex items-center justify-end">Avatar</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Icon for mobile menu (hamburger) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
