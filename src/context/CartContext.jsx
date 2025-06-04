import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productId, setproductId] = useState()
  
  return (
    <CartContext.Provider value={{productId,setproductId}}>
      {children}
    </CartContext.Provider>
  );
};
