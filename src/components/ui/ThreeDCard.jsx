import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import MagicBtn from "./MagicBtn";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var z-10">
      <CardBody className="relative w-auto w-[25rem] sm:w-[30rem] h-auto rounded-xl p-6 border-2 border-red-900 bg-blue-50 bg-opacity-10">
        <CardItem
          translateZ="100"
          className="w-full h-auto object-cover rounded-xl border border-blue-900 shadow-[0px_10px_10px_black] lg:px-8 bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent px-4"
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            <h1 className="mt-0">Hi,</h1>
            <h1>
              I am <span className="text-amber-700">Doyamoy</span>
            </h1>
            <h1>Web Developer</h1>
          </div>
          <p className="mt-4 text-md sm:text-xl">
            I am a Frontent Web Developer, proficient in coding and maintaining
            websites to ensure functionality and responsiveness
          </p>
        </CardItem>
        <div className="flex justify-center items-center mt-10">
          <CardItem translateZ={20} className="px-4 py-2">
            <a
              href="/port-resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicBtn title="Download CV" />
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
