import React from "react";
import MagicBtn from "./components/ui/MagicBtn";
import { Link } from "react-scroll";
import GitHubIcon from "./assets/icons8-github-30.png";
import InstagramIcon from "./assets/icons8-instagram-30.png";
import LinkedInIcon from "./assets/icons8-linkedin-30.png";
import ScrollTopIcon from "./assets/icons8-up-squared-50.png";

const Footer = () => {
  return (
    <footer name="contact">
      <div className="h-60 w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center pt-8 gap-12 pb-[48px] flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex flex-col justify-center items-center gap-4">
          <a href="mailto:dmchakma47@gmail.com">
            <MagicBtn title="Email to Connect" />
          </a>
        </div>
        <div className="flex max-sm:flex-col gap-6 flex-row justify-between items-center w-full px-4 sm:px-16 md:px-32 lg:px-48">
          <p className="bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent ml-4">
            Copyright &copy; 2024 Doyamoy
          </p>
          <div className="flex justify-between items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <a
              className="bg-white hover:bg-gray-500 rounded-lg"
              href="https://github.com/47dmc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubIcon} />
            </a>
            <a
              className="bg-white hover:bg-gray-500 rounded-lg"
              href="https://www.instagram.com/doso_ni/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} />
            </a>
            <a
              className="bg-white hover:bg-gray-500 rounded-lg"
              href="https://www.linkedin.com/in/doyamoy-chakma-915230248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} />
            </a>
            <a className="bg-gray-300 rounded-lg absolute bottom-0 right-0 h-8 w-8 hover:bg-white">
              <Link to="top" smooth={true} offset={0} duration={500}>
                <img src={ScrollTopIcon} />
              </Link>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
