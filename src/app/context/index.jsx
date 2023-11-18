
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Cart list + counter
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartCount, setShoppingCartCount] = useState(0);

  // Product detail modal state - true/false
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen);

  // Product to show in modal
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{ 
        shoppingCartCount, setShoppingCartCount,
        isProductDetailOpen, setIsProductDetailOpen,
        toggleProductDetail,
        productToShow, setProductToShow,
        shoppingCart, setShoppingCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
