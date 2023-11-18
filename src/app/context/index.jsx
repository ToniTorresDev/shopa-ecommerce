
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Aquí defines el estado inicial del número del carrito
  const [shoppingCartCount, setShoppingCartCount] = useState(0);

  // Product detail modal state
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen);

  // Product to show in modal
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{ 
        shoppingCartCount, setShoppingCartCount,
        isProductDetailOpen, setIsProductDetailOpen,
        toggleProductDetail,
        productToShow, setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
