import React from 'react'
import { Link } from "react-router-dom";

const Nav = ({search, setSearch}) => {
  return (
    <nav className="flex w-full h-[6vh] bg-blue-950 justify-between items-center sticky top-[8vh] z-50 px-6 sm:px-16 md:px-32 lg:px-48">
      <form className="flex justify-center items-center w-[40%] h-[4vh]">
        <input
         id='search'
         type='text'
         placeholder='Search Posts...'
         className="border-0 focus:outline-none focus:ring-0 rounded-md bg-blue-200 pl-2 text-sm h-full w-full text-black"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-blue-300">
        <li className="font-bold hover:text-gray-300"><Link to='/blogg'>HOME</Link></li>
        <li className="font-bold hover:text-gray-300"><Link to='/blogg/post'>POST</Link></li>
        <li className="font-bold hover:text-gray-300"><Link to='/blogg/about'>ABOUT</Link></li>
      </ul>
    </nav>
  )
}

export default Nav