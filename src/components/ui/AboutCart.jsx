import React, { useState, useEffect } from "react";
import laptopImg from "../../assets/laptop.png";
import codeImg from "../../assets/code-screen.jpg";
import worldImg from "../../assets/worldMap.jpg";
import techImg from "../../assets/techStack.jpg";
import techEnthusiastImg from "../../assets/techEnthusiast.avif";
import htmlIcon from "../../assets/icons8-html-48.png";
import cssIcon from "../../assets/icons8-css-48.png";
import tailwindIcon from "../../assets/icons8-tailwind-css-48.png";
import reactIcon from "../../assets/icons8-react-js-48.png";
import githubIcon from "../../assets/icons8-github-48.png";
import copyEmail from "../../assets/icons8-3d-object.gif";
import mobileGradient from "../../assets/mobileGradient.jpg";
import EmailBgImg from "../../assets/emailGradient.jpg";

const AboutCart = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "dmchakma47@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("failed to copy:", err);
      });
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex flex-col md:flex-row h-auto w-full">
        <div className="h-[70vh] w-full md:w-[60%]  gap-2 px-2 py-2">
          <div
            className="flex items-end border border-blue-900 rounded-lg h-full w-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${laptopImg})` }}
          >
            <h1 className="text-3xl mb-4 ml-4">
              I prioritize client <br /> collaboration, fostering <br /> open
              communication
            </h1>
          </div>
        </div>

        <div className="flex flex-col h-[70vh] w-full md:w-[40%] gap-2 px-2 py-2">
          <div
            className="flex justify-center items-end text-center border border-blue-900 rounded-lg h-full w-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${worldImg})` }}
          >
            <h1 className="text-2xl mb-4 ml-4">
              I am flexible <br /> with working hours <br /> and time management
            </h1>
          </div>
          <div
            className=" flex justify-center items-end text-center border border-blue-900 rounded-lg h-full w-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${techImg})` }}
          >
            <h1 className="mb-4 ml-4">
              <span className="text-sm bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
                Constantly improving
              </span>{" "}
              <br />
              <span className="text-2xl bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
                My Tech Stack
              </span>{" "}
              <br />
              <span className="flex">
                <img src={htmlIcon} />
                <img src={cssIcon} />
                <img src={tailwindIcon} />
                <img src={reactIcon} />
                <img src={githubIcon} />
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto w-full">
        <div className="flex flex-col w-full md:w-[30%] h-auto gap-2 px-2 py-2">
          <div
            className="flex h-[35vh] md:h-full items-end border border-blue-900 rounded-lg md:h-full w-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${techEnthusiastImg})` }}
          >
            <h1 className="text-xl mb-4 ml-4">
              Tech enthusiast <br /> with a passion for <br /> design and
              development
            </h1>
          </div>
          <div
            className="flex flex-col h-[35vh] md:h-full justify-center items-center border border-blue-900 rounded-lg md:h-full w-full bg-cover bg-no-repeat bg-center relative group"
            style={{ backgroundImage: `url(${EmailBgImg})` }}
          >
            <h1 className="text-center text-xl">
              Want to work with me or project collaboration?
            </h1>
            <button
              className="hover:cursor-pointer px-8 border border-blue-900 rounded-lg bg-gray-600 hover:bg-gray-800 transition"
              onClick={copyToClipboard}
            >
              <img src={copyEmail} />
            </button>
            {isCopied && (
              <span className="mt-2 text-green-500 ">Email copied</span>
            )}
            <span className="absolute bottom-16 mb-1 left-1/2 transform -translate-x-1/2 text-sm text-gray-800 bg-white border-gray-300 rounded shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Copy email
            </span>
          </div>
        </div>
        <div className="h-[50vh] w-full md:w-[70%] gap-2 px-2 py-2">
          <div className="flex border border-blue-900 rounded-lg h-full w-full">
            <h1
              className="h-auto w-[30%] flex items-center text-2xl text-center bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${mobileGradient})` }}
            >
              Currently working on a 3-D project using three.js
            </h1>
            <img src={codeImg} alt="codeImg" className="h-full w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCart;
