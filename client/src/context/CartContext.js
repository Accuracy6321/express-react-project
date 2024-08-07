import React, { createContext, useState } from 'react';
import getInitialCart from '../utils/getInitialCart';
import addToCartLocalStorage from '../utils/addToCart';
import removeFromCartLocalStorage from '../utils/removeFromCart';

// Create the context
export const CartContext = createContext(null);

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart());

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    addToCartLocalStorage(product);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    removeFromCartLocalStorage(index);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
