import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Aquí defines el estado inicial de tu carrito de compras
  const [shoppingCartCount, setShoppingCartCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ 
        shoppingCartCount, setShoppingCartCount 
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
