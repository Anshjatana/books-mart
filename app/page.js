'use client';
import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import './globals.css'
import { useStore } from "./useStore";

const Home = () => {
  const { cart, warning, addToCart, toggleShow } = useStore();

  return (
    <div>
      <Navbar size={cart.length} setShow={toggleShow} />
        <Main handleClick={addToCart} />
      {warning && <div className="warning">Item is already in your cart</div>}
    </div>
  );
};

export default Home;
