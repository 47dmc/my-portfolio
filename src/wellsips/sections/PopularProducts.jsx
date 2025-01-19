import { products } from "../constants";
import { star } from "../assets/icons";
// import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='mt-12 min-h-screen px-6 sm:px-12 md:px-24 lg:px-32'>
      <div className='flex flex-col justify-start gap-4 mt-8'>
        <h2 className='text-4xl font-palanquin font-bold text-lime-600'>
          Our <span className='text-lime-400'> Popular </span> Products
        </h2>
        <p className='mt-2 font-montserrat text-lime-300'>
          Try our finest quality Teas, seasonal harvested <br /> 
          that have health benefits and enjoy the flavour of timeless taste.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <div className='flex flex-1 flex-col w-full max-sm:w-full'>
                <img src={product.imgURL} alt={product.name} className='w-[282px] h-[282px] rounded-xl' />
                <div className='flex justify-start gap-2'>
                  <img src={star} alt='rating icon' width={24} height={24} />
                  <p className='font-montserrat text-xl leading-normal text-lime-300'>
                    (4.5)
                  </p>
                </div>
                <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin text-lime-300'>
                  {product.name}
                </h3>
                <p className='font-semibold font-montserrat text-coral-red text-2xl leading-normal text-lime-500'>
                  {product.price}
                </p>
              </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;