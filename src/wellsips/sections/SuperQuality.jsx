import { supertea } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full px-6 sm:px-12 md:px-24 lg:px-32 min-h-screen mt-10'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-lime-600'>
          We Provide You
          <span className='text-lime-400'> Super </span>
          <span className='text-lime-400'>Quality </span> Teas
        </h2>
        <p className='mt-4 lg:max-w-lg info-text text-lime-400'>
          Ensuring premium flavour Teas, our finest teas comes from the best harvested Tea crops from around the World. Our products are prepared and packed with no additional preservatives and under dust free environment, providing you with unmatched
          quality, fragrance and a taste of luxury.
        </p>
        <p className='mt-6 lg:max-w-lg info-text text-lime-400'>
          Our dedication in providing your with the finest Teas from around the world and to ensures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={supertea}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;