"use client";
import React, { useState } from "react";
import { useStore } from "../useStore";

const Cart = () => {
  let { cart, totalPrice, incrementItem, decrementItem, removeFromCart } = useStore();
  const [applyDiscount, setApplyDiscount] = useState(false);

  const handleApplyDiscount = () => {
    setApplyDiscount(!applyDiscount);
  };

  return (
    <div className="p-6 mt-16 flex flex-col items-center justify-center">
      <p className="text-4xl text-white my-4 uppercase font-bold">Cart</p>
      {cart?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row items-center justify-between p-4 mb-4 w-[60%] md:w-[60%] bg-white rounded-lg shadow-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-[150px] h-[200px] object-cover rounded-lg"
          />
          <div className="flex flex-col text-center lg:text-left flex-grow md:pl-6">
            <p className="text-lg text-black font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">By: {item.author}</p>
            <p className="text-md font-medium text-gray-800 mt-2">
              Rs. {item.price}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0">
            <div className="flex items-center mb-2 md:mb-0">
              <button
                onClick={() => decrementItem(item.id)}
                className="px-2 py-1 border text-black border-gray-600 rounded-lg"
              >
                -
              </button>
              <p className="px-3 text-black">{item.amount}</p>
              <button
                onClick={() => incrementItem(item.id)}
                className="px-2 py-1 border text-black border-gray-600 rounded-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length !== 0 ? (
        <>
          <div className="flex items-center mt-4 bg-white px-2 py-3 rounded-lg justify-center">
            <input
              type="checkbox"
              className="mr-2 rounded-md"
              value={applyDiscount}
              onClick={handleApplyDiscount}
            />
            <p className="text-lg text-black">Apply extra 10% off</p>
          </div>
          <div className="mt-8 text-2xl text-white">
            Total Price: Rs.{" "}
            {applyDiscount ? Math.floor(totalPrice * 0.9) : totalPrice}
          </div>
          <button
            onClick={() =>
              alert(
                `Order Amount: Rs.${
                  applyDiscount ? Math.floor(totalPrice * 0.9) : totalPrice
                }. Your items will be deliver on Time. Continue Shopping`
              )
            }
            className="mt-4 px-5 py-3 bg-[#e98426] text-black font-semibold rounded-lg"
          >
            Proceed to checkout
          </button>
        </>
      ) : (
        <div className="mt-8 text-2xl text-white">Cart is Empty :(</div>
      )}
    </div>
  );
};

export default Cart;