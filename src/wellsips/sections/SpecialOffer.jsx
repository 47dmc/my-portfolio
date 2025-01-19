import { arrowRight } from "../assets/icons";
import { offertea } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse my-10 gap-10 px-6 sm:px-12 md:px-24 lg:px-32'>
      <div className='flex-1'>
        <img
          src={offertea}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full rounded-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold text-lime-600'>
          <span className='text-lime-400'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text text-lime-300'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premium quality to incredible Darjeeling Teas, we
          offer unparalleled fine qualities to our customers that sets us apart.
        </p>
        <p className='mt-6 info-text text-lime-300'>
          Navigate through the different varieties of premium Teas, surpassing the loftiest expectations. Your satisfaction is our utmost priority.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-lime-300'
            borderColor='border-slate-gray'
            textColor='text-white'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;