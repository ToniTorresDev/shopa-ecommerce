
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Cart list + counter
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartCount, setShoppingCartCount] = useState(0);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const toggleShoppingCartModal = () => setIsShoppingCartOpen(!isShoppingCartOpen);

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
        shoppingCart, setShoppingCart,
        isShoppingCartOpen, setIsShoppingCartOpen,
        toggleShoppingCartModal
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
