'use client';
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cart from "./components/Cart";
import './globals.css'
import { useStore } from "./useStore";

const Home = () => {
  const { cart, warning, show, addToCart, toggleShow } = useStore();

  return (
    <div>
      <Navbar size={cart.length} setShow={toggleShow} />
        <Main handleClick={addToCart} />
      {warning && <div className="warning">Item is already in your cart</div>}
    </div>
  );
};

export default Home;
