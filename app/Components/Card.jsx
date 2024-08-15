import Image from 'next/image';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useStore } from '../useStore';

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
      <Image priority src={img} alt={title} width={1689} height={2560} className='w-[150px] h-[250px] rounded-lg ' />
      <div className='flex flex-col text-black justify-center items-center'>
        <p className='text-[20px] text-center font-semibold mt-[10px]'>{title}</p>
        <p className='text-center text-sm mt-[10px] mb-[20px]'>{description}</p>
        <p className='font-medium text-center mx-0 my-[10px]'>By: {author}</p>
        <p className='font-medium text-lg text-center mx-0 my-2'>Rs.{price}</p>

        <button
          className={`${
            isAdded ? 'bg-green-500' : 'bg-black'
          } border-none p-[10px] text-white font-semibold cursor-pointer rounded-[5px] flex items-center justify-center`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <CheckCircle className='mr-[5px]' />
              Added to Cart
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
