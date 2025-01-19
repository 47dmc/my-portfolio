import Button from "./Button";
import { arrowUp } from "../assets";

const CTA = () => (
  <section className="flex flex-Wrap justify-between items-center py-10 sm:flex-row flex-col max-sm:gap-4 px-6 sm:px-12 md:px-24 lg:px-32">
    <div className="flex justify-start items-start flex-col">
      <h2 className="text-3xl font-bold text-[#570909]">Let's try our service now!</h2>
      <p className="mt-2 text-dimWhite text-lg font-poppins">
        Everything you need to accept card payments and <br /> 
        grow your business anywhere on the planet.
      </p>
    </div>

    <div className="flex justify-center items-center">
      <Button title="Try Now" icon={arrowUp} />
    </div>
  </section>
);

export default CTA;