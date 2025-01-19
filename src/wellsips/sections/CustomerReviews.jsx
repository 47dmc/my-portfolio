
import { reviews } from "../constants";
import { star } from "../assets/icons";
const CustomerReviews = () => {
  return (
    <section className='min-h-screen px-6 sm:px-12 md:px-24 lg:px-32'>
      <h3 className='font-palanquin text-center text-4xl font-bold text-lime-600 mt-10'>
        What Our
        <span className='text-lime-400'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text text-lime-300 text-md'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <div className='flex justify-center items-center flex-col'>
          <img
            src={review.imgURL}
            alt='customer'
            className='rounded-full object-cover w-[120px] h-[120px]'
          />
          <p className='mt-6 max-w-sm text-center info-text text-lime-300'>{review.feedback}</p>
          <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img
              src={star}
              width={24}
              height={24}
              alt='rating star'
              className='object-contain m-0'
            />
            <p className='text-xl font-montserrat text-slate-gray text-lime-300'>({review.rating})</p>
          </div>
          <h3 className='mt-1 font-palanquin text-3xl text-center font-bold text-lime-600'>
            {review.customerName}
          </h3>
        </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
