import { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id); // Find first occurrence
      if (index === -1) return prevCart; // If not found, return original cart
  
      const updatedCart = [...prevCart]; 
      updatedCart.splice(index, 1); // Remove only one item
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to use Cart Context
export function useCart() {
  return useContext(CartContext);
}
