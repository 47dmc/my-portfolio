import { Link } from "react-scroll";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      name="top"
      className="flex flex-col w-full h-auto absolute z-50 px-4 sm:px-8 md:px-20 lg:px-32"
    >
      <nav className="flex flex-row w-full justify-between h-[48px] items-center mt-5">
        <h1 className="text-white-900 text-4xl font-bold bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
          DMC.
        </h1>
        <button onClick={toggleMenu} className="text-white sm:hidden">
          {isMenuOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
        <div
          className={`flex absolute sm:hidden top-1/2 right-[10%] transition duration-500 flex-col rounded-lg ${
            isMenuOpen ? "block" : "hidden"
          } bg-gray-800`}
        >
          <a className="block px-4 py-2 hover:bg-gray-700">
            <Link to="home" smooth={true} offset={0} duration={500}>
              HOME
            </Link>
          </a>
          <a className="block px-4 py-2 hover:bg-gray-700">
            <Link to="about" smooth={true} offset={0} duration={500}>
              ABOUT
            </Link>
          </a>
          <a className="block px-4 py-2 hover:bg-gray-700">
            <Link to="projects" smooth={true} offset={0} duration={500}>
              PROJECTS
            </Link>
          </a>
          <a className="block px-4 py-2 hover:bg-gray-700">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              CONTACT
            </Link>
          </a>
        </div>
        <ul className="flex justify-between w-auto h-auto items-center sm:gap-2 md:gap-4 lg:gap-6 max-sm:hidden">
          <li className="cursor-pointer text-sm font-bold bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent px-2 hover:text-purple-900">
            <Link to="home" smooth={true} offset={0} duration={500}>
              HOME
            </Link>
          </li>
          <li className="cursor-pointer text-sm font-bold bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent px-2 hover:text-purple-900">
            <Link to="about" smooth={true} offset={0} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="cursor-pointer text-sm font-bold bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent px-2 hover:text-purple-900">
            <Link to="projects" smooth={true} offset={0} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li className="cursor-pointer text-sm font-bold bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent px-2 hover:text-purple-900">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
