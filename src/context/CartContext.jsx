import { createContext, useContext, useState } from "react";

// Create Cart Context
//it will store card item
const CartContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to use Cart Context
export function useCart() {
  return useContext(CartContext);
}
