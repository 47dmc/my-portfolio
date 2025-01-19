import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className="min-h-screen py-10 px-6 sm:px-12 md:px-24 lg:px-32">

    <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6">
      <h2 className="text-3xl text-[#570909] font-bold text-wrap">
        What People are <br /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className="text-center text-dimWhite text-xl mt-8">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-between items-center w-full gap-6">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;