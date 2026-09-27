import React from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (dish) => setCartItems((old) => {
    const existing = old.find((item) => item.id === dish.id);
    return existing ? old.map((item) => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item) : [...old, { ...dish, quantity: 1 }];
  });
  const removeFromCart = (id) => setCartItems((old) => old.filter((item) => item.id !== id));
  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>{children}</CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartProvider is missing");
  return context;
}
