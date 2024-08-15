import Image from 'next/image';
import React from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { useStore } from '../useStore';
import Link from 'next/link';

const Card = ({ item }) => {
  const { id, img, title, author, price, description } = item;
  const { addToCart, addedItems } = useStore();

  // Check if the item is already added to the cart
  const isAdded = addedItems[id] || false;

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className='m-[20px] p-[20px] w-[285px] bg-[#f9f9f9] rounded-[10px] flex flex-col justify-between items-center'>
      <Image priority src={img} alt={title} width={1689} height={2560} className='w-[150px] h-[250px] transform transition-transform duration-300 hover:scale-105 rounded-lg ' />
      <div className='flex flex-col text-black justify-center items-center'>
        <p className='text-[20px] text-center font-semibold mt-[10px]'>{title}</p>
        <p className='text-center text-sm mt-[10px] italic mb-[20px]'>{description}</p>
        <p className='font-medium text-center text-[darkcyan] mx-0 my-[10px]'>By: {author}</p>
        <p className='font-medium text-lg text-center mx-0 my-2'>Rs.{price}</p>

        {isAdded ? (
          <Link href={'/cart'}>
            <button
              className='bg-green-500 hover:bg-green-600 border-none p-[10px] text-white font-semibold cursor-pointer rounded-[5px] flex items-center justify-center transform transition-transform hover:scale-105'
            >
              <CheckCircle className='mr-[5px]' />
              Go to Cart
            </button>
          </Link>
        ) : (
          <button
            className='bg-black hover:bg-slate-900 border-none p-[10px] text-white font-semibold cursor-pointer rounded-[5px] flex items-center justify-center transform transition-transform hover:scale-105'
            onClick={handleAddToCart}
          >
            <ShoppingBag className='mr-[5px]' />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
