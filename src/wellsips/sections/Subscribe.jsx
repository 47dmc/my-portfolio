import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 mt-10 mb-16 px-6 sm:px-12 md:px-24 lg:px-32"
    >
      <h3 className="text-4xl lg:max-w-md font-palanquin font-bold text-lime-600">
        Sign Up for
        <span className="text-lime-400"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex justify-between items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray  rounded-xl">
        <input
          type="text"
          placeholder="wellsipstea@gmail.com"
          className="input w-full rounded-lg pl-3 text-dimWhite w-full border border-red-500"
        />
        <div className="flex justify-end max-sm:justify-center items-center">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
