import { arrowUp, discount, flexbank } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row min-h-screen px-6 sm:px-12 md:px-24 lg:px-32 mb-10"
    >
      <div className="flex justify-between flex-col max-lg:w-full lg:w-[50%] h-[100vh] pb-10 xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] my-10">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="ml-2">
            <span className="text-white">20%</span> Discount For
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <h1 className="font-poppins font-semibold max-sm:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl text-dimWhite z-10">
          The Next Generation <br />
          <span className="whitespace-nowrap">Payment Method.</span>
        </h1>
        <p className="max-sm:text-center mt-2">
          Our team of experts uses a methodology <br /> 
          to identify the credit cards most likely <br /> 
          to fit your needs. We examine annual percentage <br /> 
          rates, annual fees.
        </p>
        <div className="flex max-sm:justify-center">
          <Button title="Get Started" icon={arrowUp} />
        </div>
      </div>

      <div className="flex justify-center items-center max-lg:w-full lg:w-[50%] h-[100vh] md:my-0 my-10">
        <img src={flexbank} width={500} height={500} alt="flexbank-logo" className="" />
      </div>
    </section>
  );
};

export default Hero;
