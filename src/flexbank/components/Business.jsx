import { features } from "../constants";
import { arrowUp } from "../assets";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="w-[64px] h-[64px] rounded-full bg-dimBlue">
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[#570909] text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className="flex max-lg:flex-col min-h-screen justify-center items-center px-6 sm:px-12 md:px-24 lg:px-32 max-lg:gap-10">
    <div className="max-lg:w-full lg:w-[50%]">
      <h2 className="max-sm:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#8F0D0D]">
        You do the business, <br className="sm:block hidden" /> we'll handle
        the money.
      </h2>
      <p className="sm:text-3xl lg:text-2xl xl:text-3xl max-sm:text-2xl mt-10">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} title="Join Us" icon={arrowUp} />
    </div>

    <div className="flex-col max-lg:w-full lg:w-[50%]">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;