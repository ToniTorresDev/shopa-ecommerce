import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  // Cart list
  const [shoppingCart, setShoppingCart] = useState([])

  // Shopping Modal
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const toggleShoppingCartModal = () =>
    setIsShoppingCartOpen(!isShoppingCartOpen)

  // Product detail modal state - true/false
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

  // Product to show in modal
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider
      value={{
        isProductDetailOpen,
        setIsProductDetailOpen,
        toggleProductDetail,
        productToShow,
        setProductToShow,
        shoppingCart,
        setShoppingCart,
        isShoppingCartOpen,
        setIsShoppingCartOpen,
        toggleShoppingCartModal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
