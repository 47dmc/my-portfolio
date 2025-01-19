import { services } from "../constants";

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-10 items-center gap-4 min-h-[60vh] px-6 sm:px-12 md:px-24 lg:px-32">
      {services.map((service) => (
        <div className="flex justify-center items-center flex-col w-full h-[80%] rounded-lg">
          <div className="flex justify-center items-center bg-lime-600 rounded-full w-12 h-12">
            <img
              src={service.imgURL}
              alt={service.label}
              width={24}
              height={24}
            />
          </div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-lime-300">
            {service.label}
          </h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-lime-300 text-center">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
