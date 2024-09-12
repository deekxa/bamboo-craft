import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [removingIndex, setRemovingIndex] = useState(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart"); // Clear localStorage when the cart is empty
    }
  }, [cart]);

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

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear localStorage when cart is cleared
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, removingIndex }}>
      {children}
    </CartContext.Provider>
  );
};
