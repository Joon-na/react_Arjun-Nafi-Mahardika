import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-[82.182px] flex justify-between items-center bg-[#222] shadow-md px-6 sm:px-12 lg:px-40">
      <img className="w-12" src="../src/assets/logo.png" alt="logo" />

      {/* Hamburger Menu Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`flex-col sm:flex-row absolute sm:static top-[80px] left-0 w-full sm:w-auto bg-[#222] sm:bg-transparent sm:flex items-start gap-10 text-sm font-poppins list-none sm:mr-16 transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        <li className="px-6 py-3 sm:px-0 sm:py-0">
          <Link to="/" className="no-underline text-white">
            Home
          </Link>
        </li>
        <li className="px-6 py-3 sm:px-0 sm:py-0">
          <Link to="/products" className="no-underline text-white">
            Products
          </Link>
        </li>
        <li className="px-6 py-3 sm:px-0 sm:py-0">
          <Link to="/about" className="no-underline text-white">
            About
          </Link>
        </li>
        <li className="px-6 py-3 sm:px-0 sm:py-0">
          <Link to="/contacts" className="no-underline text-white">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
