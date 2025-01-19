import React from 'react'
import {Vortex} from "./components/ui/Vortex";
import { ThreeDCard } from './components/ui/ThreeDCard';
import AboutCart from './components/ui/AboutCart';
import { ThreeDGlobe } from './components/ui/ThreeDGlobe';
import { ProjectCart } from './components/ui/ProjectCart';
import { ApproachCart } from './components/ui/ApproachCart';


const Content = () => {
  return (
    <main>
        <section className="w-full h-screen z-0 mx-auto rounded-md overflow-hidden px-4 sm:px-8 md:px-20 lg:px-32">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <div name="home">
              <ThreeDCard />
            </div>
          </Vortex>
        </section>

        <section name="about" className="px-4 sm:px-12 md:px-4 lg:px-32">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center mb-20 flex justify-center items-center bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
            <h1>Crafting Digital Experiences that are both Functional and interactive</h1>
          </div>
          <AboutCart />
        </section>

        <section name="projects" className="px-4 sm:px-8 md:px-20 lg:px-32">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center mt-20 mb-20 flex justify-center items-center bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
            <h1>Turning Ideas into Interactive realities, one line of Code at a time</h1>
          </div>
          <div>
            <ProjectCart />
          </div>
        </section>

        <section className="px-4 sm:px-8 md:px-20 lg:px-32">
          <ThreeDGlobe />
        </section>

        <section className="px-4 sm:px-8 md:px-20 lg:px-32">
          <div className="text-4xl md:text-5xl text-center mt-20 mb-20 flex justify-center items-center bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
          <h1>My Approach</h1>
          </div>
          <ApproachCart />
          <h1 className="text-3xl sm:text-4xl mb-12 md:text-5xl text-center bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent">
          I am seeking exciting job opportunities. Ready to make an
          impact! Let's Connect.
        </h1>
        </section>
      </main>
  )
}

export default Content