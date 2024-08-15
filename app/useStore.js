import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  addedItems: {},
  totalPrice: 0,
  addToCart: (item) => set((state) => {
    const isPresent = state.cart.some(cartItem => cartItem.id === item.id);
    if (isPresent) return state;

    const updatedCart = [...state.cart, { ...item, amount: 1 }];
    const updatedTotalPrice = state.totalPrice + item.price;
    return {
      cart: updatedCart,
      totalPrice: updatedTotalPrice,
      addedItems: { ...state.addedItems, [item.id]: true },
    };
  }),
  removeFromCart: (id) => set((state) => {
    const itemToRemove = state.cart.find(item => item.id === id);
    const updatedCart = state.cart.filter(item => item.id !== id);
    const updatedTotalPrice = state.totalPrice - (itemToRemove.price * itemToRemove.amount);
    const updatedItems = { ...state.addedItems };
    delete updatedItems[id];
    return {
      cart: updatedCart,
      totalPrice: updatedTotalPrice,
      addedItems: updatedItems,
    };
  }),
  incrementItem: (id) => set((state) => {
    const updatedCart = state.cart.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    const item = state.cart.find(item => item.id === id);
    return {
      cart: updatedCart,
      totalPrice: state.totalPrice + item.price,
    };
  }),
  decrementItem: (id) => set((state) => {
    const item = state.cart.find(item => item.id === id);
  
    if (item) {
      if (item.amount > 1) {
        // If the item quantity is greater than 1, decrement the amount and total price
        const updatedCart = state.cart.map(cartItem => 
          cartItem.id === id 
            ? { ...cartItem, amount: cartItem.amount - 1 } 
            : cartItem
        );
        return {
          cart: updatedCart,
          totalPrice: state.totalPrice - item.price,
        };
      }
      // If the item's quantity is 1, do not decrement it or change the total price
      return state;
    }
  
    // If the item doesn't exist, return the current state
    return state;
  }),
   
}));
