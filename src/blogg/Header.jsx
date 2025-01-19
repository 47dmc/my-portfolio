import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-[8vh] bg-blue-950 sticky top-0 z-50 px-6 sm:px-16 md:px-32 lg:px-48">
      <h1 className="text-4xl font-bold text-transparent" style={{WebkitTextStroke: "1px gray"}}>DC.Blog</h1>
      <a
        className="text-lg px-2 rounded-xl bg-black text-blue-200 hover:text-gray-500 "
        href="https://github.com/47dmc"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </header>
  );
};

export default Header;
