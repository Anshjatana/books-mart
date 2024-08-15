'use client';
import React from 'react'
import {useStore} from '../useStore';
import Navbar from '../Components/Navbar';
import Cart from '../Components/Cart';

const Cartpage = () => {
    const { cart, warning, show, addToCart, toggleShow } = useStore();
  return (
    <div>
    <Navbar size={cart.length} setShow={toggleShow} />
    <Cart cart={cart}/>
    </div>
  )
}

export default Cartpage
