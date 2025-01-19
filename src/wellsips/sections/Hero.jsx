import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button } from "../components";
import { tea1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(tea1);

  const handleClick = (shoeImage) => {
    setBigShoeImg(shoeImage);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row max-lg:flex-col justify-between items-center min-h-screen px-6 sm:px-12 md:px-24 lg:px-32"
    >
      <div className="relative max-lg:w-full lg:w-[50%] flex flex-col justify-center items-start pt-16 h-screen">
        <p className="text-2xl font-montserrat text-lime-300 font-bold">
          Our Winter Sales
        </p>

        <h1 className="font-palanquin max-sm:text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl whitespace-nowrap font-bold text-lime-600 mt-12">
          <span className="relative z-10 pr-10">The Luxury Premium</span>
          <br />
          <span className="text-lime-300 inline-block mt-3">
            WellSips
          </span>{" "}
          Teas
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-lime-300">
          Get Special offer on this Winter sales on all our premium and luxury
          WellSips Teas
        </p>

        <Button className="bg-lime-600" label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-12">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold text-lime-300">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-lime-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center h-screen max-lg:w-full lg:w-[50%] bg-hero bg-cover bg-center bg-lime-950 border-2 border-yellow-500">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={400}
          height={400}
          className="object-contain relative z-10 rounded-xl"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] right-[1/2] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <img
              src={shoe.bigShoe}
              alt="shoe collection"
              key={index}
              className={`border-2  border-lime-700 rounded-xl cursor-pointer flex justify-center items-center bg-center bg-cover w-28 h-28 lg:w-24 lg:h-24 xl:w-28 xl:h-28 ${
                bigShoeImg === shoe.bigShoe
                  ? "border-lime-100"
                  : "border-transparent"
              }`}
              onClick={() => handleClick(shoe.bigShoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
