import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [removingIndex, setRemovingIndex] = useState(null); 
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setRemovingIndex(index);
    setTimeout(() => {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
      setRemovingIndex(null);
    }, 300); 
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, removingIndex }}>
      {children}
    </CartContext.Provider>
  );
};
