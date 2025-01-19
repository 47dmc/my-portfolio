import { card, arrowUp } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className="flex min-h-screen max-lg:flex-col px-6 sm:px-12 md:px-24 lg:px-32">
    <div className="max-lg:w-full lg:w-[50%] py-10">
      <h2 className="max-sm:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#8F0D0D]">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className="sm:text-3xl lg:text-2xl xl:text-3xl max-sm:text-2xl mt-10">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} title="Get a Card" icon={arrowUp} />
    </div>

    <div className="max-lg:w-full lg:w-[50%] max-sm:py-24 sm:py-10 lg:py-24 xl:py-16">
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;