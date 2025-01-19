import { apple, bill, google } from "../assets";

const Billing = () => (
  <section
    id="product"
    className="flex justify-center items-center max-lg:flex-col min-h-screen px-6 sm:px-12 md:px-24 lg:px-32"
  >
    <div className="max-lg:w-full lg:w-[50%] h-screen py-10">
      <img
        src={bill}
        alt="billing"
        className="w-[100%] max-sm:h-[80%] md:h-[100%] lg:h-[80%] xl:h-[95%] relative z-[5]"
      />
    </div>

    <div className="flex flex-col justify-between items-center max-lg:w-full lg:w-[50%] h-screen py-10">
      <div>
        <h2 className="max-sm:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#8F0D0D]">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="sm:text-3xl lg:text-2xl xl:text-3xl max-sm:text-2xl mt-10">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
